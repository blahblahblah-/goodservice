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
  end

  def routes
    return @routes if @routes
    pairs = Route.all.map do |route|
      [route.internal_id, Display::Route.new(route)]
    end
    @routes = Hash[pairs]
  end

  def lines

  end

  private

  def estimated_times(feed_id, stop_ids)
    data = Net::HTTP.get(URI.parse("#{BASE_URI}?key=#{ENV["MTA_KEY"]}&feed_id=#{feed_id}"))
    feed = Transit_realtime::FeedMessage.decode(data)
    for entity in feed.entity do
      if entity.field?(:trip_update) && entity.trip_update.trip.nyct_trip_descriptor
        entity.trip_update.stop_time_update.each do |update|
          if stop_ids.include?(update.stop_id)
            if update&.departure && (time = Time.at(update.departure.time)) > Time.current && time < Time.current + 30.minutes
              direction = update.stop_id.ends_with?("N") ? 1 : 3
              next if entity.trip_update.trip.nyct_trip_descriptor.direction != direction
              stop_headways[update.stop_id].add_actual_trip_time(entity.trip_update.trip.route_id, time)
              routes[entity.trip_update.trip.route_id].add_stop_headway(stop_headways[update.stop_id])
            end
          end
        end
      end
    end
  end

  def key_stations
    @key_stations ||= KeyStation.all
  end

  def stop_headways
    @stop_headways ||= Hash.new { |h, k| h[k] = Display::StopHeadway.new(k) }
  end
end