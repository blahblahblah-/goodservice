require 'nyct-subway.pb'
require 'net/http'
require 'uri'

class ScheduleProcessor
  include Singleton
  BASE_URI = "http://datamine.mta.info/mta_esi.php"
  FEED_IDS = [1, 26, 16, 21, 2, 11, 31, 36, 51]
  BOROUGHS = ["The Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"]
  ROUTE_FEED_MAPPING = {
    "1" => 1,
    "2" => 1,
    "3" => 1,
    "4" => 1,
    "5" => 1,
    "5X" => 1,
    "6" => 1,
    "6X" => 1,
    "GS" => 1,
    "A" => 26,
    "C" => 26,
    "E" => 26,
    "H" => 26,
    "FS" => 26,
    "N" => 16,
    "Q" => 16,
    "R" => 16,
    "W" => 16,
    "B" => 21,
    "D" => 21,
    "F" => 21,
    "M" => 21,
    "L" => 2,
    "SI" => 11,
    "G" => 31,
    "J" => 36,
    "Z" => 36,
    "7" => 51,
    "7X" => 51,
  }

  attr_accessor :routes, :lines

  def initialize
    refresh_data
  end

  def refresh_data
    instantiate_data

    if Rails.env.production?
      feeds = Parallel.map(FEED_IDS, in_threads: 4) do |id|
        begin
          retries ||= 0
          puts "Spawning thread for #{id}"
          feed = retrieve_feed(id)
          puts "Analyzing feed #{id}"
          Rails.cache.write("feed-data-#{id}-#{Time.current.min}", feed, expires_in: 10.minutes)
          analyze_feed(feed, id)
          puts "Done analyzing feed #{id}"
        rescue StandardError => e
          puts "Error: #{e} from feed #{id}"
          if (retries += 1) < 3
            sleep(5)
            retry
          end
          unavailable_feeds << id
        end
      end
    else
      FEED_IDS.each do |id|
        begin
          retries ||= 0
          feed = Rails.cache.fetch("feed-#{id}", expires_in: 1.minute) do
            retrieve_feed(id)
          end
          analyze_feed(feed, id)
        rescue StandardError => e
          puts "Error: #{e} from feed #{id}"
          retry if (retries += 1) < 3
          unavailable_feeds << id
        end
      end
    end

    update_route_feed_statuses
  end

  def self.headway_info(force_refresh: false)
    return Rails.cache.read("headway-info") if !force_refresh && Rails.cache.read("headway-info")

    processor = self.instance
    routes_data = processor.routes.reject { |_, route|
      !route.visible? && !route.scheduled?
    }.sort_by { |_, v| "#{v.name} #{v.alternate_name}" }.map do |_, route|
      {
        id: route.internal_id,
        name: route.name,
        color: route.color && "##{route.color}",
        text_color: route.text_color && "##{route.text_color}",
        alternate_name: route.alternate_name,
        status: route.status,
        max_headway_discreprency: route.max_headway_discreprency,
        destinations: {
          north: route.directions[1].destinations,
          south: route.directions[3].destinations,
        },
        scheduled_destinations: {
          north: route.directions[1].scheduled_destinations,
          south: route.directions[3].scheduled_destinations,
        },
        north: route.directions[1].line_directions.reject { |ld|
            ld.max_actual_headway.nil?
          }.map { |ld|
          {
            name: ld.name,
            max_actual_headway: ld.max_actual_headway,
            max_scheduled_headway: ld.max_scheduled_headway,
            delay: ld.delay,
          }
        },
        south: route.directions[3].line_directions.reject { |ld|
            ld.max_actual_headway.nil?
          }.map { |ld|
          {
            name: ld.name,
            max_actual_headway: ld.max_actual_headway,
            max_scheduled_headway: ld.max_scheduled_headway,
            delay: ld.delay,
          }
        },
        lines_not_in_service: {
          north: route.directions[1].lines_not_in_service,
          south: route.directions[3].lines_not_in_service,
        }
      }
    end

    lines_data = Hash[BOROUGHS.map do |borough|
      [borough, processor.lines_by_borough(borough).map{ |line|
        {
          id: line.id.to_s,
          name: line.name,
          routes: line.routes.map { |route|
            {
              name: route.name,
              color: route.color && "##{route.color}",
              text_color: route.text_color && "##{route.text_color}",
            }
          },
          status: line.status,
          destinations: {
            north: line.destinations[1],
            south: line.destinations[3],
          },
          north: line.directions[1].reject { |ld|
            ld.max_actual_headway.nil?
          }.map { |ld|
            {
              type: ld.type,
              max_actual_headway: ld.max_actual_headway,
              max_scheduled_headway: ld.max_scheduled_headway,
              median_actual_headway: ld.median_actual_headway,
              median_scheduled_headway: ld.median_scheduled_headway,
              delay: ld.delay,
              routes: ld.routes.map { |route|
                {
                  name: route.name,
                  color: route.color && "##{route.color}",
                  text_color: route.text_color && "##{route.text_color}",
                }
              }
            }
          },
          south: line.directions[3].reject { |ld|
            ld.max_actual_headway.nil?
          }.map { |ld|
            {
              type: ld.type,
              max_actual_headway: ld.max_actual_headway,
              max_scheduled_headway: ld.max_scheduled_headway,
              delay: ld.delay,
              routes: ld.routes.map { |route|
                {
                  name: route.name,
                  color: route.color && "##{route.color}",
                  text_color: route.text_color && "##{route.text_color}",
                }
              }
            }
          },
        }
      }]
    end]

    data = {
      routes: routes_data,
      lines: lines_data,
      timestamp: Time.current.iso8601,
    }

    log_route_statuses(routes_data)

    Rails.cache.write("headway-info", data, expires_in: 1.day)

    data
  end

  def self.log_route_statuses(routes_data)
    routes_data.each do |route|
      unless ["No Data", "Not Scheduled"].include?(route[:status])
        RouteStatus.create(route_internal_id: route[:id], status: route[:status], max_headway_discreprency: route[:max_headway_discreprency] || 0)
      end
    end
  end

  def self.routes_info(force_refresh: false)
    return Rails.cache.read("routes-info") if !force_refresh && Rails.cache.read("routes-info")
    processor = self.instance

    results = Hash[processor.routes.reject { |_, route|
      !route.visible? && !route.scheduled?
    }.sort_by { |_, v| "#{v.name} #{v.alternate_name}" }.map do |_, route|
      [route.internal_id, {
          name: route.name,
          color: route.color && "##{route.color}",
          text_color: route.text_color && "##{route.text_color}",
          alternate_name: route.alternate_name,
          destinations: {
            north: route.directions[1].destination_stops,
            south: route.directions[3].destination_stops,
          },
          routings: {
            north: route.directions[1].routings,
            south: route.directions[3].routings,
          },
        }
      ]
    end]

    data = {
      routes: results,
      timestamp: Time.current.iso8601,
    }

    Rails.cache.write("routes-info", data, expires_in: 1.day)

    data
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

  private

  attr_accessor :line_directions, :stop_times, :timestamp, :stop_names, :stops, :recent_trips, :unavailable_feeds

  def retrieve_feed(feed_id)
    puts "Retrieving feed #{feed_id}"
    data = Net::HTTP.get(URI.parse("#{BASE_URI}?key=#{ENV["MTA_KEY"]}&feed_id=#{feed_id}"))
    Transit_realtime::FeedMessage.decode(data)
  end

  def analyze_feed(feed, id)
    raise "Error: Empty feed" if feed.entity.empty?
    puts "Feed id #{id}, timestamp: #{feed.header.timestamp}"
    for entity in feed.entity do
      if entity.field?(:trip_update) && entity.trip_update.trip.nyct_trip_descriptor
        next if entity.trip_update.stop_time_update.all? {|update| (update&.departure || update&.arrival).time < feed.header.timestamp }
        direction = entity.trip_update.trip.nyct_trip_descriptor.direction.to_i 
        route_id = route(entity.trip_update.trip.route_id)
        trip = Display::Trip.new(route_id, entity.trip_update, direction, feed.header.timestamp, line_directions[direction], stop_names, recent_trips)
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
    @stop_names = Stop.pluck(:internal_id).to_set
    @stops = Stop.all
    @unavailable_feeds = Set.new

    instantiate_routes
    instantiate_lines
    instantiate_recent_trips
  end

  def instantiate_routes
    pairs = Route.all.map do |route|
      [route.internal_id, Display::Route.new(route, stop_times, timestamp, stops)]
    end
    @routes = Hash[pairs]
  end

  def instantiate_lines
    pairs = Line.all.includes(:line_directions).map do |line|
      [line.id, Display::Line.new(line, stop_times, timestamp, stops)]
    end
    @lines = Hash[pairs]
  end

  def instantiate_recent_trips
    @recent_trips = ActualTrip.includes(:actual_trip_updates).where("created_at > ?", Time.current - 3.hours)
  end

  def route(route_id)
    route_id = "SI" if route_id == "SS"
    route_id = "5" if route_id == "5X"
    route_id
  end

  def update_route_feed_statuses
    routes.values.each do |route|
      if unavailable_feeds.include?(ROUTE_FEED_MAPPING[route.internal_id])
        route.set_unavailable!
      end
    end
  end
end