module Display
  class Route
    attr_accessor :route, :stop_headways

    delegate :color, :text_color, :name, :alternate_name, :visible?, to: :route

    def initialize(route)
      @route = route
      @stop_headways = Set.new
    end

    def add_stop_headway(stop_headway)
      stop_headways << stop_headway
    end

    def min_actual_headway
      stop_headways.map { |s| s.min_actual_headway_for_route(route.internal_id) }.compact.min
    end

    def max_actual_headway
      stop_headways.map { |s| s.max_actual_headway_for_route(route.internal_id) }.compact.max
    end

    def min_scheduled_headway
      stop_headways.map { |s| s.min_scheduled_headway_for_route(route.internal_id) }.compact.min
    end

    def max_scheduled_headway
      stop_headways.map { |s| s.max_scheduled_headway_for_route(route.internal_id) }.compact.max
    end

    def max_difference_headway
      @max_difference_headway ||= stop_headways.select { |headway|
        headway.difference_for_route(route.internal_id).present?
      }.max_by { |headway|
        headway.difference_for_route(route.internal_id)
      }
    end

    def status
      if max_difference_headway.nil?
        if route.scheduled?
          "No Service"
        else
          "Not Scheduled"
        end
      elsif max_difference_headway.difference_for_route(route.internal_id) > 2
        "Not Good"
      else
        "Good Service"
      end
    end
  end
end