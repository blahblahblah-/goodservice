module Display
  class RouteDirection

    attr_accessor :trips

    def initialize(route_id, direction, stop_times, timestamp, stops)
      @route_id = route_id
      @direction = direction
      @trips = []
      @stop_times = stop_times
      @timestamp = timestamp
      @stops = stops
    end

    def status
      return @status if @status
      if line_directions.any?(&:delayed?)
        @status = "Delay"
      elsif line_directions.empty? && lines_not_in_service.any?
        @status = "No Service"
      elsif line_directions.empty?
        @status = "Not Scheduled"
      elsif line_directions.any? { |ld|
          (ld.rerouted? && line_directions.none? { |ld2| ld.line == ld2.line && ld2.normal_routing?})
        }
        @status = "Service Change"
      elsif (scheduled_destinations - destinations).any? && destinations.present? && scheduled_destinations.size == 1
        @status = "Service Change"
      elsif lines_not_in_service.present?
        @status = "Service Change"
      elsif line_directions.any? { |ld| ld.slow? || ld.headway_gap? }
        @status = "Not Good"
      else
        @status = "Good Service"
      end
    end

    def secondary_status
      return status unless status == "Not Good"

      if line_directions.any? { |ld| ld.slow? }
        return "Slow"
      end

      return "Not Good"
    end

    def status_summary
      return @status_summary if @status_summary
      return if ["Not Scheduled", "No Service"].include?(status)

      strs = []
      intro = "#{scheduled_destinations.join('/').presence || destinations.join('/').presence}-bound trains are "

      delays = delayed_line_directions.each_with_index.inject([]) do |collection, pair|
        element, index = pair

        if collection.last && collection.last.last == delayed_line_directions[index - 1]
          collection.last << element
        else
          collection << [element]
        end
        collection
      end

      delays.each do |d|
        delay = d.map(&:delay).compact&.max.round
        strs << "experiencing delays between #{d.first.actual_first_stop_name} and #{d.last.actual_last_stop_name} (for #{delay} mins)"
      end

      long_headways = long_headway_line_directions.each_with_index.inject([]) do |collection, pair|
        element, index = pair

        if collection.last && collection.last.last == long_headway_line_directions[index - 1]
          collection.last << element
        else
          collection << [element]
        end
        collection
      end

      long_headways.each do |l|
        scheduled_headway = l.map(&:max_scheduled_headway).compact&.max.round
        actual_headway = l.map(&:max_actual_headway).compact&.max.round
        strs << "experiencing longer than normal wait times between #{l.first.actual_first_stop_name} and #{l.last.actual_last_stop_name} (up to #{actual_headway} mins, normally every #{scheduled_headway} mins)"
      end

      slow = slow_line_directions.each_with_index.inject([]) do |collection, pair|
        element, index = pair

        if collection.last && collection.last.last == slow_line_directions[index - 1]
          collection.last << element
        else
          collection << [element]
        end
        collection
      end

      slow.each do |s|
        time = s.map(&:travel_time_discrepancy).compact&.sum.round
        strs << "traveling slowly between #{s.first.actual_first_stop_name} and #{s.last.actual_last_stop_name} (taking #{time} mins longer)"
      end

      if service_changes = service_change_line_directions.presence
        strs << "running on #{service_changes.map(&:name).join('/')}"
      end

      if no_service = lines_not_in_service.presence
        strs << "not running on #{no_service.map(&:name).join('/')}"
      end

      if short_turns = short_turn_destinations.presence
        strs << "terminating at #{short_turn_destinations.join('/')}"
      end

      return unless strs.present?

      if strs.size > 1
        strs[strs.size - 1] = "and #{strs.last}"
      end

      @status_summary = "#{intro}#{strs.join(', ')}."
    end

    def delayed_line_directions
      line_directions.select(&:delayed?)
    end

    def long_headway_line_directions
      line_directions.select(&:headway_gap?)
    end

    def slow_line_directions
      line_directions.select(&:slow?)
    end

    def service_change_line_directions
      line_directions.select(&:rerouted?)
    end

    def short_turn_destinations
      destinations if (scheduled_destinations - destinations).present?
    end

    def push_trip(trip)
      trips << trip
    end

    def destinations
      trips&.map(&:last_stop).uniq.map { |id|
        stops.find { |s| s.internal_id == id}&.stop_name
      }
    end

    def scheduled_destinations
      StopTime.scheduled_destinations_by_route(route_id, (direction - 1) / 2)
    end

    def destination_stops
      routings.map(&:last).uniq
    end

    def routings
      trips.map(&:stops).sort_by(&:size).reverse.inject([]) do |memo, stops_array|
        unless memo.any? { |array| (stops_array - array).empty? }
          memo << stops_array
        end
        memo
      end
    end

    def line_directions
      return [] if trips.empty?
      @line_directions ||= line_directions_data.map do |ld|
        Display::RouteLineDirection.new(route_id, ld, trips, stop_times, timestamp, stops)
      end
    end

    def travel_time
      line_directions.map(&:travel_time).reject { |travel_time|
        travel_time.nil?
      }.max
    end

    def max_travel_time_discrepancy
      return nil if trips.empty?
      line_directions.map(&:travel_time_discrepancy).reject { |travel_time_discrepancy|
        travel_time_discrepancy.nil?
      }.max
    end

    def headway_discrepancy
      return nil if trips.empty?
      line_directions.map(&:headway_discrepancy).reject { |headway_discrepancy|
        headway_discrepancy.nil?
      }.max
    end

    def delay
      line_directions.map(&:delay).max || 0
    end

    def lines_not_in_service
      return @lines_not_in_service if @lines_not_in_service
      scheduled_lines = ::LineDirection.scheduled_lines(route_id, (direction - 1) / 2)
      lines_in_service = line_directions_data&.map(&:line) || []

      @lines_not_in_service = scheduled_lines - lines_in_service
    end

    def any_lines_in_service?
      line_directions.any?
    end

    private

    attr_accessor :stop_times, :route_id, :timestamp, :direction, :stops

    def line_directions_data
      return @line_directions_data if @line_directions_data

      arrays = trips.map { |t|
        t.line_directions.reverse
      }.sort_by { |ld|
        ld.size
      }.reverse

      head, *rest = arrays

      return if head.nil?

      @line_directions_data = head.zip(*rest)&.flatten&.compact&.uniq.reverse
    end
  end
end