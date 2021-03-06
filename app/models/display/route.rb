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

    def status(*args)
      service_changes = args.size > 0 ? args.first : nil
      return @status if @status
      return @status = "No Data" if unavailable
      return "No Service" if service_changes && service_changes[:both]&.find { |c| c.is_a?(NoTrainServiceChange).present? }.present?
      return "No Service" if service_changes && [NoTrainServiceChange, NotScheduledServiceChange].all? { |klass| service_changes.find { |_, v| v.find {|c| c.is_a?(klass) } }.present? }

      return @status = 'Delay' if directions.any? { |_, d| d.status == 'Delay' }

      return "Service Change" if service_changes&.any? { |_, v| v&.select{ |c| !c.is_a?(NotScheduledServiceChange) }.present? }

      @status = ["Not Good", "Good Service"].find do |s|
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
           related_routes: r.related_routes,
          }
        }]
      }&.to_h
    end

    def secondary_status(service_changes)
      s = status(service_changes)
      return s unless s == "Not Good"

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

      service_changes.select! { |s| !s.is_a?(NotScheduledServiceChange)}

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

      begin_of_route = service_changes.find(&:begin_of_route?)
      end_of_route = service_changes.find(&:end_of_route?)

      if begin_of_route || end_of_route
        if direction != :both && begin_of_route.present? && end_of_route.nil?
          sentence = (service_changes.any?(&:affects_some_trains) ? 'Some ' : '') + "#{stop_name(begin_of_route.destination)}-bound trains are running"
        elsif direction != :both && end_of_route.present?
          sentence = (service_changes.any?(&:affects_some_trains) ? 'Some ' : '') + "#{stop_name(end_of_route.destination)}-bound trains are running"
        else
          sentence = (service_changes.any?(&:affects_some_trains) ? 'Some ' : '') + sentence_intro + " running"
        end
        if begin_of_route && end_of_route && begin_of_route != end_of_route && [begin_of_route, end_of_route].all? {|c| c.is_a?(TruncatedServiceChange)} && ([begin_of_route.stations_affected[1...-1] & end_of_route.stations_affected[1...-1]]).present?
          sentence += " in two sections: between #{stop_name(end_of_route.origin)} and #{stop_name(end_of_route.first_station)}, and #{stop_name(begin_of_route.last_station)} and #{stop_name(begin_of_route.destination)}"
        else
          if end_of_route.present? && direction != :both
            sentence = (service_changes.any?(&:affects_some_trains) ? 'Some ' : '') + " #{stop_name(end_of_route.destination)}-bound trains are running"
          end

          if begin_of_route&.is_a?(ReroutingServiceChange)
            if begin_of_route.related_routes.present? && !begin_of_route.related_routes.include?(internal_id)
              if begin_of_route == end_of_route
                if begin_of_route.first_station == begin_of_route.last_station
                  sentence += " via #{begin_of_route.related_routes.map { |r| "<#{r}>" }.join(' and ')} to"
                else
                  sentence += " via #{begin_of_route.related_routes.map { |r| "<#{r}>" }.join(' and ')} between #{stop_name(begin_of_route.first_station)} and"
                end
              else
                sentence += " #{begin_preposition} #{stop_name(begin_of_route.first_station)} via #{begin_of_route.related_routes.map { |r| "<#{r}>" }.join(' and ')}, and between #{stop_name(begin_of_route.last_station)} and"
              end
            else
              sentence += " between #{stop_name(begin_of_route.first_station)} and"
            end
          elsif begin_of_route&.is_a?(TruncatedServiceChange)
            sentence += " between #{stop_name(begin_of_route.last_station)} and"
          else
            sentence += " between #{stop_name(end_of_route.origin)} and"
          end

          if end_of_route&.is_a?(ReroutingServiceChange)
            if end_of_route.related_routes.present? && begin_of_route != end_of_route && !end_of_route.related_routes.include?(internal_id)
              sentence += " #{stop_name(end_of_route.first_station)}, via  #{end_of_route.related_routes.map { |r| "<#{r}>" }.join(' and ')} #{end_preposition} #{stop_name(end_of_route.last_station)}."
            else
              sentence += " #{stop_name(end_of_route.last_station)}."
            end
          elsif end_of_route&.is_a?(TruncatedServiceChange)
            sentence += " #{stop_name(end_of_route.first_station)}."
          else
            sentence += " #{stop_name(begin_of_route.destination)}."
          end
        end

        notices << sentence
      end

      split_route_changes = service_changes.select { |c| c.is_a?(SplitRoutingServiceChange)}

      if split_route_changes.present?
        notices << sentence_intro + " running in two sections: between #{stop_name(split_route_changes.first.first_station)} and #{stop_name(split_route_changes.first.last_station)}, and between #{stop_name(split_route_changes.second.first_station)} and #{stop_name(split_route_changes.second.last_station)}"
      end

      service_changes.select { |c| c.is_a?(ReroutingServiceChange) && !c.begin_of_route? && !c.end_of_route?}.each do |change|
        sentence = (change.affects_some_trains ? 'Some ' : '') + sentence_intro + " running"
        if change.related_routes.present?
          if change.related_routes.include?(internal_id)
            sentence += " between #{stop_name(change.first_station)} and #{stop_name(change.last_station)}."
          else
            sentence += " via #{change.related_routes.map { |r| "<#{r}>" }.join(' and ')} between #{stop_name(change.first_station)} and #{stop_name(change.last_station)}."
          end
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