class RestoreLeffertsTripsToA < ActiveRecord::Migration[5.2]
  def change
    temp_schedules = ["BCOVID-19-Weekday-00", "BCOVID-19-Saturday-00", "BCOVID-19-Sunday-00"]
    Schedule.where(service_id: temp_schedules).each do |s|
      StopTime.joins(:trip).where(trips: {schedule_service_id: s.service_id}).destroy_all
      Trip.where(schedule_service_id: s.service_id).destroy_all
      s.destroy
      puts "Deleted schedules for #{s.service_id}"
    end

    route = Route.find_by(internal_id: 'A')
    route.alternate_name = nil
    route.save!
    puts "Updated A"

    Trip.where(route_internal_id: 'AL').update_all(route_internal_id: 'A')
    puts "Reassigned AL trips to A"

    route = Route.find_by(internal_id: 'AL')
    route.destroy
    puts "Deleted A"
  end
end
