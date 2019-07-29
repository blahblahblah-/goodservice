module Display
  class Trip
    TIME_ESTIMATE_LIMIT = 60.minutes.to_i

    attr_accessor :line_directions, :upcoming_line_directions, :route_id, :timestamp, :direction, :trip_id

    def initialize(route_id, trip, direction, timestamp, all_line_directions, valid_stops, recent_trips, key_stops, trip_id)
      @route_id = route_id
      @trip = trip
      @trip_id = trip_id
      @direction = direction
      @timestamp = timestamp
      initialize_line_directions_time_hash(all_line_directions)

      @line_directions = line_directions_time_hash.keys
      @upcoming_line_directions = line_directions_time_hash.select { |_, time|
        timestamp + TIME_ESTIMATE_LIMIT > time
      }
      @valid_stops = valid_stops
      instantiate_actual_trip(recent_trips)
      log_trip
      check_runtimes(all_line_directions, key_stops)
    end

    def last_stop
      normalized_stops.reverse.find { |stop_id| valid_stops.include?(stop_id)}
    end

    def stops
      trip.stop_time_update.map(&:stop_id).reject{ |stop_id|
        !valid_stops.include?(stop_id)
      }.uniq
    end

    def lines
      line_directions.map(&:line)
    end

    def add_to_lines(lines)
      stops = upcoming_line_directions.keys.map do |ld|
        # M train shuffle, M train stations are mapped on the opposite direction on Broadway-Brooklyn
        if route_id == "M" && ["Broadway (Brooklyn)", "Williamsburg Bridge"].include?(lines[ld.line_id].name)
          actual_direction = (direction == 1) ? 3 : 1
          display_line_dir = lines[ld.line_id].directions[actual_direction].find { |dld| dld.line_direction.type == ld.type }
        else
          display_line_dir = lines[ld.line_id].directions[direction].find { |dld| dld.line_direction == ld }
        end
        display_line_dir.push_trip(self)
        [display_line_dir.line_direction.first_stop, display_line_dir.line_direction.last_stop]
      end
    end

    def find_time(stop_id)
      update = trip.stop_time_update.find { |u|
        u.stop_id == stop_id
      }
      return unless update
      (update.departure || update.arrival).time
    end

    def real_trip_id
      trip.trip.trip_id
    end

    def delay
      return actual_trip.latest_update_delay if next_stop == actual_trip.latest_update_next_stop
      return 0
    end

    private

    attr_accessor :trip, :valid_stops, :line_directions_time_hash, :actual_trip

    def arrival_time
      return @arrival_time if @arrival_time

      update = trip.stop_time_update.last
      @arrival_time = (update.arrival || update.departure).time
    end

    def next_stop
      trip.stop_time_update.first.stop_id
    end

    def next_stop_time
      update = trip.stop_time_update.first
      (update.departure || update.arrival).time
    end

    def log_trip
      return unless (next_stop_time - timestamp) <= 600

      diff = arrival_time - actual_trip.latest_estimated_arrival_time

      return unless diff.abs >= 60.0

      puts "Trip #{trip_id} updated, diff: #{diff}, new estimated arrival: #{arrival_time}"
      update = actual_trip.actual_trip_updates.find { |u| u.next_stop == next_stop } || actual_trip.actual_trip_updates.new(next_stop: next_stop, diff: 0)
      update.timestamp = timestamp
      update.diff += diff
      update.new_arrival_estimate = arrival_time
      update.save!

      if actual_trip.first_stop_departure_timestamp.nil? && next_stop != actual_trip.first_stop_id
        puts "Trip #{trip_id} departed from #{actual_trip.first_stop_id} at #{timestamp}"
        actual_trip.first_stop_departure_timestamp = timestamp
        actual_trip.save!
      end

      if update.diff > 300
        puts "Logging delay for trip #{trip_id}, #{update.diff / 60} minutes"
        actual_trip.log_delay!(update.diff)
      end
    end

    def instantiate_actual_trip(recent_trips)
      if @actual_trip = recent_trips.find { |rt| rt.trip_id == trip_id && rt.route_id == route_id }
        return
      end

      @actual_trip = ActualTrip.create!(
        date: Date.current,
        trip_id: trip_id,
        route_id: route_id,
        first_stop_id: next_stop,
        timestamp: timestamp,
        initial_arrival_estimate: arrival_time,
        first_stop_departure_estimate: next_stop_time
      )
    end

    def initialize_line_directions_time_hash(line_directions)
      time_hash = ActiveSupport::OrderedHash[
        trip.stop_time_update.select { |u|
          stop_id = convert_stop_id_for_m_shuffle(u.stop_id)
          (u.departure || u.arrival).time > timestamp && line_directions.map(&:last_stop).include?(stop_id)
        }.map { |u|
          stop_id = convert_stop_id_for_m_shuffle(u.stop_id)
          [line_directions.find { |ld|
            ld.last_stop == stop_id
          }, (u.departure || u.arrival).time]
        }
      ]
      short_turn_ld = line_directions.reject{ |ld|
        ld.kind_of?(ExpressLineDirection) || time_hash.keys.include?(ld)
      }.reject { |ld|
        ld.kind_of?(LocalLineDirection) && time_hash.keys.map(&:id).include?(ld.express_line_direction_id)
      }.find { |ld|
        normalized_stops.include?(ld.first_stop) && !normalized_stops.include?(ld.last_stop)
      }
      if short_turn_ld
        update = trip.stop_time_update.find { |u| convert_stop_id_for_m_shuffle(u.stop_id) == short_turn_ld.first_stop}
        time_hash[short_turn_ld] = (update.departure || update.arrival).time
      end

      time_hash.reject!{ |ld, _|
        ld.kind_of?(ExpressLineDirection) && (time_hash.keys.include?(ld.local_line_direction) ||  trip.stop_time_update.none? { |u| u.stop_id == ld.penultimate_stop})
      }

      @line_directions_time_hash = time_hash
    end

    def check_runtimes(all_line_directions, key_stops)
      return unless (next_stop_time - timestamp) <= 600

      active_trips = Rails.cache.read("active-trips")
      active_trips ||= {}
      active_trips[trip_id] = timestamp

      Rails.cache.write("active-trips", active_trips, expires_in: 1.hour)

      previous_stop_time_estimates = Rails.cache.read("trip-#{trip_id}")
      current_stop_time_estimates = trip.stop_time_update.reject { |stu|
        (stu.departure || stu.arrival).time < timestamp
      }
      current_past_stop_time_estimates = trip.stop_time_update - current_stop_time_estimates

      if previous_stop_time_estimates
        mark_arrivals(previous_stop_time_estimates, current_stop_time_estimates, key_stops)
      else
        mark_past_stops(current_past_stop_time_estimates, key_stops)
      end
      Rails.cache.write("trip-#{trip_id}", current_stop_time_estimates, expires_in: 1.hour)
    end

    def mark_arrivals(previous_estimates, current_estimates, key_stops)
      stops_made = previous_estimates.map(&:stop_id) - current_estimates.map(&:stop_id)
      # The 7 train feed has a weird glitch that sometimes show a past station in its feed still
      return unless stops_made &&
        (stops_made.include?(previous_estimates.first.stop_id) || (["7", "7X"].include?(route_id) && stops_made.include?(previous_estimates.second&.stop_id)))

      stops_made.each do |stop_id|
        mark_arrival(stop_id, key_stops, previous_estimates)
      end
    end

    def mark_past_stops(stop_time_estimates, key_stops)
      return if stop_time_estimates.empty?

      stop_time_estimates.each do |stu|
        mark_arrival(stu.stop_id, key_stops, nil)
      end
    end

    def mark_arrival(stop_id, key_stops, previous_estimates)
      old_stop_id = stop_id
      stop_id = convert_stop_id_for_m_shuffle(stop_id)
      return unless key_stops.include?(stop_id)
      stop_hash = Rails.cache.read("stoptime-#{stop_id}")
      stop_hash ||= {}
      cur_update = trip.stop_time_update.find { |stu| stu.stop_id == old_stop_id}
      stop_hash[trip_id] = (cur_update.departure || cur_update.arrival).time if cur_update
      prev_update = previous_estimates&.find { |stu| stu.stop_id == old_stop_id}
      stop_hash[trip_id] ||= (prev_update.departure || prev_update.arrival).time
      Rails.cache.write("stoptime-#{stop_id}", stop_hash, expires_in: 1.hour)
    end

    def convert_stop_id_for_m_shuffle(stop_id)
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

    def normalized_stops
      trip.stop_time_update.map(&:stop_id).map {|s| convert_stop_id_for_m_shuffle(s)}
    end
  end
end