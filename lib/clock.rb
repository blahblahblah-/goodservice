require 'clockwork'
require './config/boot'
require './config/environment'

module Clockwork
  handler do |job|
    puts "Running #{job}"
  end

  # handler receives the time when job is prepared to run in the 2nd argument
  # handler do |job, time|
  #   puts "Running #{job}, at #{time}"
  # end

  every(1.minute, 'update.data') {
    puts "Updating Headways"
    twitter_interval = ENV["TWITTER_INTERVAL"] || 10
    tweet_delays = Time.current.min % twitter_interval == 0

    startTime = Time.current
    ScheduleProcessor.instance.refresh_data
    midTime = Time.current
    puts "Refreshed data in #{midTime - startTime} seconds"

    ScheduleProcessor.headway_info(force_refresh: true, tweet_delays: tweet_delays)
    processTime = Time.current
    puts "Processed headway info in #{processTime - midTime} seconds"
    ScheduleProcessor.stats_info(force_refresh: true)
    statsTime = Time.current
    puts "Processed stats in #{statsTime - processTime} seconds"
    puts "Updating Routes"
    ScheduleProcessor.routes_info(force_refresh: true)
    routesTime = Time.current
    puts "Processed routes info in #{routesTime - statsTime} seconds"
    ScheduleProcessor.arrivals_info(force_refresh: true)
    arrivals_time = Time.current
    puts "Processed arrivals info in #{arrivals_time - statsTime} seconds"
    if Time.current.min % 30 == 0
      AccessibilityProcessor.accessibility_info(force_refresh: true)
      accessibilityTime = Time.current
      puts "Processed accessibility info in #{accessibilityTime - arrivals_time} seconds"
    end
    endTime = Time.current
    status = "Finished in #{endTime - startTime} seconds"
    puts status
    Snitcher.snitch(ENV["DEADMANSSNITCH_TOKEN"], message: status) if ENV["DEADMANSSNITCH_TOKEN"]
  }

  every(1.day, 'db.cleanup', at: '00:00', tz: 'America/New_York') {
    puts "Start DB cleanup"
    startTime = Time.current
    RouteStatus.where("created_at < ?", Date.current - 2.months).delete_all
    ActualTrip.where("created_at < ?", Date.current - 2.months).delete_all
    Delay.where("created_at < ?", Date.current - 2.months).delete_all
    LineDirectionStatus.where("created_at < ?", Date.current - 10.days).delete_all
    endTime = Time.current
    puts "DB cleanup finished in #{endTime - startTime} seconds"

    Rails.cache.delete_matched("views/*/api/lines/*/archive/*")
    cacheTime = Time.current
    puts "Line stats cache cleared in #{cacheTime - endTime} seconds"

    ScheduleProcessor.stats_info(force_refresh: true, force_refresh_last_week_stats: true)
    statsTime = Time.current
    puts "Processed stats in #{statsTime - cacheTime} seconds"
  }
end