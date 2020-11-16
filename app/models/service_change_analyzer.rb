class ServiceChangeAnalyzer
  NORTH = {
    route_direction: 1,
    scheduled_direction: 0,
  }

  SOUTH = {
    route_direction: 3,
    scheduled_direction: 1,
  }

  def self.routing_diff(actual_routings, scheduled_routings)
    if !actual_routings || actual_routings.empty?
      return {
        adds: [],
        subs: scheduled_routings || [],
      }
    end

    adds = actual_routings.select { |r1| scheduled_routings.none? { |r2| r1 == r2 }}.map { |r1| scheduled_routings.map{ |r2| r1 - r2 }.min_by {|diff| diff.size }}.uniq
    subs = scheduled_routings.select { |r1| actual_routings.none? { |r2| r1 == r2 }}.map { |r1| actual_routings.map{ |r2| r1 - r2 }.min_by {|diff| diff.size }}.uniq

    {
      adds: adds,
      subs: subs,
    }
  end

  def self.service_change_summary(route_id, actual_route_directions, scheduled_routings, recent_routings, evergreen_routings, transfers)
    direction_changes = [NORTH, SOUTH].map do |direction|
      changes = []
      actual = actual_route_directions[direction[:route_direction]].routings
      scheduled = scheduled_routings[direction[:scheduled_direction]]
      
      if !actual || actual.empty?
        if !scheduled || scheduled.empty?
          return
        else
          changes << [NoTrainServiceChange.new(direction[:route_direction], [])]
        end
      else
        actual.each do |a|
          routing_changes = []
          ongoing_service_change = nil
          actual_routing = a.map { |s| s[0..2] }
          scheduled_routing = scheduled.map { |sr| sr.map { |s| s[0..2] }}.min_by { |sr| (actual_routing - sr).size }

          if !scheduled_routing
            changes << [ReroutingServiceChange.new(direction[:route_direction], actual_routing)]
            return
          end

          scheduled_index = 0
          previous_actual_station = nil
          previous_scheduled_station = nil
          remaining_stations = nil

          actual_routing.each_with_index do |actual_station, actual_index|
            scheduled_station = scheduled_routing[scheduled_index]

            if scheduled_station.nil?
              remaining_stations = actual_routing[actual_index...actual_station.length]
              break
            end

            if ongoing_service_change.nil?
              if actual_station != scheduled_station &&
                (transfers[actual_station].nil? || transfers[actual_station].none? { |t| t.from_stop_internal_id == scheduled_station })
                if scheduled_index_to_current_station = scheduled_routing.index(actual_station)
                  if previous_actual_station.nil? && previous_scheduled_station.nil?
                    array_of_skipped_stations = [nil].concat(scheduled_routing[0..scheduled_index_to_current_station])
                    routing_changes << TruncatedServiceChange.new(direction[:route_direction], array_of_skipped_stations)
                    scheduled_index = scheduled_index_to_current_station + 1
                    previous_scheduled_station = array_of_skipped_stations.last
                  else
                    array_of_skipped_stations = scheduled_routing[(scheduled_index - 1)..scheduled_index_to_current_station]
                    routing_changes << LocalToExpressServiceChange.new(direction[:route_direction], array_of_skipped_stations)
                    scheduled_index = scheduled_index_to_current_station + 1
                    previous_scheduled_station = actual_station
                  end
                else
                  if actual_routing.include?(scheduled_station) && previous_actual_station
                    if routing_changes.last&.class == ExpressToLocalServiceChange && actual_routing[actual_index - 2, 2].include?(routing_changes.last.last_station)
                      ongoing_service_change = routing_changes.pop
                      ongoing_service_change.stations_affected << actual_station if ongoing_service_change.last_station != actual_station
                    else
                      ongoing_service_change = ExpressToLocalServiceChange.new(direction[:route_direction], [previous_actual_station, actual_station])  
                    end
                  else
                    ongoing_service_change = ReroutingServiceChange.new(direction[:route_direction], [previous_actual_station, actual_station])
                  end
                end
              else
                scheduled_index += 1
                previous_scheduled_station = scheduled_station
              end
            else
              if ongoing_service_change.is_a?(ExpressToLocalServiceChange)
                ongoing_service_change.stations_affected << actual_station

                if actual_station == scheduled_station || transfers[actual_station]&.any? { |t| t.from_stop_internal_id == scheduled_station }
                  routing_changes << ongoing_service_change
                  ongoing_service_change = nil
                  scheduled_index += 1
                  previous_scheduled_station = scheduled_station
                end
              else  # ongoing_service_change.is_a?(ReroutingServiceChange)
                ongoing_service_change.stations_affected << actual_station
                if skip_to_scheduled_index = (scheduled_routing.index(actual_station) ||
                  (transfers[actual_station] && transfers[actual_station]&.map { |t| scheduled_routing.index(t.from_stop_internal_id) }.compact.first))
                  routing_changes << ongoing_service_change
                  ongoing_service_change = nil
                  scheduled_index = skip_to_scheduled_index + 1
                  previous_scheduled_station = scheduled_station
                end
              end
            end

            previous_actual_station = actual_station
          end

          if ongoing_service_change
            ongoing_service_change.stations_affected << nil
            routing_changes << ongoing_service_change        
          elsif remaining_stations.present?
            routing_changes << ReroutingServiceChange.new(direction[:route_direction], remaining_stations)
          elsif scheduled_routing[scheduled_index + 1]
            routing_changes << TruncatedServiceChange.new(direction[:route_direction], scheduled_routing[scheduled_index - 1..scheduled_routing.length].concat([nil]))
          end
          changes << routing_changes
        end
      end

      changes
    end

    both = []

    direction_changes.each do |d|
      d.each do |r|
        r.each do |c|
          if c.is_a?(ReroutingServiceChange)
            match_route(route_id, c, recent_routings, evergreen_routings)
          end
        end
      end
    end

    condensed_changes = direction_changes.map do |d|
      changes = d.flatten.uniq

      changes.each do |c|
        c.affects_some_trains = d.each_index.select { |i| !d[i].include?(c) && actual_route_directions[c.direction].routings[i].map { |s| s[0..2] }.include?(c.first_station) }.present?
      end

      changes.sort_by { |c| c.affects_some_trains ? 1 : 0 }
    end

    condensed_changes[1].select! do |c1|
      if other_direction = condensed_changes[0].find { |c2| c1.class == c2.class && c1.first_station == c2.last_station && c1.last_station == c2.first_station }
        condensed_changes[0].delete(other_direction)
        both << c1
        false
      else
        true
      end
    end

    {
      both: both,
      south: condensed_changes[1],
      north: condensed_changes[0],
    }
  end

  private

  def self.match_route(current_route_id, reroute_service_change, recent_routings, evergreen_routings)
    stations = reroute_service_change.stations_affected.compact
    route_pair = nil
    [recent_routings, evergreen_routings].each do |routing_set|
      route_pair = routing_set.find do |route_id, direction|
        route_id != current_route_id && direction.any? do |_, routings|
          routings.any? {|r| normalize_routing(r).each_cons(stations.length).any?(&stations.method(:==))}
        end
      end
      break if route_pair
    end

    reroute_service_change.related_route = route_pair[0] if route_pair
  end

  def self.normalize_routing(routing)
    routing.map { |r| r[0..2] }
  end
end