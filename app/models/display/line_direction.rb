module Display
  class LineDirection
    delegate :name, to: :line_direction
    attr_accessor :line_direction

    def initialize(line_direction, stop_times, timestamp)
      @line_direction = line_direction
      @stop_times = stop_times
      @timestamp = timestamp
      @trips = []
    end

    def push_trip(trip)
      trips << trip
    end

    def destinations
      trips&.map(&:last_stop).uniq.map { |id|
        Stop.find_by(internal_id: id).stop_name
      }
    end

    def routes
      trips.map(&:route_id).uniq.sort.map { |route| Display::RouteDisplay.new(::Route.find_by(internal_id: route)) }
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
      st = stop_times[line_direction.last_stop]
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

    def type
      if line_direction.kind_of?(ExpressLineDirection)
        "Express"
      elsif line_direction.kind_of?(LocalLineDirection)
        "Local"
      end
    end

    private

    attr_accessor :trips, :stop_times, :timestamp

    def treat_times(times)
      if (timestamp + 40.minutes).to_date == (timestamp.to_date + 1.day)
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