module Display
  class Trip
    TIME_ESTIMATE_LIMIT = 60.minutes.to_i

    attr_accessor :line_directions, :upcoming_line_directions, :route_id, :timestamp, :direction

    def initialize(route_id, trip, direction, timestamp, all_line_directions, valid_stops, recent_trips)
      @route_id = route_id
      @trip = trip
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
    end

    def last_stop
      trip.stop_time_update.map(&:stop_id).last
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
        if route_id == "M" && lines[ld.line_id].name == "Broadway (Brooklyn)"
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

    def trip_id
      trip.trip.trip_id
    end

    def delay
      return actual_trip.latest_update_delay if next_stop == actual_trip.latest_update_next_stop
      return 0
    end

    private

    attr_accessor :trip, :all_line_directions, :valid_stops, :line_directions_time_hash, :actual_trip

    def arrival_time
      @arrival_time if @arrival_time

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
          (u.departure || u.arrival).time > timestamp &&
            line_directions.map(&:last_stop).include?(u.stop_id)
        }.map { |u|
          [line_directions.find { |ld|
            ld.last_stop == u.stop_id
          }, (u.departure || u.arrival).time]
        }
      ]
      short_turn_ld = line_directions.reject{ |ld|
        ld.kind_of?(ExpressLineDirection) || time_hash.keys.include?(ld)
      }.reject { |ld|
        ld.kind_of?(LocalLineDirection) && time_hash.keys.map(&:id).include?(ld.express_line_direction_id)
      }.find { |ld|
        trip.stop_time_update.map(&:stop_id).include?(ld.first_stop) && !trip.stop_time_update.map(&:stop_id).include?(ld.last_stop)
      }
      if short_turn_ld
        update = trip.stop_time_update.find { |u| u.stop_id == short_turn_ld.first_stop}
        time_hash[short_turn_ld] = (update.departure || update.arrival).time
      end

      time_hash.reject!{ |ld, _|
        ld.kind_of?(ExpressLineDirection) && (time_hash.keys.include?(ld.local_line_direction) ||  trip.stop_time_update.none? { |u| u.stop_id == ld.penultimate_stop})
      }

      @line_directions_time_hash = time_hash
    end
  end
end