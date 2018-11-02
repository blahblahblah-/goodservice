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

  every(30.seconds, 'update.data') {
    puts "Updating Headways"
    startTime = Time.current
    ScheduleProcessor.instance.refresh_data
    midTime = Time.current
    puts "Refreshed data in #{midTime - startTime} secs"
    ScheduleProcessor.headway_info(force_refresh: true)
    if (Time.current.min % 5 == 1 && Time.current.sec < 30)
      puts "Updating Routes"
      ScheduleProcessor.routes_info(force_refresh: true)
    end
    endTime = Time.current
    puts "Finished in #{endTime - startTime} seconds"
  }
end