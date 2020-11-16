module Display
  class Route
    attr_accessor :route, :directions, :stops

    delegate :color, :text_color, :name, :alternate_name, :internal_id, :visible?, :scheduled?, to: :route

    def initialize(route, stop_times, timestamp, stops)
      @route = route
      @directions = {
        1 => Display::RouteDirection.new(route.internal_id, 1, stop_times, timestamp, stops),
        3 => Display::RouteDirection.new(route.internal_id, 3, stop_times, timestamp, stops),
      }
      @unavailable = false
      @stops = stops
    end

    def push_trip(trip)
      directions[trip.direction].push_trip(trip)
    end

    def status
      return @status if @status
      return @status = "No Data" if unavailable

      @status = ["Delay", "Service Change", "Not Good", "Good Service"].find do |s|
        directions.any? { |_, d| d.status == s }
      end

      @status = "No Service" if directions.all? { |_, d| d.status == "No Service" }

      return @status if @status

      @status = "Not Scheduled"
    end

    def service_change_summary(service_changes)
      return [] unless service_changes

      results = []

      service_changes.each do |k, v|
        results.concat(generate_service_change_notice(k, v))
      end

      results
    end

    def format_service_changes(service_changes)
      service_changes&.map { |k, v|
        [k, v.map { |r|
          {
           type: r.class.name,
           stations_affected: r.stations_affected,
           related_route: r.related_route,
          }
        }]
      }&.to_h
    end

    def secondary_status
      return status unless status == "Not Good"

      ["Slow", "Not Good"].find do |s|
        directions.any? { |_, d| d.secondary_status == s }
      end
    end

    def max_travel_time
      @max_travel_time ||= directions.map { |_, rd|
        rd.travel_time
      }.reject { |travel_time|
        travel_time.nil?
      }.max || 0
    end

    def max_headway_discrepancy
      @max_headway_discrepancy ||= directions.map { |_, rd|
        rd.headway_discrepancy
      }.reject { |headway_discrepancy|
        headway_discrepancy.nil?
      }.max
    end

    def max_travel_time_discrepancy
      @max_travel_time_discrepancy ||= directions.map { |_, rd|
        rd.max_travel_time_discrepancy
      }.reject { |max_travel_time_discrepancy|
        max_travel_time_discrepancy.nil?
      }.max
    end

    def set_unavailable!
      @unavailable = true
    end

    def any_lines_in_service?
      directions.any? { |_, rd| rd.any_lines_in_service? }
    end

    private

    attr_accessor :trips, :unavailable

    def delay
      directions.map { |_, rd|
        rd.delay
      }.max || 0
    end

    def scheduled_destinations
      directions.map { |_, v| v.scheduled_destinations }.flatten.sort.uniq
    end

    def destinations
      directions.map { |_, v| v.destinations }.flatten.sort.uniq
    end

    def any_lines_not_in_service?
      directions.any? { |_, rd| rd.lines_not_in_service.present? }
    end

    def generate_service_change_notice(direction, service_changes)
      return [] unless service_changes

      notices = []

      case direction
      when :both
        sentence_intro = "<#{internal_id}> trains are"
        origin = directions[3].origin_text
        destination = directions[3].destination_text
        begin_preposition = 'to/from'
        end_preposition = 'to/from'
      when :north
        sentence_intro = "#{directions[1].destination_text}-bound trains are"
        origin = directions[1].origin_text
        destination = directions[1].destination_text
        begin_preposition = 'from'
        end_preposition = 'to'
      when :south
        sentence_intro = "#{directions[3].destination_text}-bound trains are"
        origin = directions[3].origin_text
        destination = directions[3].destination_text
        begin_preposition = 'from'
        end_preposition = 'to'
      end

      if service_changes.any? { |c| c.is_a?(NoTrainServiceChange) }
        return ["#{sentence_intro} not running."]
      end


      if (begin_of_route = service_changes.find(&:begin_of_route?)) || (end_of_route = service_changes.find(&:end_of_route?))
        sentence = (service_changes.any?(&:affects_some_trains) ? 'Some ' : '') + sentence_intro + " running"
        if begin_of_route&.is_a?(ReroutingServiceChange) &&
          if begin_of_route.related_route
            sentence += " #{begin_preposition} #{stop_name(begin_of_route.first_station)} via <#{begin_of_route.related_route}>, and between #{stop_name(begin_of_route.first_station)} and"
          else
            sentence += " between #{stop_name(begin_of_route.first_station)} and"
          end
        else
          sentence += " between #{origin} and"
        end

        if end_of_route&.is_a?(ReroutingServiceChange) &&
          if end_of_route.related_route
            sentence += " #{stop_name(end_of_route.first_station)}, via <#{end_of_route.related_route}> #{end_preposition} #{stop_name(end_of_route.last_station)}."
          else
            sentence += " #{stop_name(end_of_route.last_station)}."
          end
        else
          sentence += " #{destination}."
        end

        notices << sentence
      end

      service_changes.select { |c| c.is_a?(ReroutingServiceChange) && !c.begin_of_route? && !c.end_of_route?}.each do |change|
        sentence = (change.affects_some_trains ? 'Some ' : '') + sentence_intro + " running"
        if change.related_route
          sentence += " via <#{change.related_route}> between #{stop_name(change.first_station)} and #{stop_name(change.last_station)}."
        else
          sentence += " via #{change.intermediate_stations.map { |s| stop_name(s) }.join(', ') } between #{stop_name(change.first_station)} and #{stop_name(change.last_station)}."
        end
        notices << sentence
      end

      local_to_express = service_changes.select { |c| c.is_a?(LocalToExpressServiceChange)}

      if local_to_express.present?
        skipped_stops = local_to_express.map { |c| c.intermediate_stations }.flatten.map { |s| stop_name(s) }
        if skipped_stops.length > 1
          skipped_stops_text = "#{skipped_stops[0...-1].join(', ')}, and #{skipped_stops.last}"
        else
          skipped_stops_text = skipped_stops.first
        end
        sentence = (local_to_express.any?(&:affects_some_trains) ? 'Some ' : '') + sentence_intro + " skipping #{skipped_stops_text}."
        notices << sentence
      end

      service_changes.select { |c| c.is_a?(ExpressToLocalServiceChange)}.each do |change|
        sentence = (change.affects_some_trains ? 'Some ' : '') + sentence_intro + " making local stops between #{stop_name(change.first_station)} and #{stop_name(change.last_station)}"
        notices << sentence
      end

      notices
    end

    def stop_name(stop_id)
      stops.find { |s| s.internal_id == stop_id}.stop_name
    end
  end
end