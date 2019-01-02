module Display
  class LineDirection
    delegate :name, to: :line_direction
    attr_accessor :line_direction

    def initialize(line_direction, stop_times, timestamp, stops)
      @line_direction = line_direction
      @stop_times = stop_times
      @timestamp = timestamp
      @trips = []
      @stops = stops
    end

    def push_trip(trip)
      trips << trip
    end

    def destinations
      trips&.map(&:last_stop).uniq.map { |id|
        stops.find { |s| s.internal_id == id}.stop_name
      }
    end

    def routes
      trips.map(&:route_id).uniq.sort.map { |route| Display::RouteDisplay.new(::Route.find_by(internal_id: route)) }.reject { |rd| rd.route.nil? }
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

    def type
      if line_direction.kind_of?(ExpressLineDirection)
        "Express"
      elsif line_direction.kind_of?(LocalLineDirection)
        "Local"
      end
    end

    private

    attr_accessor :trips, :stop_times, :timestamp, :stops

    def last_stop_reverse
      line_direction.last_stop[0..2] + (line_direction.last_stop[3] == "N" ? "S" : "N")
    end

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

    def compute_actual_headways
      times = trips.map { |t|
        time = t.upcoming_line_directions[line_direction]

        # Facilitate M train shuffle (where M train stops for Broadway-Brooklyn line are reverse of J/Z trains)
        if !time && t.route_id == "M" && line_direction.line.name == "Broadway (Brooklyn)"
          time = t.find_time(last_stop_reverse)
        end
        time
      }
      times << trips.first.timestamp if times.size == 1
      headways = times.sort.each_cons(2).map { |a, b| (b - a) }
      len = headways.size
      if len == 0
        @median_actual_headway = nil
        @max_actual_headway = nil
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

      # Facilitate M train shuffle
      if line_direction.line.name == "Broadway (Brooklyn)"
        st = stop_times[line_direction.last_stop].select { |st| st.trip.route_internal_id != "M"}
        st.concat(stop_times[last_stop_reverse].select { |st| st.trip.route_internal_id == "M"})
      else
        st = stop_times[line_direction.last_stop]
      end

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
        @median_scheduled_headway = nil
        @max_scheduled_headway = nil
        return
      end

      @median_scheduled_headway = ((headways[(len - 1) / 2] + headways[len / 2]) / 60) / 2.0
      @max_scheduled_headway = headways.max / 60
    end

  end
end