module Display
  class RouteLineDirection

    delegate :name, :boroughs, :travel_time, :parent_name, :first_stops, :last_stops, :line, to: :line_direction

    def initialize(route_id, line_direction, trips, stop_times, timestamp, stops)
      @route_id = route_id
      @line_direction = line_direction
      @trips = trips.select { |t|
        t.upcoming_line_directions.include?(line_direction)
      }
      @stop_times = stop_times
      @timestamp = timestamp
      @stops = stops
    end

    def delay
      @delay if @delay

      return @delay = 0 if trips.empty?

      @delay = trips.map(&:delay).max
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
          } || stop_times[line_direction.penultimate_stop].none? { |pen_st|
            st.trip_internal_id == pen_st.trip_internal_id
          }
        }
      end
      times = st.map(&:departure_time)
      times << (Time.current - Time.current.beginning_of_day).to_i if times.size == 1
      @max_scheduled_headway = treat_times(times).sort.each_cons(2).map { |a,b| (b - a) / 60 }.max
    end

    def headway_discrepancy
      return nil if trips.empty?
      max_actual_headway - max_scheduled_headway if max_scheduled_headway
    end

    def scheduled_runtimes
      line_direction.scheduled_runtimes.map do |k, v|
        {
          id: k,
          time: v,
        }
      end
    end

    def actual_runtimes
      line_direction.actual_runtimes.reject { |k, v| v.empty? || !is_route_applicable?(k) }.map do |k, v|
        runtime_stops = k.split("-")
        first_stop = stops.find { |s| s.internal_id == runtime_stops[0]}
        last_stop = stops.find { |s| s.internal_id == runtime_stops[1]}
        first_stop_name = first_stop&.alternate_name || first_stop&.stop_name
        last_stop_name = last_stop&.alternate_name || last_stop&.stop_name
        {
          id: k,
          description: "#{first_stop_name} to #{last_stop_name} via #{name}",
          time: v.inject { |sum, el| sum + el }.to_f / v.size,
        }
      end
    end

    private

    attr_accessor :trips, :stop_times, :line_direction, :route_id, :timestamp, :stops

    def is_route_applicable?(stop_pattern)
      stops = stop_pattern.split('-').map { |s| s[0..2] }
      trips.any? {|t|
        stops.all? { |s|
          t.stops.map { |st| st[0..2] }.include?(s)
        }
      }
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