module Display
  class StopHeadway
    attr_accessor :stop, :scheduled_headway, :actual_headway, :line

    def initialize(stop_id)
      @stop = Stop.find_by!(internal_id: stop_id)
      @line = line
      @scheduled_times = []
      @actual_times = Hash.new { |h, k| h[k] = [] }
      @scheduled_headway_for_route = {}
    end

    def add_actual_trip_time(route_internal_id, time)
      actual_times[route_internal_id] << time
    end

    def actual_times_for_route(route_internal_id)
      actual_times[route_internal_id]
    end

    def actual_headway_for_route(route_internal_id)
      times = actual_times[route_internal_id].clone
      times << Time.current if times.size == 1
      times.sort.each_cons(2).map { |a,b| (b - a) / 60 }.max
    end

    def scheduled_headway_for_route(route_internal_id)
      @scheduled_headway_for_route[route_internal_id] ||= stop.current_headways_for_route(route_internal_id).max
    end

    def difference_for_route(route_internal_id)
      scheduled = scheduled_headway_for_route(route_internal_id)
      actual_headway_for_route(route_internal_id) - scheduled if scheduled
    end

    def routes
      actual_times.keys.sort
    end

    private

    attr_reader :route, :actual_times
  end
end