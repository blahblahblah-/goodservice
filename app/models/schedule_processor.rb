require 'nyct-subway.pb'
require 'net/http'
require 'uri'

BASE_URI = "http://datamine.mta.info/mta_esi.php"

FEED_IDS = [1, 26, 16, 21, 2, 11, 31, 36, 51]

class ScheduleProcessor
  def initialize
    instantiate_data
    feeds = Parallel.map(FEED_IDS, in_threads: 4) do |id|
      puts "Spawning thread for #{id}"
      feed = retrieve_feed(id)
      puts "Done with thread for #{id}"
      feed
    end

    if Rails.env.production?
      puts "Analyze feeds"
      Parallel.each_with_index(feeds, in_threads: 4) do |feed, index|
        puts "Analyzing feed #{FEED_IDS[index]}"
        analyze_feed(feed, key_stations.values.map(&:stop_internal_id))
      end
    else
      feeds.each do |feed|
        analyze_feed(feed, key_stations.values.map(&:stop_internal_id))
      end
    end
  end

  def routes
    return @routes if @routes
    pairs = Route.all.map do |route|
      [route.internal_id, Display::Route.new(route)]
    end
    @routes = Hash[pairs]
  end

  def lines
    return @lines if @lines
    pairs = Line.all.map do |line|
      [line.id, Display::Line.new(line)]
    end
    @lines = Hash[pairs]
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
    begin
      retries ||= 0
      data = Net::HTTP.get(URI.parse("#{BASE_URI}?key=#{ENV["MTA_KEY"]}&feed_id=#{feed_id}"))
      feed = Transit_realtime::FeedMessage.decode(data)
    rescue StandardError => e
      puts "Error: #{e} from feed #{feed_id}"
      retry if (retries += 1) < 3
    end
  end

  private

  attr_accessor :key_stations, :stop_times

  def analyze_feed(feed, stop_ids)
    for entity in feed.entity do
      if entity.field?(:trip_update) && entity.trip_update.trip.nyct_trip_descriptor
        entity.trip_update.stop_time_update.each do |update|
          if (key_station = key_stations[update.stop_id])
            if update&.departure && (time = Time.at(update.departure.time)) > Time.current && time < Time.current + 25.minutes
              direction = update.stop_id.ends_with?("N") ? 1 : 3
              next if entity.trip_update.trip.nyct_trip_descriptor.direction != direction
              stop_headway = stop_headways[update.stop_id]
              stop_headway.add_actual_trip_time(route(entity.trip_update.trip.route_id), time)
              routes[route(entity.trip_update.trip.route_id)] &.add_stop_headway(stop_headway)
              puts "Error: #{entity.trip_update.trip.route_id} not found" if routes[entity.trip_update.trip.route_id].nil?
              lines[key_station.line_direction.line_id].add_stop_headway(stop_headway)
            end
          end
        end
      end
    end
  end

  def instantiate_data
    @key_stations = KeyStation.all.includes(:stop, line_direction: {}).index_by(&:stop_internal_id)
    @stop_times = StopTime.soon.includes(:trip).group_by(&:stop_internal_id)
  end

  def route(route_id)
    route_id = "SI" if route_id == "SS"
    route_id
  end

  def stop_headways
    @stop_headways ||= Hash.new { |h, k| h[k] = Display::StopHeadway.new(k, stop_times[k]) }
  end
end