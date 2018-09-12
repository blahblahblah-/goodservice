module Display
  class Route
    attr_accessor :route, :directions

    delegate :color, :text_color, :name, :alternate_name, :visible?, :scheduled?, to: :route

    def initialize(route, stop_times, timestamp)
      @route = route
      @directions = {
        1 => Display::RouteDirection.new(route.internal_id, stop_times, timestamp),
        3 => Display::RouteDirection.new(route.internal_id, stop_times, timestamp),
      }
    end

    def push_trip(trip)
      directions[trip.direction].push_trip(trip)
    end

    def status
      if directions.any? {|_, d| d.line_directions.any? { |ld| ld.max_actual_headway.present? && ld.max_scheduled_headway.nil? } }
        "Service Change"
      elsif max_headway_discreprency.nil?
        if route.scheduled?
          "No Service"
        else
          "Not Scheduled"
        end
      elsif max_headway_discreprency > 2
        "Not Good"
      else
        "Good Service"
      end
    end

    private

    attr_accessor :trips

    def max_headway_discreprency
      directions.map { |_, rd|
        rd.headway_discreprency
      }.reject { |headway_discreprency|
        headway_discreprency.nil?
      }.max
    end
  end
end