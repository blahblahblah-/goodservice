class Api::SlackController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    info = ScheduleProcessor.headway_info[:routes]
    route = params[:text]

    if (data = info.find { |r| r[:id] == route})
      result = route_response(data)
    else
      result = default_response(info)
    end
   
    render json: result
  end

  private

  def default_response(info)
    {
      text: "Usage: _/goodservice [route]_\nChoose from #{info.map { |r| r[:id] }.join(" ") }"
    }
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

    result.push(*direction_response(route_data, :north)) unless route_data[:destinations][:north].blank?
    result.push(*direction_response(route_data, :south)) unless route_data[:destinations][:south].blank?
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

  def direction_response(route_data, direction)
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
        "text": "*Max Wait*"
      },
    ]

    fields.push(*route_data[direction].map { |l|
      delay = l[:delay] >= 5 ? ", Delay: #{l[:delay]}" : ""
      [
        {
          "type": "plain_text",
          "text": l[:name]
        },
        {
          "type": "plain_text",
          "text": "Actual: #{l[:max_actual_headway]}, Scheduled: #{l[:max_scheduled_headway] || "--"}#{delay}"
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
end