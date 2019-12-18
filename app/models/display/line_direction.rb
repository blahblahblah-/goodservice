module Display
  class LineDirection
    require 'descriptive_statistics'

    delegate :name, :alternate_name, :direction, to: :line_direction
    attr_accessor :line_direction

    def initialize(line_direction, stop_times, timestamp, stops, routes_data)
      @line_direction = line_direction
      @stop_times = stop_times
      @timestamp = timestamp
      @trips = []
      @stops = stops
      @routes_data = routes_data
    end

    def push_trip(trip)
      trips << trip
    end

    def destinations
      trips&.map(&:last_stop).uniq.map { |id|
        stops.find { |s| s.internal_id == id}&.stop_name
      }
    end

    def routes
      @routes ||= trips.map(&:route_id).uniq.sort.map { |route| Display::RouteDisplay.new(routes_data[route]) }.reject { |rd| rd.route.nil? }
    end

    def delay
      return @delay if @delay

      return @delay = 0 if trips.empty?

      @delay = trips.map(&:delay).max
    end

    def max_actual_headway
      actual_headways.max
    end

    def median_actual_headway
      i = actual_headways.size / 2
      actual_headways.sort[i]
    end

    def actual_headway_std_dev
      actual_headways.standard_deviation
    end

    def min_actual_headway
      actual_headways.min
    end

    def max_scheduled_headway
      scheduled_headways.max
    end

    def median_scheduled_headway
      i = scheduled_headways.size / 2
      scheduled_headways.sort[i]
    end

    def scheduled_headway_std_dev
      scheduled_headways.standard_deviation
    end

    def min_scheduled_headway
      scheduled_headways.min
    end

    def headway_discrepancy
      return nil if trips.empty?
      max_actual_headway - max_scheduled_headway if max_scheduled_headway
    end

    def travel_time
      line_direction.travel_time if headway_discrepancy.present?
    end

    def travel_time_discrepancy
      line_direction.travel_time_discrepancy if headway_discrepancy.present?
    end

    def name
      return alternate_name if alternate_name
      type
    end

    def type
      if line_direction.kind_of?(ExpressLineDirection)
        "Express"
      elsif line_direction.kind_of?(LocalLineDirection)
        "Local"
      end
    end

    def scheduled_runtimes
      line_direction.scheduled_runtimes.map do |k, v|
        {
          id: k,
          time: v,
        }
      end
    end

    def determine_applicable_routes(stop_pattern)
      stops = stop_pattern.split('-').map { |s| s[0..2] }
      trips.select {|t|
        stops.all? { |s|
          t.stops.map { |st| st[0..2] }.include?(s)
        }
      }.map(&:route_id).uniq.sort.map { |route| Display::RouteDisplay.new(routes_data[route]) }.reject {
        |rd| rd.route.nil?
      }.map{ |route|
        {
          id: route.internal_id,
          name: route.name,
          color: route.color && "##{route.color}",
          text_color: route.text_color && "##{route.text_color}",
        }
      }
    end

    def actual_runtimes
      line_direction.actual_runtimes.reject { |k, v| v.empty? }.map do |k, v|
        runtime_stops = k.split("-")
        first_stop = stops.find { |s| s.internal_id == runtime_stops[0]}
        last_stop = stops.find { |s| s.internal_id == runtime_stops[1]}
        first_stop_name = first_stop&.alternate_name || first_stop&.stop_name
        last_stop_name = last_stop&.alternate_name || last_stop&.stop_name
        {
          id: k,
          description: "#{first_stop_name} to #{last_stop_name}#{type && ' via '}#{type && name&.sub('via', '')}",
          time: v.inject { |sum, el| sum + el }.to_f / v.size,
          routes: determine_applicable_routes(k)
        }
      end
    end

    private

    attr_accessor :trips, :stop_times, :timestamp, :stops, :routes_data

    def actual_headways
      return @actual_headways if @actual_headways
      times = trips.map { |t|
        time = t.upcoming_line_directions[line_direction]

        # Facilitate M train shuffle (where M train stops for Broadway-Brooklyn line are reverse of J/Z trains)
        if !time && t.route_id == "M" && ["Broadway (Brooklyn)", "Williamsburg Bridge"].include?(line_direction.line.name)
          time = t.find_time(last_stop_reverse)
        end
        time
      }
      times << trips.first.timestamp if times.size == 1
      @actual_headways = times.compact.sort.each_cons(2).map { |a,b| (b - a) / 60 }
    end

    def scheduled_headways
      return @scheduled_headways if @scheduled_headways
      return @scheduled_headways = [] if stop_times[line_direction.last_stop].nil?

      # Facilitate M train shuffle
      if ["Broadway (Brooklyn)", "Williamsburg Bridge"].include?(line_direction.line.name)
        st = stop_times[line_direction.last_stop].select { |st| st.trip.route_internal_id != "M"}
        st.concat(stop_times[last_stop_reverse].select { |st| st.trip.route_internal_id == "M"})
      else
        st = stop_times[line_direction.last_stop]
      end

      if line_direction.kind_of?(ExpressLineDirection)
        st.reject! { |st|
          stop_times[line_direction.local_line_direction.last_stop].any? { |local_st|
            st.trip_internal_id == local_st.trip_internal_id
          } ||
          stop_times[line_direction.penultimate_stop].none? { |penultimate_st|
            st.trip_internal_id == penultimate_st.trip_internal_id
          }
        }
      end
      times = st.map(&:departure_time)
      @scheduled_headways = treat_times(times).sort.each_cons(2).map { |a,b| (b - a) / 60 }
    end

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
  end
end