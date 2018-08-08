require "csv"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Route.create(name: '1', internal_id: '1', color: 'EE352E')
Route.create(name: '2', internal_id: '2', color: 'EE352E')
Route.create(name: '3', internal_id: '3', color: 'EE352E')
Route.create(name: '4', internal_id: '4', color: '00933C')
Route.create(name: '5', internal_id: '5', color: '00933C')
Route.create(name: '5X', internal_id: '5X', color: '00933C', visible: false)
Route.create(name: '6', internal_id: '6', color: '00933C')
Route.create(name: '6X', internal_id: '6X', color: '00933C', visible: false)
Route.create(name: '7', internal_id: '7', color: 'B933AD')
Route.create(name: '7X', internal_id: '7X', color: 'B933AD', visible: false)
Route.create(name: 'S', alternate_name: '42 St Shuttle', internal_id: 'GS', color: '6D6E71')
Route.create(name: 'A', internal_id: 'A', color: '2850AD')
Route.create(name: 'B', internal_id: 'B', color: 'FF6319')
Route.create(name: 'C', internal_id: 'C', color: '2850AD')
Route.create(name: 'D', internal_id: 'D', color: 'FF6319')
Route.create(name: 'E', internal_id: 'E', color: '2850AD')
Route.create(name: 'F', internal_id: 'F', color: 'FF6319')
Route.create(name: 'S', alternate_name: 'Franklin Avenue Shuttle', internal_id: 'FS', color: '6D6E71')
Route.create(name: 'G', internal_id: 'G', color: '6CBE45')
Route.create(name: 'J', internal_id: 'J', color: '996633')
Route.create(name: 'L', internal_id: 'L', color: 'A7A9AC')
Route.create(name: 'M', internal_id: 'M', color: 'FF6319')
Route.create(name: 'N', internal_id: 'N', color: 'FCCC0A', text_color: '000000')
Route.create(name: 'Q', internal_id: 'Q', color: 'FCCC0A', text_color: '000000')
Route.create(name: 'R', internal_id: 'R', color: 'FCCC0A', text_color: '000000')
Route.create(name: 'S', alternate_name: 'Rockaway Park Shuttle', internal_id: 'H', color: '6D6E71')
Route.create(name: 'W', internal_id: 'W', color: 'FCCC0A', text_color: '000000')
Route.create(name: 'Z', internal_id: 'Z', color: '996633')
Route.create(name: 'SIR', internal_id: 'SI', color: '2850AD', visible: false)

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

csv_text = File.read(Rails.root.join('import', 'stops.txt'))
csv = CSV.parse(csv_text, headers: true)
csv.each do |row|
  s = Stop.new
  s.internal_id = row['stop_id']
  s.stop_name = row['stop_name']
  s.parent_stop_id = row['parent_station'].presence
  s.save!
  puts "#{s.internal_id} saved"
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

secav = Line.create(name: "2 Avenue Line")
lex = Line.create(name: "Lexington Avenue Line")
sixav = Line.create(name: "6 Avenue Line")
bway = Line.create(name: "Broadway Line")
sevav = Line.create(name: "7 Avenue Line")
eigav = Line.create(name: "8 Avenue Line")
canarsie = Line.create(name: "14 Street–Canarsie Line")
flushing = Line.create(name: "Flushing Line")
nassau = Line.create(name: "Nassau Street–Jamaica Line")

usecav = LineDirection.create(direction: "Uptown", line: secav)
dsecav = LineDirection.create(direction: "Downtown", line: secav)
ulex = LineDirection.create(direction: "Uptown", line: lex)
dlex = LineDirection.create(direction: "Downtown", line: lex)
usixav = LineDirection.create(direction: "Uptown", line: sixav)
dsixav = LineDirection.create(direction: "Downtown", line: sixav)
ubway = LineDirection.create(direction: "Uptown", line: bway)
dbway = LineDirection.create(direction: "Downtown", line: bway)
usevav = LineDirection.create(direction: "Uptown", line: sevav)
dsevav = LineDirection.create(direction: "Downtown", line: sevav)
ueigav = LineDirection.create(direction: "Uptown", line: eigav)
deigav = LineDirection.create(direction: "Downtown", line: eigav)
wcanarsie = LineDirection.create(direction: "West", line: canarsie)
ecanarsie = LineDirection.create(direction: "East", line: canarsie)
wflushing = LineDirection.create(direction: "West", line: flushing)
eflushing = LineDirection.create(direction: "East", line: flushing)
jnassau = LineDirection.create(direction: "Jamaica Center-bound", line: nassau)
bnassau = LineDirection.create(direction: "Broad St-bound", line: nassau)

LineBorough.create(borough: "Manhattan", line: secav)
LineBorough.create(borough: "Manhattan", line: lex)
LineBorough.create(borough: "Manhattan", line: sixav)
LineBorough.create(borough: "Manhattan", line: bway)
LineBorough.create(borough: "Manhattan", line: sevav)
LineBorough.create(borough: "Manhattan", line: eigav)
LineBorough.create(borough: "Manhattan", line: canarsie)
LineBorough.create(borough: "Brooklyn", line: canarsie)
LineBorough.create(borough: "Manhattan", line: flushing)
LineBorough.create(borough: "Queens", line: flushing)
LineBorough.create(borough: "Manhattan", line: nassau)
LineBorough.create(borough: "Brooklyn", line: nassau)
LineBorough.create(borough: "Queens", line: nassau)

KeyStation.create(line_direction: usecav, stop_internal_id: "Q03N") # 72 St
KeyStation.create(line_direction: dsecav, stop_internal_id: "Q03S") # 72 St
KeyStation.create(line_direction: ulex, stop_internal_id: "635N") # 14 St – Union Sq
KeyStation.create(line_direction: dlex, stop_internal_id: "629S") # 59 St
KeyStation.create(line_direction: dlex, stop_internal_id: "635S") # 14 St – Union Sq
KeyStation.create(line_direction: usixav, stop_internal_id: "D21N") # Broadway-Lafayette St
KeyStation.create(line_direction: dsixav, stop_internal_id: "D15S") # 47-50 Sts - Rockefeller Ctr
KeyStation.create(line_direction: ubway, stop_internal_id: "R19N") # 14 St–Union Sq
KeyStation.create(line_direction: dbway, stop_internal_id: "R14S") # 57 St – 7 Av
KeyStation.create(line_direction: dbway, stop_internal_id: "R19S") # 14 St–Union Sq
KeyStation.create(line_direction: usevav, stop_internal_id: "137N") # Chambers St
KeyStation.create(line_direction: dsevav, stop_internal_id: "127S") # Times Sq – 42 St
KeyStation.create(line_direction: ueigav, stop_internal_id: "A32N") # W 4 St
KeyStation.create(line_direction: deigav, stop_internal_id: "A27S") # 42 St – Port Authority Bus Terminal
KeyStation.create(line_direction: wcanarsie, stop_internal_id: "L10S") # Lorimer St
KeyStation.create(line_direction: ecanarsie, stop_internal_id: "L10N") # Lorimer St
KeyStation.create(line_direction: wflushing, stop_internal_id: "718S") # Queensboro Plaza
KeyStation.create(line_direction: eflushing, stop_internal_id: "718N") # Queensboro Plaza
KeyStation.create(line_direction: jnassau, stop_internal_id: "M16N") # Marcy Av
KeyStation.create(line_direction: bnassau, stop_internal_id: "M16S") # Marcy Av