class ServiceChangeAnalyzer
  NORTH = {
    route_direction: 1,
    scheduled_direction: 0,
    suffix: 'N'
  }

  SOUTH = {
    route_direction: 3,
    scheduled_direction: 1,
    suffix: 'S'
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
          changes << [NotScheduledServiceChange.new(direction[:route_direction], [], nil, nil)]
        else
          changes << [NoTrainServiceChange.new(direction[:route_direction], [], nil, nil)]
        end
      else
        actual.each do |a|
          routing_changes = []
          ongoing_service_change = nil
          if a.any? { |s| s[-1] != direction[:suffix] }
            next
          end
          actual_routing = a.map { |s| s[0..2] }
          scheduled_routing = scheduled.map { |sr| sr.map { |s| s[0..2] }}.min_by { |sr| (actual_routing - sr).size + (sr - actual_routing).size }

          if !scheduled_routing
            changes << [ReroutingServiceChange.new(direction[:route_direction], actual_routing, actual_routing.first, actual_routing.last)]
            next
          end

          scheduled_index = 0
          previous_actual_station = nil
          previous_scheduled_station = nil
          remaining_stations = nil

          actual_routing.each_with_index do |actual_station, actual_index|
            scheduled_station = scheduled_routing[scheduled_index]

            if scheduled_station.nil?
              remaining_stations = actual_routing[actual_index - 1...actual_routing.length]
              break
            end

            if ongoing_service_change.nil?
              if actual_station != scheduled_station &&
                (transfers[actual_station].nil? || transfers[actual_station].none? { |t| t.from_stop_internal_id == scheduled_station })
                if (scheduled_index_to_current_station = scheduled_routing.index(actual_station)) || transfers[actual_station]&.any?{ |t| scheduled_index_to_current_station = scheduled_routing.index(t.from_stop_internal_id)}
                  if previous_actual_station.nil? && previous_scheduled_station.nil?
                    array_of_skipped_stations = [nil].concat(scheduled_routing[0..scheduled_index_to_current_station])
                    routing_changes << TruncatedServiceChange.new(direction[:route_direction], array_of_skipped_stations, actual_routing.first, actual_routing.last)
                    scheduled_index = scheduled_index_to_current_station + 1
                    previous_scheduled_station = array_of_skipped_stations.last
                  else
                    array_of_skipped_stations = scheduled_routing[(scheduled_index - 1)..scheduled_index_to_current_station]
                    routing_changes << LocalToExpressServiceChange.new(direction[:route_direction], array_of_skipped_stations, actual_routing.first, actual_routing.last)
                    scheduled_index = scheduled_index_to_current_station + 1
                    previous_scheduled_station = actual_station
                  end
                else
                  if actual_routing.include?(scheduled_station) && previous_actual_station
                    if routing_changes.last&.class == ExpressToLocalServiceChange && actual_routing[actual_index - 2, 2].include?(routing_changes.last.last_station)
                      ongoing_service_change = routing_changes.pop
                      ongoing_service_change.stations_affected << actual_station if ongoing_service_change.last_station != actual_station
                    else
                      ongoing_service_change = ExpressToLocalServiceChange.new(direction[:route_direction], [previous_actual_station, actual_station], actual_routing.first, actual_routing.last)  
                    end
                  else
                    ongoing_service_change = ReroutingServiceChange.new(direction[:route_direction], [previous_actual_station, actual_station], actual_routing.first, actual_routing.last)
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
            routing_changes << ReroutingServiceChange.new(direction[:route_direction], remaining_stations.concat([nil]), actual_routing.first, actual_routing.last)
          elsif scheduled_routing[scheduled_index] && scheduled_routing.size > scheduled_index + 1
            routing_changes << TruncatedServiceChange.new(direction[:route_direction], scheduled_routing[scheduled_index - 1..scheduled_routing.length].concat([nil]), actual_routing.first, actual_routing.last)
          end
          changes << routing_changes
        end
      end
      changes.map { |r| r.select { |c| !c.is_a?(TruncatedServiceChange) || !truncate_service_change_overlaps_with_different_routing?(c, actual)}}
    end

    both = []

    direction_changes.each do |d|
      d.each do |r|
        r.each do |c|
          if c.is_a?(ReroutingServiceChange)
            match_route(route_id, c, recent_routings, evergreen_routings, transfers)
          end
        end
      end
    end

    condensed_changes = direction_changes.map do |d|
      changes = d.flatten.uniq

      changes.each do |c|
        c.affects_some_trains = d.each_index.select { |i|
          !d[i].include?(c) && c.applicable_to_routing?(actual_route_directions[c.direction].routings[i].map { |s2| s2[0..2] }.unshift(nil).push(nil))
        }.present?
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

  def self.match_route(current_route_id, reroute_service_change, recent_routings, evergreen_routings, transfers)
    stations = reroute_service_change.stations_affected.compact
    station_combinations = [stations]
    if tr = transfers[stations.first]
      tr.each do |t|
        station_combinations << [t.from_stop_internal_id].concat(stations[1...stations.length])
      end
    end
    if tr = transfers[stations.last]
      tr.each do |t|
        station_combinations << stations[0...stations.length - 1].concat([t.from_stop_internal_id])
      end
    end

    route_pair = nil
    current_route_routings = { current_route_id => recent_routings[current_route_id] }
    current_evergreen_routings = { current_route_id => evergreen_routings[current_route_id] }
    [current_route_routings, current_evergreen_routings, recent_routings, evergreen_routings].each do |routing_set|
      route_pair = routing_set.find do |route_id, direction|
        direction.any? do |_, routings|
          station_combinations.any? do |sc|
            routings.any? {|r| normalize_routing(r).each_cons(sc.length).any?(&sc.method(:==))}
          end
        end
      end
      break if route_pair
    end

    if route_pair
      if route_pair[0] != current_route_id[0]
        reroute_service_change.related_routes = [route_pair[0]]
      end
      return
    end

    route_pairs = []

    [recent_routings, evergreen_routings].each do |routing_set|
      (0..1).each do |j|
        ((1 + j)...stations.size - 1).each_with_index do |i|
          first_station_sequence = stations[0..(i - j)]
          second_station_sequence = stations[i..stations.size]

          route_pairs = [first_station_sequence, second_station_sequence].map do |station_sequence|
            route_pair = routing_set.find do |route_id, direction|
              route_id[0] != current_route_id[0] && direction.any? do |_, routings|
                routings.any? {|r| normalize_routing(r).each_cons(station_sequence.length).any?(&station_sequence.method(:==))}
              end
            end
            route_pair
          end
          break if route_pairs.compact.size == 2
        end
        break if route_pairs.compact.size == 2
      end
      break if route_pairs.compact.size == 2
    end
    reroute_service_change.related_routes = route_pairs.map {|r| r[0] } if route_pairs.compact.size == 2
  end

  def self.normalize_routing(routing)
    routing.map { |r| r[0..2] }
  end

  def self.truncate_service_change_overlaps_with_different_routing?(service_change, routings)
    if service_change.begin_of_route?
      routings.any? do |r|
        i = normalize_routing(r).index(service_change.last_station)
        i && i > 0
      end
    else
      routings.any? do |r|
        i = normalize_routing(r).index(service_change.first_station)
        i && i < r.size - 1
      end
    end
  end
end