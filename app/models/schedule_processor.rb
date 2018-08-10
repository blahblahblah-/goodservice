require 'nyct-subway.pb'
require 'net/http'
require 'uri'

BASE_URI = "http://datamine.mta.info/mta_esi.php"

FEED_IDS = [1, 26, 16, 21, 2, 11, 31, 36, 51]

class ScheduleProcessor
  def initialize
    FEED_IDS.each do |id|
      estimated_times(id, key_stations.map(&:stop_internal_id))
    end
    process_headways
    compare_schedules
  end

  def estimated_times(feed_id, stop_ids)
    data = Net::HTTP.get(URI.parse("#{BASE_URI}?key=#{ENV["MTA_KEY"]}&feed_id=#{feed_id}"))
    feed = Transit_realtime::FeedMessage.decode(data)
    for entity in feed.entity do
      if entity.field?(:trip_update) && entity.trip_update.trip.nyct_trip_descriptor
        entity.trip_update.stop_time_update.each do |update|
          if stop_ids.include?(update.stop_id)
            if update&.departure && (time = Time.at(update.departure.time)) > Time.current && time < Time.current + 40.minutes
              direction = update.stop_id.ends_with?("N") ? 1 : 3
              next if entity.trip_update.trip.nyct_trip_descriptor.direction != direction
              # stop_times[update.stop_id] << time
              stop_times_by_route[update.stop_id][entity.trip_update.trip.route_id] << time
            end
          end
        end
      end
    end
  end

  def compare_schedules
    key_stations.each do |station|
      station.stop.current_headways_by_route.each do |route, headways|
        max_headway = headways.max + 2
        actual_max_headway = route_headways[station.stop_internal_id][route]&.max
        if actual_max_headway.nil?
          puts "Expected, but no service for #{route} at #{station.stop.stop_name}."
          next
        end
        if actual_max_headway > max_headway
          puts "Headway discrepancy detected at #{station.stop.stop_name} for #{route}. Expected: #{headways.max}, actual: #{actual_max_headway}"
          troubled_routes[route] = [headways.max, actual_max_headway]
        end
      end
    end
  end

  def process_headways
    # stop_times.each do |stop, v|
    #   times = v.clone
    #   times << Time.current if v.size == 1
    #   line_headways[stop] = times.sort.each_cons(2).map { |a,b| (b - a) / 60 }
    # end

    stop_times_by_route.each do |stop, v|
      v.each do |route, times_arr|
        times = times_arr.clone
        times << Time.current if times.size == 1
        route_headways[stop][route] = times.sort.each_cons(2).map { |a,b| (b - a) / 60 }
      end
    end
  end

  # def stop_times
  #   @stop_times ||= Hash.new { |h, k| h[k] = [] }   
  # end

  def stop_times_by_route
    @stop_times_by_route ||= Hash.new { |h, k| h[k] = (Hash.new { |h, k| h[k] = [] }) }   
  end

  def key_stations
    @key_stations ||= KeyStation.all
  end

  # def line_headways
  #   @line_headways ||= {}
  # end

  def route_headways
    @route_headways ||= Hash.new { |h, k| h[k] = {} }
  end

  def troubled_routes
    @troubled_routes ||= {}
  end
end