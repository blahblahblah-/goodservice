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

      next_trip = trips.sort_by { |t|
        t.upcoming_line_directions[line_direction]
      }.first

      next_trip_arrival = next_trip.upcoming_line_directions[line_direction]

      previous_estimate = Rails.cache.read("route-line-direction-next-#{route_id}-#{line_direction.id}-#{next_trip.trip_id}")
      if previous_estimate

        Rails.cache.write("route-line-direction-next-#{route_id}-#{line_direction.id}-#{next_trip.trip_id}", previous_estimate, expires_in: 5.minutes)
        @delay = (next_trip_arrival - previous_estimate) / 60
        if @delay > 0
          puts "Delay detected on #{route_id} - #{line_direction.name} - #{line_direction.direction}: #{@delay}"
        end
        @delay
      else
        Rails.cache.write("route-line-direction-next-#{route_id}-#{line_direction.id}-#{next_trip.trip_id}", next_trip_arrival, expires_in: 5.minutes)
        @delay = 0
      end
    end

    def max_actual_headway
      @max_actual_headway if @max_actual_headway
      times = trips.map { |t|
        t.upcoming_line_directions[line_direction]
      }
      times << trips.first.timestamp if times.size == 1
      @max_actual_headway = times.sort.each_cons(2).map { |a,b| (b - a) / 60 }.max
    end

    def max_scheduled_headway
      @max_scheduled_headway if @max_scheduled_headway
      return nil if stop_times[line_direction.last_stop].nil?
      st = stop_times[line_direction.last_stop].select { |st| st.trip.route_internal_id == route_id}
      if line_direction.kind_of?(ExpressLineDirection)
        st.reject! { |st|
          stop_times[line_direction.local_line_direction.last_stop].any? { |local_st|
            st.trip_internal_id == local_st.trip_internal_id
          }
        }
      end
      times = st.map(&:departure_time)
      @max_scheduled_headway = treat_times(times).sort.each_cons(2).map { |a,b| (b - a) / 60 }.max
    end

    def headway_discreprency
      return nil if trips.empty?
      max_actual_headway - max_scheduled_headway if max_scheduled_headway
    end

    private

    attr_accessor :trips, :stop_times, :line_direction, :route_id, :timestamp

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