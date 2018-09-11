require 'nyct-subway.pb'
require 'net/http'
require 'uri'

BASE_URI = "http://datamine.mta.info/mta_esi.php"

FEED_IDS = [1, 26, 16, 21, 2, 11, 31, 36, 51]

class ScheduleProcessor
  attr_accessor :routes, :lines

  def initialize
    instantiate_data

    if Rails.env.production?
      feeds = Parallel.map(FEED_IDS, in_threads: 1) do |id|
        begin
          retries ||= 0
          puts "Spawning thread for #{id}"
          feed = retrieve_feed(id)
          puts "Analyzing feed #{id}"
          Rails.cache.write("feed-data-#{id}-#{Time.current.min}", feed, expires_in: 10.minutes)
          analyze_feed(feed)
          puts "Done analyzing feed #{id}"
        rescue StandardError => e
          puts "Error: #{e} from feed #{id}"
          retry if (retries += 1) < 3
        end
      end
    else
      FEED_IDS.each do |id|
        begin
          retries ||= 0
          feed = Rails.cache.fetch("feed-#{id}", expires_in: 5.minutes) do
            retrieve_feed(id)
          end
          analyze_feed(feed)
        rescue StandardError => e
          puts "Error: #{e} from feed #{id}"
          retry if (retries += 1) < 3
        end
      end
    end
  end

  def lines_by_borough(borough)
    lines.values.select { |line|
      line.boroughs.include?(borough)
    }.sort_by do |line| # Sorting strings with numbers is annoying :(
      if line.name =~ /^\d+/
        [1, $&.to_i, line.name]
      else
        [2, line.name, line.name]
      end
    end
  end

  def retrieve_feed(feed_id)
    puts "Retrieving feed #{feed_id}"
    data = Net::HTTP.get(URI.parse("#{BASE_URI}?key=#{ENV["MTA_KEY"]}&feed_id=#{feed_id}"))
    Transit_realtime::FeedMessage.decode(data)
  end

  private

  attr_accessor :line_directions, :stop_times, :timestamp

  def analyze_feed(feed)
    raise "Error: Empty feed" if feed.entity.empty?
    for entity in feed.entity do
      if entity.field?(:trip_update) && entity.trip_update.trip.nyct_trip_descriptor
        next if entity.trip_update.stop_time_update.all? {|update| (update&.departure || update&.arrival).time < feed.header.timestamp }
        direction = entity.trip_update.trip.nyct_trip_descriptor.direction.to_i 
        route_id = route(entity.trip_update.trip.route_id)
        trip = Display::Trip.new(route_id, entity.trip_update, direction, feed.header.timestamp, line_directions[direction])
        routes[route_id]&.push_trip(trip)
        trip.add_to_lines(lines)
        puts "Error: #{route_id} not found" if routes[route_id].nil?
      end
    end
  end

  def instantiate_data
    @timestamp = Time.current
    @stop_times = StopTime.soon.includes(:trip).group_by(&:stop_internal_id)
    @line_directions = LineDirection.all.includes(:line).group_by(&:direction)
    instantiate_routes
    instantiate_lines
  end

  def instantiate_routes
    pairs = Route.all.map do |route|
      [route.internal_id, Display::Route.new(route, stop_times, timestamp)]
    end
    @routes = Hash[pairs]
  end

  def instantiate_lines
    pairs = Line.all.map do |line|
      [line.id, Display::Line.new(line, stop_times, timestamp)]
    end
    @lines = Hash[pairs]
  end

  def route(route_id)
    route_id = "SI" if route_id == "SS"
    route_id = "5" if route_id == "5X"
    route_id
  end
end