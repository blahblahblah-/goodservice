class LocalLineDirection < LineDirection
  def name
    alternate_name || "#{line.name} Local"
  end

  def line_display_name
    name
  end

  def first_stops
    [express_line_direction.first_branch_stop, express_line_direction.first_alternate_branch_stop, express_line_direction.first_stop].compact
  end

  def last_stops
    [express_line_direction.last_branch_stop, express_line_direction.last_alternate_branch_stop, express_line_direction.last_stop].compact
  end

  def scheduled_runtimes
    return @scheduled_runtimes if @scheduled_runtimes
    if express_line_direction.first_branch_stop.present?
      first_stops = [express_line_direction.first_branch_stop, express_line_direction.first_alternate_branch_stop]
    else
      first_stops = [express_line_direction.first_stop]
    end

    if express_line_direction.last_branch_stop.present?
      last_stops = [express_line_direction.last_branch_stop, express_line_direction.last_alternate_branch_stop]
    else
      last_stops = [express_line_direction.last_stop]
    end

    first = recent_stop_times(first_stops)
    last = recent_stop_times(last_stops, time_range: 30.minutes)

    local_stop = recent_stop_times(last_stop)

    # M train shuffle
    if line.name == "Broadway (Brooklyn)" # line has no branches, so will need to take address that
      first.reject! { |st| st.trip.route_internal_id == 'M'}
      local_stop.reject! { |st| st.trip.route_internal_id == 'M'}
      last.reject! { |st| st.trip.route_internal_id == 'M'}
      new_direction = (first_stop[3] == 'S') ? 'N' : 'S'
      first.concat(StopTime.recent(time_range: 1.hour).joins(:trip).where(stop_internal_id: "#{express_line_direction.first_stop[0..2]}#{new_direction}", trips: {route_internal_id: 'M'}).to_a)
      local_stop.concat(StopTime.recent(time_range: 1.hour).joins(:trip).where(stop_internal_id: "#{last_stop[0..2]}#{new_direction}", trips: {route_internal_id: 'M'}).to_a)
      last.concat(StopTime.recent.joins(:trip).where(stop_internal_id: "#{express_line_direction.last_stop[0..2]}#{new_direction}", trips: {route_internal_id: 'M'}).to_a)
    end

    last.reject! { |last_st|
      local_stop.none? { |p_st| p_st.trip_internal_id == last_st.trip_internal_id } || first.none? { |first_st| first_st.trip_internal_id == last_st.trip_internal_id }
    }

    return @scheduled_runtimes = {} if last.empty?

    pairs = []

    last.each { |last_st|
      first_st = first.select { |first_st| first_st.trip_internal_id == last_st.trip_internal_id }

      first_st.each do |f|
        # Normalize the directions
        str = "#{f.stop_internal_id[0..2]}#{first_stop[3]}-#{last_st.stop_internal_id[0..2]}#{first_stop[3]}"
        pairs << [str, (last_st.departure_time - f.departure_time) / 60.0]
      end
    }

    @scheduled_runtimes = Hash[pairs.inject(Hash.new(0)) { |h, pair|
      h[pair.first] += pair.second
      h
    }.map do |k, v|
      count = pairs.count { |pair| pair.first == k}
      [k, v / count]
    end]
  end

  def actual_runtimes
    return @actual_runtimes if @actual_runtimes

    local_stop = Rails.cache.read("stoptime-#{last_stop}") || {}

    if express_line_direction.first_branch_stop.present?
      first_stops = [express_line_direction.first_branch_stop, express_line_direction.first_alternate_branch_stop]
    else
      first_stops = [express_line_direction.first_stop]
    end

    if express_line_direction.last_branch_stop.present?
      last_stops = [express_line_direction.last_branch_stop, express_line_direction.last_alternate_branch_stop]
    else
      last_stops = [express_line_direction.last_stop]
    end

    last = Hash[last_stops.map { |ls| [ls, Rails.cache.read("stoptime-#{ls}") || {}] }]
    first = Hash[first_stops.map { |fs| [fs, Rails.cache.read("stoptime-#{fs}") || {}] }]

    return @actual_runtimes = {} unless last.any?(&:present?) && first.any?(&:present?)

    local_stop.reject! { |_, v| v < Time.current.to_i - 2.hours}
    first.each { |_, fs| fs.reject! { |_, v| v < Time.current.to_i - 2.hours} }
    last.each { |_, ls| ls.reject! { |_, v| v < Time.current.to_i - 30.minutes} }

    last.each { |ls_stop_id, ls_trips|
      ls_trips.reject! { |trip_id, time|
        first.all? { |_, v| v[trip_id].nil? } || local_stop[trip_id].nil?
      }
    }

    results = Hash.new { |h, k| h[k] = [] }

    last.each do |last_stop_id, ls|
      ls.each do |ls_trip_id, ls_time|
        first.each do |first_stop_id, fs|
          fs.each do |fs_trip_id, fs_time|
            if ls_trip_id == fs_trip_id
              results["#{first_stop_id}-#{last_stop_id}"] << (ls_time - fs_time).to_f / 60.0
            end
          end
        end
      end
    end

    @runtimes_count = Hash[results.map do |trip_pattern, times|
      [trip_pattern, times.size]
    end]

    return @actual_runtimes = {} if results.empty?

    @actual_runtimes = results
  end
end