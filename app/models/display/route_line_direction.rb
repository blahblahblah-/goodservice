module Display
  class RouteLineDirection

    delegate :name, to: :line_direction

    def initialize(route_id, line_direction, trips, stop_times, timestamp)
      @route_id = route_id
      @line_direction = line_direction
      @trips = trips.select { |t|
        t.upcoming_line_directions.include?(line_direction)
      }
      @stop_times = stop_times
      @timestamp = timestamp
    end

    def delay
      @delay if @delay

      return @delay = 0 if trips.empty?

      @delay = trips.map(&:delay).max
    end

    def max_actual_headway
      @max_actual_headway if @max_actual_headway
      compute_actual_headways
      @max_actual_headway
    end

    def median_actual_headway
      @median_actual_headway if @median_actual_headway
      compute_actual_headways
      @median_actual_headway
    end

    def max_scheduled_headway
      @max_scheduled_headway if @max_scheduled_headway
      compute_scheduled_headways
      @max_scheduled_headway
    end

    def median_scheduled_headway
      @median_scheduled_headway if @median_scheduled_headway
      compute_scheduled_headways
      @median_scheduled_headway
    end
    
    def headway_discreprency
      return nil if trips.empty?
      max_actual_headway - max_scheduled_headway if max_scheduled_headway
    end

    private

    attr_accessor :trips, :stop_times, :line_direction, :route_id, :timestamp

    def compute_actual_headways
      times = trips.map { |t|
        t.upcoming_line_directions[line_direction]
      }
      times << trips.first.timestamp if times.size == 1
      headways = times.sort.each_cons(2).map { |a, b| (b - a) }
      len = headways.size
      if len == 0
        @max_actual_headway = nil
        @median_actual_headway = nil
        return
      end
      @median_actual_headway = ((headways[(len - 1) / 2] + headways[len / 2]) / 2.0) / 60
      @max_actual_headway = headways.max / 60
    end

    def compute_scheduled_headways
      if stop_times[line_direction.last_stop].nil?
        @median_scheduled_headway = nil
        @max_scheduled_headway = nil
        return nil
      end

      st = stop_times[line_direction.last_stop].select { |st| st.trip.route_internal_id == route_id}
      if line_direction.kind_of?(ExpressLineDirection)
        st.reject! { |st|
          stop_times[line_direction.local_line_direction.last_stop].any? { |local_st|
            st.trip_internal_id == local_st.trip_internal_id
          }
        }
      end
      headways = treat_times(st.map(&:departure_time)).sort.each_cons(2).map { |a, b| (b - a) }
      len = headways.size
      if len == 0
        @max_scheduled_headway = nil
        @median_scheduled_headway = nil
        return nil
      end

      @max_scheduled_headway = headways.max / 60
      @median_scheduled_headway = ((headways[(len - 1) / 2] + headways[len / 2]) / 2.0) / 60
    end


    def treat_times(times)
      if (timestamp + 60.minutes).to_date == (timestamp.to_date + 1.day)
        return times.map { |time|
          (time < timestamp - timestamp.beginning_of_day) ? time + 86400 : time
        }
      elsif timestamp.hour < 4
        return times.map { |time|
          time % 86400
        }
      end
      times
    end
  end
end