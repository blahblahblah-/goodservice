class DuplicateTripsAndSeparateALefferts < ActiveRecord::Migration[5.2]
  def change
    Route.create(name: 'A', alternate_name: 'Lefferts Blvd', internal_id: 'AL', color: '2185d0')
    weekday = Schedule.new
    weekday.service_id = "BCOVID-19-Weekday-00"
    weekday.monday = 1
    weekday.tuesday = 1
    weekday.wednesday = 1
    weekday.thursday = 1
    weekday.friday = 1
    weekday.saturday = 0
    weekday.sunday = 0
    weekday.start_date = Date.today - 1.day
    weekday.end_date = Date.today + 3.months
    weekday.save!

    saturday = Schedule.new
    saturday.service_id = "BCOVID-19-Saturday-00"
    saturday.monday = 0
    saturday.tuesday = 0
    saturday.wednesday = 0
    saturday.thursday = 0
    saturday.friday = 0
    saturday.saturday = 1
    saturday.sunday = 0
    saturday.start_date = Date.today - 1.day
    saturday.end_date = Date.today + 3.months
    saturday.save!

    sunday = Schedule.new
    sunday.service_id = "BCOVID-19-Sunday-00"
    sunday.monday = 0
    sunday.tuesday = 0
    sunday.wednesday = 0
    sunday.thursday = 0
    sunday.friday = 0
    sunday.saturday = 0
    sunday.sunday = 1
    sunday.start_date = Date.today - 1.day
    sunday.end_date = Date.today + 3.months
    sunday.save!

    Trip.where(route_internal_id: 'C').each do |t|
      new_trip = t.dup
      new_trip.route_internal_id = 'AL'
      original_id = t.internal_id
      array = original_id.split('-')

      if original_id.include?('Weekday')
        new_trip.schedule_service_id = weekday.service_id
        new_id = weekday.service_id + "-" + array.last
      elsif original_id.include?('Saturday')
        new_trip.schedule_service_id = saturday.service_id
        new_id = saturday.service_id + "-" + array.last
      else
        new_trip.schedule_service_id = sunday.service_id
        new_id = sunday.service_id + "-" + array.last
      end
      new_trip.internal_id = new_id
      new_trip.save!
      puts "New trip #{new_trip.internal_id} saved!"

      StopTime.where(trip_internal_id: original_id).each do |st|
        new_stop_time = st.dup
        new_stop_time.trip_internal_id = new_id
        new_stop_time.save!
      end
      puts "Stops for #{new_trip.internal_id} saved!"
    end
  end
end
