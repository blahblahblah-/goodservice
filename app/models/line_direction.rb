class LineDirection < ActiveRecord::Base
  belongs_to :line, foreign_key: "line_id"
  belongs_to :stop_time, foreign_key: "last_stop", primary_key: "stop_internal_id"
  has_one :local_line_direction, inverse_of: :express_line_direction, class_name: "LocalLineDirection", foreign_key: "express_line_direction_id"
  belongs_to :express_line_direction, class_name: "ExpressLineDirection", foreign_key: "express_line_direction_id", optional: true

  NORTH = 1
  SOUTH = 3

  DIRECTIONS = [
    NORTH, SOUTH
  ]

  def parent_name
    line.name
  end

  def name
    alternate_name || line.name
  end

  def boroughs
    line.boroughs
  end

  def travel_time
    return @travel_time if @travel_time

    results = []
    scheduled_runtimes.each do |trip_pattern, runtime|
      if actual_runtimes[trip_pattern] && runtime > 0
        actual_runtimes[trip_pattern].each do |actual_runtime|
          results << (actual_runtime - runtime).to_f / runtime
        end
      end
    end

    return nil if results.empty?
    @travel_time = results.inject { |sum, el| sum + el }.to_f / results.size
  end

  def runtimes_count
    return @runtimes_count if @runtimes_count
    actual_runtimes
    @runtimes_count
  end

  def self.scheduled_lines(route_internal_id, direction)
    stops = StopTime.soon_by_route(route_internal_id, direction).pluck(:stop_internal_id)
    self.where("type is null or type <> 'ExpressLineDirection'").where(last_stop: stops).or(self.where(type: 'ExpressLineDirection').where(penultimate_stop: stops).where(last_stop: stops))
      .includes(:line).uniq.map(&:line).uniq.select(&:is_visible).sort_by(&:name)
  end

  def first_stops
    [first_branch_stop, first_alternate_branch_stop, first_stop].compact
  end

  def last_stops
    [last_branch_stop, last_alternate_branch_stop, last_stop].compact
  end

  def scheduled_runtimes
    return @scheduled_runtimes if @scheduled_runtimes
    if first_branch_stop.present?
      first_stops = [first_branch_stop, first_alternate_branch_stop]
    else
      first_stops = [first_stop]
    end

    if last_branch_stop.present?
      last_stops = [last_branch_stop, last_alternate_branch_stop]
    else
      last_stops = [last_stop]
    end

    first = StopTime.recent(time_range: 1.hour).where(stop_internal_id: first_stops).to_a
    last = StopTime.recent.where(stop_internal_id: last_stops).to_a

    # M train shuffle
    if line.name == "Williamsburg Bridge"
      first.reject! { |st| st.trip.route_internal_id == 'M'}
      last.reject! { |st| st.trip.route_internal_id == 'M'}
      new_direction = (first_stop[3] == 'S') ? 'N' : 'S'
      modified_first_stops = first_stops.map do |stop_name|
        "#{stop_name[0..2]}#{new_direction}"
      end
      modified_last_stops = last_stops.map do |stop_name|
        "#{stop_name[0..2]}#{new_direction}"
      end
      first.concat(StopTime.recent(time_range: 1.hour).joins(:trip).where(stop_internal_id: modified_first_stops, trips: {route_internal_id: 'M'}).to_a)
      last.concat(StopTime.recent.joins(:trip).where(stop_internal_id: modified_last_stops, trips: {route_internal_id: 'M'}).to_a)
    end

    last.reject! { |last_st|
      first.none? { |first_st| first_st.trip_internal_id == last_st.trip_internal_id }
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

    if first_branch_stop.present?
      first_stops = [first_branch_stop, first_alternate_branch_stop]
    else
      first_stops = [first_stop]
    end

    if last_branch_stop.present?
      last_stops = [last_branch_stop, last_alternate_branch_stop]
    else
      last_stops = [last_stop]
    end

    # M train shuffle
    if line.name == "Williamsburg Bridge"
      new_direction = (first_stop[3] == 'S') ? 'N' : 'S'
      first_stops = first_stops.map do |stop_name|
        if stop_name[0..2] == 'D21'
          "#{stop_name[0..2]}#{new_direction}"
        else
          stop_name
        end
      end
      last_stops = last_stops.map do |stop_name|
        if stop_name[0..2] == 'D21'
          "#{stop_name[0..2]}#{new_direction}"
        else
          stop_name
        end
      end
    end

    last = Hash[last_stops.map { |ls| [ls, Rails.cache.read("stoptime-#{ls}") || {}] }]
    first = Hash[first_stops.map { |fs| [fs, Rails.cache.read("stoptime-#{fs}") || {}] }]

    return @actual_runtimes = {} unless last.any?(&:present?) && first.any?(&:present?)

    first.each { |_, fs| fs.reject! { |_, v| v < Time.current.to_i - 120.minutes} }
    last.each { |_, ls| ls.reject! { |_, v| v < Time.current.to_i - 30.minutes} }

    last.each { |ls_stop_id, ls_trips|
      ls_trips.reject! { |trip_id, time|
        first.all? { |_, v| v[trip_id].nil? }
      }
    }

    results = Hash.new { |h, k| h[k] = [] }

    last.each do |last_stop_id, ls|
      ls.each do |ls_trip_id, ls_time|
        first.each do |first_stop_id, fs|
          fs.each do |fs_trip_id, fs_time|
            if ls_trip_id == fs_trip_id
              # Normalize the directions
              str = "#{first_stop_id[0..2]}#{first_stop[3]}-#{last_stop_id[0..2]}#{first_stop[3]}"
              results[str] << (ls_time - fs_time).to_f / 60.0
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