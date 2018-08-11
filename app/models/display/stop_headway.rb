module Display
  class StopHeadway
    attr_accessor :stop, :scheduled_headway, :actual_headway

    def initialize(stop_id, route)
      @stop = Stop.find_by!(internal_id: stop_id)
      @route = route
      @scheduled_times = []
      @actual_times = []
    end

    def add_actual_trip_time(time)
      actual_times << time
    end

    def actual_headway
      times = actual_times.clone
      times << Time.current if times.size == 1
      times.sort.each_cons(2).map { |a,b| (b - a) / 60 }.max
    end

    def scheduled_headway
      @scheduled_headway ||= stop.current_headways_for_route(route.internal_id).max
    end

    def difference
      actual_headway - scheduled_headway if scheduled_headway
    end

    attr_reader :actual_times

    private

    attr_reader :route
  end
end