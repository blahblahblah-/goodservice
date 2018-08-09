class RefreshData < ActiveRecord::Migration[5.2]
  require "csv"
  disable_ddl_transaction!

  def change
    StopTime.delete_all
    Trip.delete_all
    CalendarException.delete_all
    Schedule.delete_all

    csv_text = File.read(Rails.root.join('import', 'calendar.txt'))
    csv = CSV.parse(csv_text, headers: true)
    csv.each do |row|
      s = Schedule.new
      s.service_id = row['service_id']
      s.monday = row['monday']
      s.tuesday = row['tuesday']
      s.wednesday = row['wednesday']
      s.thursday = row['thursday']
      s.friday = row['friday']
      s.saturday = row['saturday']
      s.sunday = row['sunday']
      s.save!
      puts "#{s.service_id} saved"
    end

    csv_text = File.read(Rails.root.join('import', 'calendar_dates.txt'))
    csv = CSV.parse(csv_text, headers: true)
    csv.each do |row|
      c = CalendarException.new
      c.schedule_service_id = row['service_id']
      c.date = row['date']
      c.save!
      puts "#{c.date} saved"
    end

    csv_text = File.read(Rails.root.join('import', 'trips.txt'))
    csv = CSV.parse(csv_text, headers: true)
    csv.each do |row|
      t = Trip.new
      t.route_internal_id = row['route_id']
      t.schedule_service_id = row['service_id']
      t.internal_id = row['trip_id']
      t.destination = row['trip_headsign']
      t.direction = row['direction_id']
      t.save!
      puts "#{t.internal_id} saved"
    end

    CSV.foreach(Rails.root.join('import', 'stop_times.txt'), headers: true) do |row|
      s = StopTime.new
      s.trip_internal_id = row['trip_id']
      str = row['departure_time']
      array = str.split(':').map(&:to_i)
      s.departure_time = array[0] * 3600 + array[1] * 60 + array[2]
      s.stop_internal_id = row['stop_id']
      s.stop_sequence = row['stop_sequence']
      s.save!
      puts "#{s.trip_internal_id} at #{s.stop_internal_id} saved"
    end
  end
end
