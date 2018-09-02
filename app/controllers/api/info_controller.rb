class Api::InfoController < ApplicationController
  BOROUGHS = ["The Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"]

  def index
    result = Rails.cache.fetch("trip-data", expires_in: 5.minutes) do
      self.class.refresh_data
    end
    render json: result
  end

  def self.refresh_data
    processor = ScheduleProcessor.new
    routes = processor.routes.reject { |_, route|
      !route.visible? && route.min_scheduled_headway.nil?
    }.sort_by { |_, v| "#{v.name} #{v.alternate_name}" }.map do |_, route|

      {
        name: route.name,
        color: route.color && "##{route.color}",
        text_color: route.text_color && "##{route.text_color}",
        alternate_name: route.alternate_name,
        status: route.status,
        min_actual_headway: route.min_actual_headway,
        max_actual_headway: route.max_actual_headway,
        min_scheduled_headway: route.min_scheduled_headway,
        max_scheduled_headway: route.max_scheduled_headway,
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
          min_actual_headway: line.min_actual_headway,
          max_actual_headway: line.max_actual_headway,
          min_scheduled_headway: line.min_scheduled_headway,
          max_scheduled_headway: line.max_scheduled_headway,
        }
      }]
    end]

    result = {
      routes: routes,
      lines: lines,
    }

    Rails.cache.write("trip-data", result, expires_in: 5.minutes)
    result
  end
end