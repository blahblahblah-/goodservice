class Api::InfoController < ApplicationController
  BOROUGHS = ["The Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"]

  def index
    result = Rails.cache.fetch("trip-data", expires_in: 1.minute) do
      self.class.refresh_data
    end
    render json: result
  end

  def self.refresh_data
    processor = ScheduleProcessor.new
    routes = processor.routes.reject { |_, route|
      !route.visible? && !route.scheduled?
    }.sort_by { |_, v| "#{v.name} #{v.alternate_name}" }.map do |_, route|
      {
        name: route.name,
        color: route.color && "##{route.color}",
        text_color: route.text_color && "##{route.text_color}",
        alternate_name: route.alternate_name,
        status: route.status,
        destinations: {
          north: route.directions[1].destinations,
          south: route.directions[3].destinations,
        },
        north: route.directions[1].line_directions.reject { |ld|
            ld.max_actual_headway.nil?
          }.map { |ld|
          {
            name: ld.name,
            max_actual_headway: ld.max_actual_headway,
            max_scheduled_headway: ld.max_scheduled_headway,
          }
        },
        south: route.directions[3].line_directions.reject { |ld|
            ld.max_actual_headway.nil?
          }.map { |ld|
          {
            name: ld.name,
            max_actual_headway: ld.max_actual_headway,
            max_scheduled_headway: ld.max_scheduled_headway,
          }
        }
      }
    end

    lines = Hash[BOROUGHS.map do |borough|
      [borough, processor.lines_by_borough(borough).map{ |line|
        {
          name: line.name,
          routes: line.routes.map { |route|
            {
              name: route.name,
              color: route.color && "##{route.color}",
              text_color: route.text_color && "##{route.text_color}",
            }
          },
          status: line.status,
          destinations: {
            north: line.destinations[1],
            south: line.destinations[3],
          },
          north: line.directions[1].reject { |ld|
            ld.max_actual_headway.nil?
          }.map { |ld|
            {
              type: ld.type,
              max_actual_headway: ld.max_actual_headway,
              max_scheduled_headway: ld.max_scheduled_headway,
              routes: ld.routes.map { |route|
                {
                  name: route.name,
                  color: route.color && "##{route.color}",
                  text_color: route.text_color && "##{route.text_color}",
                }
              }
            }
          },
          south: line.directions[3].reject { |ld|
            ld.max_actual_headway.nil?
          }.map { |ld|
            {
              type: ld.type,
              max_actual_headway: ld.max_actual_headway,
              max_scheduled_headway: ld.max_scheduled_headway,
              routes: ld.routes.map { |route|
                {
                  name: route.name,
                  color: route.color && "##{route.color}",
                  text_color: route.text_color && "##{route.text_color}",
                }
              }
            }
          },
        }
      }]
    end]

    begin
      feed = FeedProcessor.new
      blog_post = {
        title: feed.latest.title,
        link: feed.latest.link,
      }
    rescue StandardError => e
      puts "Error retrieving feed: #{e.message}"
      puts e.backtrace
    end

    result = {
      routes: routes,
      lines: lines,
      blog_post: blog_post,
      timestamp: Time.current.iso8601,
    }

    Rails.cache.write("trip-data", result, expires_in: 1.day)
    result
  end
end