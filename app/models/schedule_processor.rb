require 'nyct-subway.pb'
require 'net/http'
require 'uri'

class ScheduleProcessor
  include Singleton
  BASE_URI = "http://datamine.mta.info/mta_esi.php"
  FEED_IDS = [1, 26, 16, 21, 2, 11, 31, 36, 51]
  BOROUGHS = ["The Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"]
  STATUSES = ["Good Service", "Service Change", "Not Good", "Delay", "No Service"]
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

  def self.headway_info(force_refresh: false, tweet_delays: false)
    return Rails.cache.read("headway-info") if !force_refresh && Rails.cache.read("headway-info")

    processor = self.instance
    routes_data = processor.routes.sort_by { |_, v| "#{v.name} #{v.alternate_name}" }.map do |_, route|
      {
        id: route.internal_id,
        name: route.name,
        color: route.color && "##{route.color}",
        text_color: route.text_color && "##{route.text_color}",
        alternate_name: route.alternate_name,
        status: route.status,
        max_headway_discrepancy: route.max_headway_discrepancy,
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
        },
        scheduled: route.scheduled?,
        visible: route.visible?,
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

    if tweet_delays && twitter_client
      delayed_routes = processor.routes.sort_by { |_, r|
        "#{r.name} #{r.alternate_name}"
      }.select { |_, r| r.status == "Delay" }.map { |_, r|
        r.name == 'S' ? r.alternate_name : r.name
      }
      if delayed_routes.any?
        puts "Sending delay status to Twitter"
        tweet = "Delays detected: #{delayed_routes.join(', ')} trains"
        twitter_client.update(tweet)
        Rails.cache.write("delayed_routes", delayed_routes, expires_in: 30.minutes)
        puts "Tweeted #{tweet}"
      elsif !Rails.cache.read("delayed_routes").blank?
        puts "Sending delay status to Twitter"
        tweet = "Delays detected: none"
        twitter_client.update(tweet)
        Rails.cache.write("delayed_routes", [], expires_in: 30.minutes)
        puts "Tweeted #{tweet}"
      end
    end

    data
  end

  def self.log_route_statuses(routes_data)
    routes_data.each do |route|
      unless ["No Data", "Not Scheduled"].include?(route[:status])
        RouteStatus.create(route_internal_id: route[:id], status: route[:status], max_headway_discrepancy: route[:max_headway_discrepancy] || 0)
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

  def self.last_week_statuses(force_refresh_last_week_stats: false)
    unless force_refresh_last_week_stats || !Rails.cache.read("stats-last-week")
      return Rails.cache.read("stats-last-week")
    end
    statuses = RouteStatus.where("created_at >= ?", Time.current - 1.week - 1.day).group(:route_internal_id, "date(created_at at time zone 'UTC' at time zone 'America/New_York')", :status).size

    Rails.cache.write("stats-last-week", statuses, expires_in: 1.day)

    statuses
  end

  def self.stats_info(force_refresh: false, force_refresh_last_week_stats: false)
    return Rails.cache.read("stats-info") if !force_refresh && Rails.cache.read("stats-info")
    processor = self.instance

    last_hour_statuses = RouteStatus.where("created_at >= ?", Time.current - 1.hour).order(:created_at).group_by(&:route_internal_id)
    last_day_statuses = RouteStatus.where("created_at >= ?", Time.current - 1.day).group(:route_internal_id, :status).size

    last_week_statuses = last_week_statuses(force_refresh_last_week_stats: force_refresh_last_week_stats)

    last_day_avg_max_headway_discrepancy = RouteStatus.where("created_at >= ?", Time.current - 1.day).group(:route_internal_id).average(:max_headway_discrepancy)
    last_week_avg_max_headway_discrepancy = RouteStatus.where("created_at >= ?", Time.current - 1.week).group(:route_internal_id).average(:max_headway_discrepancy)

    last_day_delays = Delay.where("delays.created_at >= ?", Time.current - 1.day).joins(actual_trip_update: :actual_trip).group(:route_id).pluck(:route_id, "count(*)")
    last_week_delays = Delay.where("delays.created_at >= ?", Time.current - 1.week).joins(actual_trip_update: :actual_trip).group(:route_id).pluck(:route_id, "count(*)")
    last_day_avg_delay_mins = Delay.where("delays.created_at >= ?", Time.current - 1.day).joins(actual_trip_update: :actual_trip).group(:route_id).average(:delayed_minutes)
    last_week_avg_delay_mins = Delay.where("delays.created_at >= ?", Time.current - 1.week).joins(actual_trip_update: :actual_trip).group(:route_id).average(:delayed_minutes)
    last_day_max_delay_mins = Delay.where("delays.created_at >= ?", Time.current - 1.day).joins(actual_trip_update: :actual_trip).group(:route_id).maximum(:delayed_minutes)
    last_week_max_delay_mins = Delay.where("delays.created_at >= ?", Time.current - 1.week).joins(actual_trip_update: :actual_trip).group(:route_id).maximum(:delayed_minutes)


    results = Hash[processor.routes.sort_by { |_, v|
      "#{v.name} #{v.alternate_name}"
    }.map do |_, route|
      [route.internal_id, {
          name: route.name,
          color: route.color && "##{route.color}",
          text_color: route.text_color && "##{route.text_color}",
          alternate_name: route.alternate_name,
          status: route.status,
          statuses: {
            last_hour: last_hour_statuses[route.internal_id]&.pluck(:status)&.chunk { |n| n }&.map { |n, ary|
              {
                status: n,
                count: ary.size
              }
            } || [],
            last_day: Hash[STATUSES.map { |s| [s.gsub(/( )/, '_').underscore, last_day_statuses[[route.internal_id, s]] || 0]}],
            last_week: (Date.current - 7.days..Date.current - 1.day).map { |date|
              Hash[STATUSES.map { |s| [s.gsub(/( )/, '_').underscore, last_week_statuses[[route.internal_id, date, s]] || 0]}]
            }
          },
          max_headway_discrepancy: {
            last_day_avg: last_day_avg_max_headway_discrepancy[route.internal_id]&.to_f&.round(1) || 0,
            last_week_avg: last_week_avg_max_headway_discrepancy[route.internal_id]&.to_f&.round(1) || 0
          },
          delays: {
            last_day: {
              count: last_day_delays.select { |d| d.first == route.internal_id }&.first&.second || 0,
              avg_mins: last_day_avg_delay_mins[route.internal_id]&.to_f&.round(1) || 0,
              max_mins: last_day_max_delay_mins[route.internal_id]&.to_f&.round(1) || 0,
            },
            last_week: {
              count: last_week_delays.select { |d| d.first == route.internal_id }&.first&.second || 0,
              avg_mins: last_week_avg_delay_mins[route.internal_id]&.to_f&.round(1) || 0,
              max_mins: last_week_max_delay_mins[route.internal_id]&.to_f&.round(1) || 0,
            }
          }
        }
      ]
    end]

    data = {
      status: results,
      timestamp: Time.current.iso8601,
    }

    Rails.cache.write("stats-info", data, expires_in: 1.day)

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

  def self.twitter_client
    return unless ENV["TWITTER_CONSUMER_KEY"]
    @twitter_client ||= Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_CONSUMER_KEY"]
      config.consumer_secret     = ENV["TWITTER_CONSUMER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
    end
  end

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