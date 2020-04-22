module Display
  class RouteLineDirection
    require 'descriptive_statistics'

    delegate :name, :boroughs, :travel_time, :travel_time_discrepancy, :parent_name, :first_stops, :last_stops, :line, to: :line_direction

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

    def delayed?
      delay >= 5
    end

    def rerouted?
      trips.present? && max_scheduled_headway.nil?
    end

    def normal_routing?
      trips.present? && max_scheduled_headway.present?
    end

    def no_service?
      trips.empty?
    end

    def slow?
      return false unless travel_time
      travel_time >= 0.25 && travel_time_discrepancy >= 2
    end

    def headway_gap?
      headway_discrepancy && headway_discrepancy > 2
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

    def scheduled_runtimes
      line_direction.scheduled_runtimes.map do |k, v|
        {
          id: k,
          time: v,
        }
      end
    end

    def actual_runtimes
      @actual_runtimes ||= line_direction.actual_runtimes.reject { |k, v| v.empty? || !is_route_applicable?(k) }.map do |k, v|
        runtime_stops = k.split("-")
        first_stop = stops.find { |s| s.internal_id == runtime_stops[0]}
        last_stop = stops.find { |s| s.internal_id == runtime_stops[1]}
        first_stop_name = first_stop&.alternate_name || first_stop&.stop_name
        last_stop_name = last_stop&.alternate_name || last_stop&.stop_name
        {
          id: k,
          description: "#{first_stop_name} to #{last_stop_name} via #{line_direction.line_display_name}",
          time: v.inject { |sum, el| sum + el }.to_f / v.size,
        }
      end
    end

    def actual_first_stop_name
      a = actual_runtimes.max_by { |r| r[:time] }
      first_stop_id = a ? a[:id].split("-").first : line_direction.first_stop
      stops.find { |s| s.internal_id == first_stop_id}.stop_name
    end

    def actual_last_stop_name
      a = actual_runtimes.max_by { |r| r[:time] }
      last_stop_id = a ? a[:id].split("-").last : line_direction.last_stop
      stops.find { |s| s.internal_id == last_stop_id}.stop_name
    end

    private

    attr_accessor :trips, :stop_times, :line_direction, :route_id, :timestamp, :stops

    def actual_headways
      return @actual_headways if @actual_headways
      times = trips.map { |t|
        t.upcoming_line_directions[line_direction]
      }
      times << trips.first.timestamp if times.size == 1
      @actual_headways = times.sort.each_cons(2).map { |a,b| (b - a) / 60 }
    end

    def scheduled_headways
      return @scheduled_headways if @scheduled_headways
      return @scheduled_headways = [] if stop_times[flip_stop_id_for_m_shuffle(line_direction.last_stop)].nil?
      st = stop_times[flip_stop_id_for_m_shuffle(line_direction.last_stop)].select { |st| st.trip.route_internal_id == route_id}
      if line_direction.kind_of?(ExpressLineDirection)
        st.reject! { |st|
          stop_times[flip_stop_id_for_m_shuffle(line_direction.local_line_direction.last_stop)].any? { |local_st|
            st.trip_internal_id == local_st.trip_internal_id
          } || stop_times[flip_stop_id_for_m_shuffle(line_direction.penultimate_stop)].none? { |pen_st|
            st.trip_internal_id == pen_st.trip_internal_id
          }
        }
      end
      times = st.map(&:departure_time)
      times << (Time.current - Time.current.beginning_of_day).to_i if times.size == 1
      @scheduled_headways = treat_times(times).sort.each_cons(2).map { |a,b| (b - a) / 60 }
    end

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

    def flip_stop_id_for_m_shuffle(stop_id)
      if route_id == "M" && ["M11", "M12", "M13", "M14", "M15", "M16", "M18"].include?(stop_id[0..2])
        if stop_id[3] == 'S'
          stop_id[0..2] + 'N'
        else
          stop_id[0..2] + 'S'
        end
      else
        stop_id
      end
    end
  end
end