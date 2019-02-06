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
    startTime = Time.current
    ScheduleProcessor.instance.refresh_data
    midTime = Time.current
    puts "Refreshed data in #{midTime - startTime} seconds"
    ScheduleProcessor.headway_info(force_refresh: true)
    if (Time.current.min % 5 == 1)
      puts "Updating Routes"
      ScheduleProcessor.routes_info(force_refresh: true)
    end
    endTime = Time.current
    puts "Finished in #{endTime - startTime} seconds"
  }

  every(1.day, 'db.cleanup', at: '00:00', tz: 'America/New_York') {
    puts "Start DB cleanup"
    startTime = Time.current
    RouteStatus.where("created_at < ?", Date.current - 2.months).delete_all
    ActualTrip.where("created_at < ?", Date.current - 2.months).delete_all
    endTime = Time.current
    puts "DB cleanup finished in #{endTime - startTime} seconds"
  }
end