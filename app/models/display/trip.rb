module Display
  class Trip
    TIME_ESTIMATE_LIMIT = 30.minutes.to_i

    attr_accessor :line_directions, :upcoming_line_directions, :route_id, :timestamp, :direction

    def initialize(route_id, trip, direction, timestamp, all_line_directions)
      @route_id = route_id
      @trip = trip
      @direction = direction
      @timestamp = timestamp
      @all_line_directions = all_line_directions
      @line_directions = line_directions_time_hash.keys
      @upcoming_line_directions = line_directions_time_hash.select { |_, time|
        timestamp + TIME_ESTIMATE_LIMIT > time
      }
    end

    def last_stop
      trip.stop_time_update.last.stop_id
    end

    def lines
      line_directions.map(&:line)
    end

    def add_to_lines(lines)
      upcoming_line_directions.keys.each do |ld|
        # M train shuffle, M train stations are mapped on the opposite direction on Broadway-Brooklyn
        if route_id == "M" && lines[ld.line_id].name == "Broadway (Brooklyn)"
          actual_direction = (direction == 1) ? 3 : 1
          lines[ld.line_id].directions[actual_direction].find { |dld| dld.line_direction.type == ld.type }.push_trip(self)
        else
          lines[ld.line_id].directions[direction].find { |dld| dld.line_direction == ld }.push_trip(self)
        end
      end
    end

    private

    attr_accessor :trip, :all_line_directions

    def line_directions_time_hash
      return @line_directions_time_hash if @line_directions_time_hash

      time_hash = ActiveSupport::OrderedHash[
        trip.stop_time_update.select { |u|
          (u.departure || u.arrival).time > timestamp &&
            all_line_directions.map(&:last_stop).include?(u.stop_id)
        }.map { |u|
          [all_line_directions.find { |ld|
            ld.last_stop == u.stop_id
          }, (u.departure || u.arrival).time]
        }
      ]
      short_turn_ld = all_line_directions.reject{ |ld|
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