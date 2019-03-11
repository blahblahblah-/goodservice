class Api::SlackController < ApplicationController
  require 'json'
  require 'net/http'
  require 'uri'

  skip_before_action :verify_authenticity_token
  before_action :verify_slack_request

  # Responds to slash commands
  def index
    info = ScheduleProcessor.headway_info
    query = params[:text]
    workspace = params[:enterprise_name] || params[:team_domain]
    user_id = params[:user_id]

    if query == 'help'
      result = help_response(info[:routes])
    elsif (data = info[:routes].find { |r| r[:id] == query})
      track_event('slash', "route/#{query}", user_id, workspace)
      result = route_response(data)
    elsif query == 'delays'
      track_event('slash', 'delays', user_id, workspace)
      result = delays_response(info[:routes])
    else
      track_event('slash', 'default', user_id, workspace)
      result = default_response(info)
    end
   
    render json: result
  end

  # Responds to select interactive components
  def query
    payload = JSON.parse(params[:payload]).with_indifferent_access
    info = ScheduleProcessor.headway_info

    uri = URI(payload[:response_url])
    workspace = payload.dig(:enterprise)&.dig(:name) || payload.dig(:team)&.dig(:domain)
    user_id = payload.dig(:user)&.dig(:id)

    if payload[:actions].first[:action_id] == 'select_route'
      if (data = info[:routes].find { |r| r[:id] == payload[:actions].first[:selected_option][:value]})
        track_event('default', "route/#{data[:id]}", user_id, workspace)
        result = route_response(data)
      end
    elsif payload[:actions].first[:action_id] == 'select_line'
      lines = info[:lines].values.flatten
      if (data = lines.find { |l| l[:id] == payload[:actions].first[:selected_option][:value]})
        track_event('default', "line/#{data[:id]}", user_id, workspace)
        result = line_response(data)
      end
    end

    Net::HTTP.post(uri, result.to_json, "Content-Type" => "application/json")

    render json: result
  end

  private

  def help_response(info)
    {
      text: "Usage:\n"\
        "_/goodservice_ is the main menu and will bring up select boxes of available routes and lines to then view statuses of.\n"\
        "_/goodservice delays_  displays a list of routes where delays are currently detected.\n"\
        "_/goodservice [route]_ (i.e. _/goodservice A_) is a shortcut to display current status about the route.\n\nRoutes available: #{info.map { |r| r[:id] }.join(" ") }"
    }
  end

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
        response_type: "in_channel",
        channel: params[:channel_id],
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
          "text": "*#{line_data[:name]} Line - #{line_data[:routes].map { |r| r[:name]}.join(', ')} Trains*\n"\
                  "_Status_: *#{line_data[:status]}*"
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
          "text": "#{s[:type] || 'Local'} - #{s[:routes].map { |r| r[:name]}.join(", ")} Trains"
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

  def tracker(user_id)
    @tracker ||= Staccato.tracker('UA-125010964-1', user_id, ssl: true)
  end

  def track_event(action, label, user_id, workspace)
    event = tracker(user_id).build_event(category: 'slack', action: action, label: label)
    event.add_custom_dimension(1, workspace)
    event.track!
  end

  def verify_slack_request
    slack_signature = request.headers["X-Slack-Signature"]
    timestamp = request.headers["X-Slack-Request-Timestamp"]
    body = request.body.read
    base = "v0:#{timestamp}:#{body}"
    key = ENV["SLACK_SIGNING_SECRET"]

    signature = "v0=#{OpenSSL::HMAC.hexdigest("SHA256", key, base)}"

    if (Time.current.to_i - timestamp.to_i).abs > 60 * 5
      return head :forbidden
    end

    if signature != slack_signature
      return head :forbidden
    end
  end
end