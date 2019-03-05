class Api::SlackController < ApplicationController
  require 'json'
  require 'net/http'
  require 'uri'

  skip_before_action :verify_authenticity_token

  # Responds to slash commands
  def index
    info = ScheduleProcessor.headway_info
    query = params[:text]

    if (data = info[:routes].find { |r| r[:id] == query})
      tracker.event(category: 'slack', action: 'route', label: query)
      result = route_response(data)
    elsif query == 'delays'
      tracker.event(category: 'slack', action: 'slash', label: 'delays')
      result = delays_response(info[:routes])
    else
      tracker.event(category: 'slack', action: 'slash', label: 'default')
      result = default_response(info)
    end
   
    render json: result
  end

  # Responds to select interactive components
  def query
    payload = JSON.parse(params[:payload]).with_indifferent_access
    info = ScheduleProcessor.headway_info

    uri = URI(payload[:response_url])

    if payload[:actions].first[:action_id] == 'select_route'
      if (data = info[:routes].find { |r| r[:id] == payload[:actions].first[:selected_option][:value]})
        tracker.event(category: 'slack-default', action: 'route', value: data[:id])
        result = route_response(data)
      end
    elsif payload[:actions].first[:action_id] == 'select_line'
      lines = info[:lines].values.flatten
      if (data = lines.find { |l| l[:id] == payload[:actions].first[:selected_option][:value]})
        tracker.event(category: 'slack-defaulr', action: 'line', value: data[:id])
        result = line_response(data)
      end
    end

    Net::HTTP.post(uri, result.to_json, "Content-Type" => "application/json")

    render json: result
  end

  private

  def default_response(info)
    {
      response_type: "in_channel",
      channel: params[:channel_id],
      blocks:[
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "Check route status"
          },
          "accessory": {
            "type": "static_select",
            "action_id": "select_route",
            "placeholder": {
              "type": "plain_text",
              "text": "Select a route",
            },
            "options": info[:routes].map { |r|
              {
                "text": {
                  "type": "plain_text",
                  "text": (r[:name] == 'S') ? "S - #{r[:alternate_name]}" : r[:name],
                },
                "value": r[:id]
              }
            }
          }
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "Check line status"
          },
          "accessory": {
            "type": "static_select",
            "action_id": "select_line",
            "placeholder": {
              "type": "plain_text",
              "text": "Select a line",
            },
            "option_groups": info[:lines].map { |borough, lines|
              {
                "label": {
                  "type": "plain_text",
                  "text": borough
                },
                "options": lines.map { |line|
                  {
                    "text": {
                      "type": "plain_text",
                      "text": line[:name],
                    },
                    "value": line[:id],
                  }
                }
              }
            }
          }
        }
      ]
    }
  end

  def delays_response(info)
    delayed_routes = info.sort_by { |r|
      "#{r[:name]} #{r[:alternate_name]}"
    }.select { |r| r[:status] == "Delay" }.map { |r|
      r[:name] == 'S' ? r[:alternate_name] : r[:name]
    }

    if delayed_routes.any?
      {
        response_type: "in_channel",
        channel: params[:channel_id],
        text: "Delays detected on #{delayed_routes.join(', ')} trains"
      }
    else
      {
        text: "No delays currently detected."
      }
    end
  end

  def route_response(route_data)
    result = [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*#{route_data[:name]}#{route_data[:name] == 'S' ? " - " + route_data[:alternate_name] : ""} train*\n"\
                  "_Status_: *#{route_data[:status]}*"
        }
      },
      {
        "type": "divider"
      }
    ]

    result.push(*direction_route_response(route_data, :north)) unless route_data[:destinations][:north].blank?
    result.push(*direction_route_response(route_data, :south)) unless route_data[:destinations][:south].blank?
    result << {
      "type": "context",
      "elements": [
        {
          "type": "mrkdwn",
          "text": "More info on https://www.goodservice.io"
        }
      ]
    }

    {
      response_type: "in_channel",
      channel: params[:channel_id],
      blocks: result
    }
  end

  def direction_route_response(route_data, direction)
    result = [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "_To #{route_data[:destinations][direction].join(', ')}_"
        }
      }
    ]

    fields = [
      {
        "type": "mrkdwn",
        "text": "*Line*"
      },
      {
        "type": "mrkdwn",
        "text": "*Maximum Wait Time*"
      },
    ]

    fields.push(*route_data[direction].map { |l|
      delay = l[:delay] >= 5 ? ", *Delay: #{l[:delay]}*" : ""
      max_actual_headway = l[:max_scheduled_headway] && (l[:max_actual_headway] - l[:max_scheduled_headway]) > 2 ? "*#{l[:max_actual_headway]}*" : l[:max_actual_headway]
      [
        {
          "type": "plain_text",
          "text": l[:name]
        },
        {
          "type": "mrkdwn",
          "text": "Actual: #{max_actual_headway}, Scheduled: #{l[:max_scheduled_headway] || "--"}#{delay}"
        },
      ]
    }.flatten)

    result << {
      "type": "section",
      "fields": fields[0..9]
    }

    if fields.size > 10
      result << {
        "type": "section",
        "fields": fields[10..19]
      }
    end

    unless route_data[:lines_not_in_service][direction].blank?
      result << {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "_No service on #{route_data[:lines_not_in_service][direction].map { |l| l[:name] }.join(", ")}_"
        }
      }
    end

    result << {
      "type": "divider"
    }

    result
  end

  def line_response(line_data)
    result = [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*#{line_data[:name]} Line - #{line_data[:routes].map { |r| r[:name]}.join(', ')}*"
        }
      },
      {
        "type": "divider"
      }
    ]

    result.push(*direction_line_response(line_data, :north)) unless line_data[:destinations][:north].blank?
    result.push(*direction_line_response(line_data, :south)) unless line_data[:destinations][:south].blank?

    result << {
      "type": "context",
      "elements": [
        {
          "type": "mrkdwn",
          "text": "More info on https://www.goodservice.io"
        }
      ]
    }

    {
      response_type: "in_channel",
      channel: params[:channel_id],
      blocks: result
    }
  end

  def direction_line_response(line_data, direction)
    result = [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "_To #{line_data[:destinations][direction].join(', ')}_"
        }
      }
    ]

    fields = [
      {
        "type": "mrkdwn",
        "text": "*Service*"
      },
      {
        "type": "mrkdwn",
        "text": "*Maximum Wait Time*"
      },
    ]

    fields.push(*line_data[direction].map { |s|
      delay = s[:delay] >= 5 ? ", *Delay: #{s[:delay]}*" : ""
      max_actual_headway = s[:max_scheduled_headway] && (s[:max_actual_headway] - s[:max_scheduled_headway]) > 2 ? "*#{s[:max_actual_headway]}*" : s[:max_actual_headway]
      [
        {
          "type": "plain_text",
          "text": "#{s[:type] || 'Local'} - #{s[:routes].map { |r| r[:name]}.join(", ")}"
        },
        {
          "type": "mrkdwn",
          "text": "Actual: #{max_actual_headway}, Scheduled: #{s[:max_scheduled_headway] || "--"}#{delay}"
        },
      ]
    }.flatten)

    result << {
      "type": "section",
      "fields": fields[0..9]
    }

    if fields.size > 10
      result << {
        "type": "section",
        "fields": fields[10..19]
      }
    end

    result << {
      "type": "divider"
    }

    result
  end

  def tracker
    Staccato.tracker('UA-125010964-1', nil, ssl: true)
  end
end