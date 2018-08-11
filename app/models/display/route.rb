module Display
  class Route
    attr_accessor :route, :stop_headways

    delegate :color, :text_color, :name, :alternate_name, to: :route

    def initialize(route)
      @route = route
      @stop_headways = Hash.new { |h, k| h[k] = StopHeadway.new(k, route) }
    end

    def add_actual_trip_time(stop_id, trip_time)
      stop_headways[stop_id].add_actual_trip_time(trip_time)
    end

    def max_difference_headway
      @max_difference_headway ||= stop_headways.select { |_, headway|
        headway.difference.present?
      }.max_by { |_, headway|
        headway.difference
      }&.last
    end

    def status
      if max_difference_headway.nil?
        if route.scheduled?
          "No Service"
        else
          "No Scheduled Service"
        end
      elsif max_difference_headway.difference > 2
        puts "Headway discreprency at #{max_difference_headway.stop.stop_name} (#{max_difference_headway.stop.internal_id}) "\
        "for #{route.internal_id}. #{max_difference_headway.actual_times.sort.map { |t| t.strftime("%H:%M") }}. "\
        "Expected: #{max_difference_headway.scheduled_headway}, actual: #{max_difference_headway.actual_headway}"
        "Not Good - expected headway: #{max_difference_headway.scheduled_headway.round(1)} mins, "\
        "actual: #{max_difference_headway.actual_headway.round(1)}"
      else
        "Good Service"
      end
    end

    def diamond?
      name.ends_with?("X")
    end

    def display_name
      diamond? ? name[0] : name
    end

    def classes
      diamond? ? "route diamond" : "route bullet"
    end

    def inner_classes
      "diamond-inner" if diamond?
    end

    def style
      value = "background-color: ##{color}"
      value << "; color: ##{text_color}" if text_color
      # value << "; width: 1.5em" if name.length == 3
      value
    end

    def inner_style
      "font-size: .7em" if name.length == 3
    end
  end
end