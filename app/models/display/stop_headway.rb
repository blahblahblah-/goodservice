module Display
  class StopHeadway
    attr_accessor :stop, :scheduled_headway, :actual_headway, :line

    def initialize(stop_id, stop_times)
      @stop = Stop.find_by!(internal_id: stop_id)
      @stop_times = stop_times
      @line = line
      @scheduled_times = []
      @actual_times = Hash.new { |h, k| h[k] = [] }
      @max_scheduled_headway_for_route = {}
      @min_scheduled_headway_for_route = {}
    end

    def add_actual_trip_time(route_internal_id, time)
      actual_times[route_internal_id] << time
    end

    def actual_times_for_route(route_internal_id)
      actual_times[route_internal_id]
    end

    def max_actual_headway_for_route(route_internal_id)
      times = actual_times[route_internal_id].clone
      times << Time.current if times.size == 1
      times.sort.each_cons(2).map { |a,b| (b - a) / 60 }.max
    end

    def min_actual_headway_for_route(route_internal_id)
      times = actual_times[route_internal_id].clone
      times << Time.current if times.size == 1
      times.sort.each_cons(2).map { |a,b| (b - a) / 60 }.min
    end

    def max_actual_headway
      times = actual_times.values.flatten
      times << Time.current if times.size == 1
      times.sort.each_cons(2).map { |a,b| (b - a) / 60 }.max
    end

    def min_actual_headway
      times = actual_times.values.flatten
      times << Time.current if times.size == 1
      times.sort.each_cons(2).map { |a,b| (b - a) / 60 }.min
    end

    def max_scheduled_headway_for_route(route_internal_id)
      @max_scheduled_headway_for_route[route_internal_id] ||= current_headways_for_route(route_internal_id).max
    end

    def min_scheduled_headway_for_route(route_internal_id)
      @min_scheduled_headway_for_route[route_internal_id] ||= current_headways_for_route(route_internal_id).min
    end

    def max_scheduled_headway
      @max_scheduled_headway ||= current_headways.max
    end

    def min_scheduled_headway
      @min_scheduled_headway ||= current_headways.min
    end

    def difference_for_route(route_internal_id)
      scheduled = max_scheduled_headway_for_route(route_internal_id)
      max_actual_headway_for_route(route_internal_id) - scheduled if scheduled
    end

    def difference
      max_actual_headway - max_scheduled_headway if max_scheduled_headway
    end

    def routes
      actual_times.keys
    end

    attr_reader :actual_times

    private

    attr_reader :route, :stop_times

    def current_headways
      times = stop_times.map(&:departure_time)
      times << Time.current - Time.current.beginning_of_day if times.size == 1
      times.sort.each_cons(2).map { |a,b| (b - a) / 60 }
    end

    def current_headways_for_route(route_internal_id)
      times = stop_times.select { |st| st.trip.route_internal_id == route_internal_id}.map(&:departure_time)
      times << Time.current - Time.current.beginning_of_day if times.size == 1
      times.sort.each_cons(2).map { |a,b| (b - a) / 60 }
    end
  end
end