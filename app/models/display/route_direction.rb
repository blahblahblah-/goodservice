module Display
  class RouteDirection

    def initialize(route_id, stop_times, timestamp)
      @route_id = route_id
      @trips = []
      @stop_times = stop_times
      @timestamp = timestamp
    end

    def push_trip(trip)
      trips << trip
    end

    def destinations
      destination_stops.map { |id|
        Stop.find_by(internal_id: id).stop_name
      }
    end

    def destination_stops
      routings.map(&:last).uniq
    end

    def routings
      trips.map(&:stops).sort_by(&:size).reverse.inject([]) do |memo, stops_array|
        unless memo.any? { |array| (stops_array - array).empty? }
          memo << stops_array
        end
        memo
      end
    end

    def line_directions
      return [] if trips.empty?
      @line_directions ||= line_directions_data.map do |ld|
        Display::RouteLineDirection.new(route_id, ld, trips, stop_times, timestamp)
      end
    end

    def headway_discreprency
      return nil if trips.empty?
      line_directions.map(&:headway_discreprency).reject { |headway_discreprency|
        headway_discreprency.nil?
      }.max
    end

    private

    attr_accessor :trips, :stop_times, :route_id, :timestamp

    def line_directions_data
      @line_directions_data ||= trips.map { |t|
        t.line_directions
      }.sort_by { |ld|
        ld.size
      }.reverse.reduce { |memo, obj|
        memo.concat(obj)
        }&.uniq
    end
  end
end