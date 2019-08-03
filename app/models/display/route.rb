module Display
  class Route
    attr_accessor :route, :directions

    delegate :color, :text_color, :name, :alternate_name, :internal_id, :visible?, :scheduled?, to: :route

    def initialize(route, stop_times, timestamp, stops)
      @route = route
      @directions = {
        1 => Display::RouteDirection.new(route.internal_id, 1, stop_times, timestamp, stops),
        3 => Display::RouteDirection.new(route.internal_id, 3, stop_times, timestamp, stops),
      }
      @unavailable = false
    end

    def push_trip(trip)
      directions[trip.direction].push_trip(trip)
    end

    def status
      return @status if @status
      return @status = "No Data" if unavailable

      if delay >= 5
        @status = "Delay"
      elsif directions.any? { |_, d|
        d.line_directions.any? { |ld|
          (ld.max_actual_headway.present? && ld.max_scheduled_headway.nil? && d.line_directions.none? { |ld2|
            ld.line == ld2.line && ld2.max_actual_headway.present? && ld2.max_scheduled_headway.present?
          }) ||
          (ld.max_scheduled_headway.present? && ld.max_actual_headway.nil? && max_headway_discrepancy.present?)
        }
      }
        @status = "Service Change"
      elsif (scheduled_destinations - destinations).any? && destinations.present? && scheduled_destinations.size == 1
        @status = "Service Change"
      elsif any_lines_not_in_service? && any_lines_in_service?
        @status = "Service Change"
      elsif max_headway_discrepancy.nil?
        if route.scheduled?
          @status = "No Service"
        else
          @status = "Not Scheduled"
        end
      elsif max_headway_discrepancy > 2 || (max_travel_time >= 0.25 && max_travel_time_discrepancy >= 2)
        @status = "Not Good"
      else
        @status = "Good Service"
      end
    end

    def max_travel_time
      @max_travel_time ||= directions.map { |_, rd|
        rd.travel_time
      }.reject { |travel_time|
        travel_time.nil?
      }.max || 0
    end

    def max_headway_discrepancy
      @max_headway_discrepancy ||= directions.map { |_, rd|
        rd.headway_discrepancy
      }.reject { |headway_discrepancy|
        headway_discrepancy.nil?
      }.max
    end

    def max_travel_time_discrepancy
      @max_travel_time_discrepancy ||= directions.map { |_, rd|
        rd.max_travel_time_discrepancy
      }.reject { |max_travel_time_discrepancy|
        max_travel_time_discrepancy.nil?
      }.max
    end

    def set_unavailable!
      @unavailable = true
    end

    private

    attr_accessor :trips, :unavailable

    def delay
      directions.map { |_, rd|
        rd.delay
      }.max || 0
    end

    def scheduled_destinations
      directions.map { |_, v| v.scheduled_destinations }.flatten.sort.uniq
    end

    def destinations
      directions.map { |_, v| v.destinations }.flatten.sort.uniq
    end

    def any_lines_not_in_service?
      directions.any? { |_, rd| rd.lines_not_in_service.present? }
    end

    def any_lines_in_service?
      directions.any? { |_, rd| rd.any_lines_in_service? }
    end
  end
end