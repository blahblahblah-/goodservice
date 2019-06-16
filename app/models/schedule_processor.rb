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

  attr_accessor :routes, :lines, :key_stops, :stops

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
          Rails.cache.write("feed-data-#{id}-current", feed, expires_in: 10.minutes)
          puts "Done analyzing feed #{id}"
        rescue StandardError => e
          puts "Error: #{e} from feed #{id}"
          if (retries += 1) < 3
            sleep(5)
            retry
          else
            begin
              puts "Falling back to backup feed #{id}"
              feed = Rails.cache.read("feed-data-#{id}-current")
              raise "No feed found" unless feed
              analyze_feed(feed, id)
              puts "Done analyzing feed #{id}"
            rescue StandardError => e
              puts "Error again for feed #{id}"
              unavailable_feeds << id
            end
          end
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
          puts e.backtrace
          retry if (retries += 1) < 3
          unavailable_feeds << id
        end
      end
    end
    update_route_feed_statuses
    complete_trips
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
            parent_name: ld.parent_name,
            boroughs: ld.boroughs,
            max_actual_headway: ld.max_actual_headway,
            max_scheduled_headway: ld.max_scheduled_headway,
            delay: ld.delay,
            travel_time: ld.travel_time,
            scheduled_runtimes: ld.scheduled_runtimes,
            actual_runtimes: ld.actual_runtimes,
            first_stops: ld.first_stops,
            last_stops: ld.last_stops,
          }
        },
        south: route.directions[3].line_directions.reject { |ld|
            ld.max_actual_headway.nil?
          }.map { |ld|
          {
            name: ld.name,
            parent_name: ld.parent_name,
            boroughs: ld.boroughs,
            max_actual_headway: ld.max_actual_headway,
            max_scheduled_headway: ld.max_scheduled_headway,
            delay: ld.delay,
            travel_time: ld.travel_time,
            scheduled_runtimes: ld.scheduled_runtimes,
            actual_runtimes: ld.actual_runtimes,
            first_stops: ld.first_stops,
            last_stops: ld.last_stops,
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
              id: route.internal_id,
              name: route.name,
              color: route.color && "##{route.color}",
              text_color: route.text_color && "##{route.text_color}",
            }
          },
          status: line.status,
          max_travel_time: line.max_travel_time,
          destinations: {
            north: line.destinations[1],
            south: line.destinations[3],
          },
          north: line.directions[1].reject { |ld|
            ld.max_actual_headway.nil? && ld.max_scheduled_headway.nil?
          }.map { |ld|
            {
              type: ld.type,
              name: ld.name,
              max_actual_headway: ld.max_actual_headway,
              max_scheduled_headway: ld.max_scheduled_headway,
              delay: ld.delay,
              travel_time: ld.travel_time,
              scheduled_runtimes: ld.scheduled_runtimes,
              actual_runtimes: ld.actual_runtimes,
              routes: ld.routes.map { |route|
                {
                  id: route.internal_id,
                  name: route.name,
                  color: route.color && "##{route.color}",
                  text_color: route.text_color && "##{route.text_color}",
                }
              }
            }
          },
          south: line.directions[3].reject { |ld|
            ld.max_actual_headway.nil? && ld.max_scheduled_headway.nil?
          }.map { |ld|
            {
              type: ld.type,
              name: ld.name,
              max_actual_headway: ld.max_actual_headway,
              max_scheduled_headway: ld.max_scheduled_headway,
              delay: ld.delay,
              travel_time: ld.travel_time,
              scheduled_runtimes: ld.scheduled_runtimes,
              actual_runtimes: ld.actual_runtimes,
              routes: ld.routes.map { |route|
                {
                  id: route.internal_id,
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
    log_line_direction_statuses

    Rails.cache.write("headway-info", data, expires_in: 1.day)

    tweet_delayed_routes(processor.routes) if tweet_delays
    truncate_stop_time_data(processor.key_stops)

    data
  end

  def self.log_route_statuses(routes_data)
    routes_data.each do |route|
      unless ["No Data", "Not Scheduled"].include?(route[:status])
        RouteStatus.create(route_internal_id: route[:id], status: route[:status], max_headway_discrepancy: route[:max_headway_discrepancy] || 0)
      end
    end
  end

  def self.log_line_direction_statuses
    LineDirection.all.each do |ld|
      LineDirectionStatus.create(line_direction_id: ld.id, travel_time: ld.travel_time)
    end
  end

  def self.routes_info(force_refresh: false)
    return Rails.cache.read("routes-info") if !force_refresh && Rails.cache.read("routes-info")
    processor = self.instance

    closed_stops = ENV['CLOSED_STOPS']&.split(',') || []

    stop_trains = Hash.new { |h, k| h[k] = [] }

    results = Hash[processor.routes.reject { |_, route|
      !route.visible? && !route.scheduled?
    }.sort_by { |_, v| "#{v.name} #{v.alternate_name}" }.map do |_, route|
      [route.internal_id, {
          id: route.internal_id,
          name: route.name,
          color: route.color && "##{route.color}",
          text_color: route.text_color && "##{route.text_color}",
          alternate_name: route.alternate_name,
          destinations: {
            north: route.directions[1].destination_stops,
            south: route.directions[3].destination_stops,
          },
          routings: {
            north: route.directions[1].routings.map { |routing|
              routing.reject {|stop| closed_stops.include?(stop) }
            },
            south: route.directions[3].routings.map { |routing|
              routing.reject {|stop| closed_stops.include?(stop) }
            },
          },
        }
      ]
    end]

    transfers = Transfer.where("from_stop_internal_id <> to_stop_internal_id").group_by(&:to_stop_internal_id)

    results.each do |route_id, route|
      route_obj = {
        id: route_id,
        name: route[:name],
        color: route[:color],
        text_color: route[:text_color],
        alternate_name: route[:alternate_name],
      }
      route[:routings].each do |_, routings|
        routings.each do |routing|
          routing.each do |stop|
            next if closed_stops.include?(stop)
            stop_trains[stop[0..2]] << route_obj

            next unless transfers_for_stop = transfers[stop[0..2]]

            transfers_for_stop.each do |transfer|
              stop_trains[transfer.from_stop_internal_id] << route_obj
            end
          end
        end
      end
    end

    stop_results = Hash[processor.stops.select { |stop| stop.internal_id.length == 3}.map do |stop|
      [stop.internal_id, {
        id: stop.internal_id,
        name: stop.stop_name,
        trains: stop_trains[stop.internal_id].uniq { |r| r[:id] },
        # borough: nil,
        # is_accessible: false,
      }]
    end]

    data = {
      routes: results,
      stops: stop_results,
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

  def self.tweet_delayed_routes(routes_info)
    return unless twitter_client

    time = Time.zone.at((Time.current.to_f / 10.minutes).round * 10.minutes)

    delayed_routes = routes_info.sort_by { |_, r|
      "#{r.name} #{r.alternate_name}"
    }.select { |_, r| r.status == "Delay" }.reject { |_, r|
      r.internal_id == 'FS'
    }.map { |_, r|
      r.name == 'S' ? r.alternate_name : r.name
    }

    if delayed_routes.any?
      status = "Delays detected @ #{time.strftime("%-l:%M%P")}: #{delayed_routes.join(', ')} trains"
    elsif !Rails.cache.read("delayed_routes").blank?
      status = "Delays detected @ #{time.strftime("%-l:%M%P")}: none"
    end

    return unless status

    puts "Sending delay status to Twitter"
    tweet = twitter_client.update!(status)
    Rails.cache.write("delayed_routes", delayed_routes, expires_in: 30.minutes)
    puts "Tweeted #{status}"
    puts "Tweet URI: #{tweet.uri}"
  rescue StandardError => e
    puts "Error tweeting: #{e.message}"
    puts e.backtrace
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

  attr_accessor :line_directions, :stop_times, :timestamp, :stop_names, :recent_trips, :unavailable_feeds

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
    if feed.header.timestamp < (Time.current - 1.hour).to_i
      puts "Feed id #{id} is outdated"
      return
    end
    translations = Rails.cache.read("active-trips-translation-#{id}") || {}
    new_translations = {}
    previous_active_trips = Rails.cache.read("active-trips-#{id}") || {}
    new_active_trips = {}
    unmatched_trips = []
    for entity in feed.entity do
      if entity.field?(:trip_update) && entity.trip_update.trip.nyct_trip_descriptor
        entity.trip_update.stop_time_update.reject! { |update|
          (update.departure || update.arrival)&.time.nil?
        }
        next if entity.trip_update.stop_time_update.all? {|update| (update&.departure || update&.arrival).time < feed.header.timestamp }
        next if entity.trip_update.stop_time_update.all? {|update| (update&.departure || update&.arrival).time > feed.header.timestamp + 60.minutes }
        actual_trip_id = entity.trip_update.trip.trip_id
        if (translated_trip_id = translations[actual_trip_id])
          process_trip(feed, translated_trip_id, entity)
          new_translations[actual_trip_id] = translated_trip_id
          previous_active_trips.delete(translated_trip_id)
          new_active_trips[translated_trip_id] = entity
        else
          unmatched_trips << entity
        end
      end
    end

    unmatched_trips.each do |entity|
      unmatched_trip_id = entity.trip_update.trip.trip_id
      trip_id = match_trip(feed.header.timestamp, previous_active_trips, entity) || unmatched_trip_id
      translated_trip_id = translations[trip_id] || trip_id
      puts "Matched #{unmatched_trip_id} with #{translated_trip_id}" if unmatched_trip_id != translated_trip_id
      process_trip(feed, translated_trip_id, entity)
      new_translations[unmatched_trip_id] = translated_trip_id
      new_active_trips[translated_trip_id] = entity
    end

    Rails.cache.write("active-trips-translation-#{id}", new_translations, expires_in: 1.hour)
    Rails.cache.write("active-trips-#{id}", new_active_trips, expires_in: 1.hour)
  end

  def match_trip(timestamp, possible_trips, entity)
    cur_update_stops = entity.trip_update.stop_time_update.select { |update|
      (update.departure || update.arrival) && (update.departure || update.arrival).time > timestamp
    }.map(&:stop_id).uniq
    cur_last_update = entity.trip_update.stop_time_update.last
    cur_last_update_time = (cur_last_update.departure || cur_last_update.arrival).time

    possible_trips.select { |_, v|
      v.trip_update.trip.route_id == entity.trip_update.trip.route_id &&
        v.trip_update.trip.nyct_trip_descriptor.direction == entity.trip_update.trip.nyct_trip_descriptor.direction &&
        v.trip_update.stop_time_update.last.stop_id == entity.trip_update.stop_time_update.last.stop_id
    }.select { |_, v|
      prev_update_stops = v.trip_update.stop_time_update.select { |update|
        (update.departure || update.arrival) && (update.departure || update.arrival).time > timestamp
      }.map(&:stop_id).uniq
      (prev_update_stops - cur_update_stops).size <= 1
    }.min_by(1) { |_, v|
      last_update = v.trip_update.stop_time_update.last
      last_update_time = (last_update.departure || last_update.arrival).time
      (cur_last_update_time - last_update_time).abs
    }.find { |_, v|
      last_update = v.trip_update.stop_time_update.last
      last_update_time = (last_update.departure || last_update.arrival).time
      (cur_last_update_time - last_update_time).abs <= 3.minutes.to_i
    }&.second&.trip_update&.trip&.trip_id
  end

  def instantiate_data
    @timestamp = Time.current
    @stop_times = StopTime.soon.includes(:trip).group_by(&:stop_internal_id)
    @line_directions = LineDirection.all.includes({line: :line_boroughs}, :express_line_direction, :local_line_direction).group_by(&:direction)
    @stop_names ||= Stop.pluck(:internal_id).to_set
    @stops ||= Stop.all
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
    pairs = Line.all.includes({line_directions: [:line, :express_line_direction, :local_line_direction]}, :line_boroughs).map do |line|
      [line.id, Display::Line.new(line, stop_times, timestamp, stops)]
    end
    @key_stops = LineDirection.all.pluck(
      :first_stop, :last_stop, :first_branch_stop, :first_alternate_branch_stop, :last_branch_stop, :last_alternate_branch_stop
    ).flatten.compact.uniq
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

  def complete_trips
    active_trips = Rails.cache.read("active-trips")
    return unless active_trips
    active_trips.select { |_, v| v < (timestamp - 3.minutes).to_i}.each do |k, _|
      active_trips.delete(k) if complete_trip(k)
    end
    Rails.cache.write("active-trips", active_trips, expires_in: 1.hour)
  end

  def complete_trip(trip_id)
    remaining_stops = Rails.cache.read("trip-#{trip_id}")
    return true unless remaining_stops
    return false if remaining_stops.any? { |stu| (stu.departure || stu.arrival).time > timestamp.to_i}

    puts "Completing trip #{trip_id}, #{remaining_stops.size} stop(s)"

    if remaining_stops.size < 4
      remaining_stops.each do |stu|
        stop_id = stu.stop_id
        route_id = trip_id.split("..").first[-1]
        # Flip direction for M train stops on Broadway (Brooklyn) Line
        if route_id == "M" && ["M11", "M12", "M13", "M14", "M15", "M16", "M18"].include?(stop_id[0..2])
          if stop_id[3] == 'S'
            stop_id = stop_id[0..2] + 'N'
          else
            stop_id = stop_id[0..2] + 'S'
          end
        end
        next unless key_stops.include?(stop_id)
        stop_hash = Rails.cache.read("stoptime-#{stop_id}")
        stop_hash ||= {}
        stop_hash[trip_id] ||= (stu.departure || stu.arrival).time
        Rails.cache.write("stoptime-#{stop_id}", stop_hash, expires_in: 1.hour)
      end
    end
    true
  end

  def reverse_trip_update(trip_update)
    direction = (trip_update.trip.nyct_trip_descriptor.direction.to_i == 1) ? 3 : 1

    trip_update.stop_time_update = trip_update.stop_time_update.map do |stop_time_update|
      stop_time_update.stop_id = "#{stop_time_update.stop_id[0..2]}#{stop_time_update.stop_id[3] == 'N' ? 'S' : 'N'}"

      stop_time_update
    end

    return trip_update, direction
  end

  def process_trip(feed, trip_id, entity)
    route_id = route(entity.trip_update.trip.route_id)
    direction = entity.trip_update.trip.nyct_trip_descriptor.direction.to_i
    if route_id == 'A' && entity.trip_update.stop_time_update.present? &&
      ((entity.trip_update.stop_time_update.last.stop_id == 'A55S' && entity.trip_update.stop_time_update[-2] && entity.trip_update.stop_time_update[-2].stop_id =='A57S') ||
            (entity.trip_update.stop_time_update.last.stop_id == 'A65N' && entity.trip_update.stop_time_update[-2] && entity.trip_update.stop_time_update[-2].stop_id =='A64N'))
      puts "A Shuttle found, reversing trip #{trip_id}"
      entity.trip_update, direction = reverse_trip_update(entity.trip_update)
    end
    trip = Display::Trip.new(route_id, entity.trip_update, direction, feed.header.timestamp, line_directions[direction], stop_names, recent_trips, key_stops, trip_id)
    routes[route_id]&.push_trip(trip)
    trip.add_to_lines(lines)
    puts "Error: #{route_id} not found" if routes[route_id].nil?
  end

  def self.truncate_stop_time_data(key_stops)
    key_stops.each do |stop_id|
      stop_times = Rails.cache.read("stoptime-#{stop_id}")
      next unless stop_times
      stop_times.reject! { |_, v| v < Time.current.to_i - 120.minutes}
      Rails.cache.write("stoptime-#{stop_id}", stop_times, expires_in: 1.hour)
    end
  end
end