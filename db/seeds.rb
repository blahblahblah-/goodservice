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

secav = Line.create(name: "2 Avenue")
lex = Line.create(name: "Lexington Avenue")
sixav = Line.create(name: "6 Avenue")
bway = Line.create(name: "Broadway")
sevav = Line.create(name: "7 Avenue")
eigav = Line.create(name: "8 Avenue")
canarsie = Line.create(name: "14 Street–Canarsie")
flushing = Line.create(name: "Flushing")
nassau = Line.create(name: "Nassau Street")

crosstown = Line.create(name: "Crosstown")
fortysecond = Line.create(name: "42 Street")
franklin = Line.create(name: "Franklin Avenue")
rockawaypk = Line.create(name: "Rockaway (Rockaway Park Branch)")
farrockaway = Line.create(name: "Rockaway (Far Rockaway Branch)")
astoria = Line.create(name: "Astoria")
queensblvd = Line.create(name: "Queens Boulevard")
fourthav = Line.create(name: "4 Avenue")
brighton = Line.create(name: "Brighton")
westend = Line.create(name: "West End")
seabeach = Line.create(name: "Sea Beach")
jamaica = Line.create(name: "Jamaica")
bwaybk = Line.create(name: "Broadway (Brooklyn)")
myrtle = Line.create(name: "Myrtle Avenue")
fulton = Line.create(name: "Fulton Street")
concourse = Line.create(name: "Concourse")
culver = Line.create(name: "Culver")
epkwy = Line.create(name: "Eastern Parkway")
nostrand = Line.create(name: "Nostrand Avenue")
newlots = Line.create(name: "New Lots")
pelham = Line.create(name: "Pelham")
jerome = Line.create(name: "Jerome Avenue")
lenox = Line.create(name: "Lenox Avenue")
whiteplains = Line.create(name: "White Plains Road")
dyre = Line.create(name: "Dyre Avenue")
bwayseventh = Line.create(name: "Broadway–7 Avenue")
cpw = Line.create(name: "Central Park West")
wh = Line.create(name: "8 Avenue (Washington Heights)")
si = Line.create(name: "Staten Island")

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

LineBorough.create(borough: "Queens", line: crosstown)
LineBorough.create(borough: "Brooklyn", line: crosstown)
LineBorough.create(borough: "Manhattan", line: fortysecond)
LineBorough.create(borough: "Brooklyn", line: franklin)
LineBorough.create(borough: "Queens", line: rockawaypk)
LineBorough.create(borough: "Queens", line: farrockaway)
LineBorough.create(borough: "Queens", line: astoria)
LineBorough.create(borough: "Queens", line: queensblvd)
LineBorough.create(borough: "Brooklyn", line: fourthav)
LineBorough.create(borough: "Brooklyn", line: brighton)
LineBorough.create(borough: "Brooklyn", line: westend)
LineBorough.create(borough: "Brooklyn", line: seabeach)
LineBorough.create(borough: "Brooklyn", line: jamaica)
LineBorough.create(borough: "Queens", line: jamaica)
LineBorough.create(borough: "Brooklyn", line: bwaybk)
LineBorough.create(borough: "Brooklyn", line: myrtle)
LineBorough.create(borough: "Queens", line: myrtle)
LineBorough.create(borough: "Brooklyn", line: fulton)
LineBorough.create(borough: "Queens", line: fulton)
LineBorough.create(borough: "The Bronx", line: concourse)
LineBorough.create(borough: "Brooklyn", line: culver)
LineBorough.create(borough: "Brooklyn", line: epkwy)
LineBorough.create(borough: "Brooklyn", line: nostrand)
LineBorough.create(borough: "Brooklyn", line: newlots)
LineBorough.create(borough: "The Bronx", line: pelham)
LineBorough.create(borough: "The Bronx", line: jerome)
LineBorough.create(borough: "Manhattan", line: lenox)
LineBorough.create(borough: "The Bronx", line: whiteplains)
LineBorough.create(borough: "The Bronx", line: dyre)
LineBorough.create(borough: "The Bronx", line: bwayseventh)
LineBorough.create(borough: "Manhattan", line: bwayseventh)
LineBorough.create(borough: "Manhattan", line: cpw)
LineBorough.create(borough: "Manhattan", line: wh)
LineBorough.create(borough: "Staten Island", line: si)

LineDirection.create(line: secav, direction: 1, first_stop: "Q03N", last_stop: "Q05N")
LineDirection.create(line: secav, direction: 3, first_stop: "Q05S", last_stop: "Q03S")
lexexn = ExpressLineDirection.create(line: lex, direction: 1, first_stop: "420N", last_stop: "621N")
lexexs = ExpressLineDirection.create(line: lex, direction: 3, first_stop: "621S", last_stop: "420S")
LocalLineDirection.create(line: lex, express_line_direction: lexexn, direction: 1, first_stop: "639N", last_stop: "622N")
LocalLineDirection.create(line: lex, express_line_direction: lexexs, direction: 3, first_stop: "622S", last_stop: "639S")
sixexn = ExpressLineDirection.create(line: sixav, direction: 1, first_stop: "D20N", last_stop: "D15N")
sixexs = ExpressLineDirection.create(line: sixav, direction: 3, first_stop: "D15S", last_stop: "D20S")
LocalLineDirection.create(line: sixav, express_line_direction: sixexn, direction: 1, first_stop: "D19N", last_stop: "D19N")
LocalLineDirection.create(line: sixav, express_line_direction: sixexs, direction: 3, first_stop: "D19S", last_stop: "D19S")
bwayexn = ExpressLineDirection.create(line: bway, direction: 1, first_stop: "R20N", last_stop: "R14N")
bwayexs = ExpressLineDirection.create(line: bway, direction: 3, first_stop: "R14S", last_stop: "R20S")
LocalLineDirection.create(line: bway, express_line_direction: bwayexn, direction: 1, first_stop: "R22N", last_stop: "R18N")
LocalLineDirection.create(line: bway, express_line_direction: bwayexs, direction: 3, first_stop: "R18S", last_stop: "R22S")
sevexn = ExpressLineDirection.create(line: sevav, direction: 1, first_stop: "137N", last_stop: "120N")
sevexs = ExpressLineDirection.create(line: sevav, direction: 3, first_stop: "120S", last_stop: "137S")
LocalLineDirection.create(line: sevav, express_line_direction: sevexn, direction: 1, first_stop: "136N", last_stop: "121N")
LocalLineDirection.create(line: sevav, express_line_direction: sevexs, direction: 3, first_stop: "121S", last_stop: "136S")
eigexn = ExpressLineDirection.create(line: eigav, direction: 1, first_stop: "A32N", last_stop: "A27N")
eigexs = ExpressLineDirection.create(line: eigav, direction: 3, first_stop: "A27S", last_stop: "A32S")
LocalLineDirection.create(line: eigav, express_line_direction: eigexn, direction: 1, first_stop: "A30N", last_stop: "A30N")
LocalLineDirection.create(line: eigav, express_line_direction: eigexs, direction: 3, first_stop: "A30S", last_stop: "A30S")
LineDirection.create(line: canarsie, direction: 1, first_stop: "L17N", last_stop: "L01S")
LineDirection.create(line: canarsie, direction: 3, first_stop: "L01S", last_stop: "L17S")
flushingexn = ExpressLineDirection.create(line: flushing, direction: 1, first_stop: "726N", last_stop: "701N")
flushingexs = ExpressLineDirection.create(line: flushing, direction: 3, first_stop: "701S", last_stop: "726S")
LocalLineDirection.create(line: flushing, express_line_direction: flushingexn, direction: 1, first_stop: "716N", last_stop: "705N")
LocalLineDirection.create(line: flushing, express_line_direction: flushingexs, direction: 3, first_stop: "705S", last_stop: "716S")
LineDirection.create(line: nassau, direction: 1, first_stop: "M23N", last_stop: "M19N")
LineDirection.create(line: nassau, direction: 3, first_stop: "M19S", last_stop: "M23S")
LineDirection.create(line: crosstown, direction: 1, first_stop: "G36N", last_stop: "G22N")
LineDirection.create(line: crosstown, direction: 3, first_stop: "G22S", last_stop: "G36S")
LineDirection.create(line: fortysecond, direction: 1, first_stop: "902N", last_stop: "901N")
LineDirection.create(line: fortysecond, direction: 3, first_stop: "901S", last_stop: "902S")
LineDirection.create(line: franklin, direction: 1, first_stop: "S04N", last_stop: "S01N")
LineDirection.create(line: franklin, direction: 3, first_stop: "S01S", last_stop: "S04S")
LineDirection.create(line: rockawaypk, direction: 1, first_stop: "H15N", last_stop: "H12N")
LineDirection.create(line: rockawaypk, direction: 3, first_stop: "H12S", last_stop: "H15S")
LineDirection.create(line: farrockaway, direction: 1, first_stop: "H11N", last_stop: "H06N")
LineDirection.create(line: farrockaway, direction: 3, first_stop: "H06S", last_stop: "H11S")
LineDirection.create(line: astoria, direction: 1, first_stop: "R06N", last_stop: "R01N")
LineDirection.create(line: astoria, direction: 3, first_stop: "R01S", last_stop: "R06S")
queensexn = ExpressLineDirection.create(line: queensblvd, direction: 1, first_stop: "G14N", last_stop: "F06N")
queensexs = ExpressLineDirection.create(line: queensblvd, direction: 3, first_stop: "F06S", last_stop: "G14S")
LocalLineDirection.create(line: queensblvd, express_line_direction: queensexn, direction: 1, first_stop: "G20N", last_stop: "G09N")
LocalLineDirection.create(line: queensblvd, express_line_direction: queensexs, direction: 3, first_stop: "G09S", last_stop: "G20S")
fourthexn = ExpressLineDirection.create(line: fourthav, direction: 1, first_stop: "R36N", last_stop: "R31N")
fourthexs = ExpressLineDirection.create(line: fourthav, direction: 3, first_stop: "R31S", last_stop: "R36S")
LocalLineDirection.create(line: fourthav, express_line_direction: fourthexn, direction: 1, first_stop: "R35N", last_stop: "R32N")
LocalLineDirection.create(line: fourthav, express_line_direction: fourthexs, direction: 3, first_stop: "R32S", last_stop: "R35S")
brightonexn = ExpressLineDirection.create(line: brighton, direction: 1, first_stop: "D40N", last_stop: "D24N")
brightonexs = ExpressLineDirection.create(line: brighton, direction: 3, first_stop: "D24S", last_stop: "D40S")
LocalLineDirection.create(line: brighton, express_line_direction: brightonexn, direction: 1, first_stop: "D41N", last_stop: "D27N")
LocalLineDirection.create(line: brighton, express_line_direction: brightonexs, direction: 3, first_stop: "D27S", last_stop: "D41S")
LineDirection.create(line: westend, direction: 1, first_stop: "B23N", last_stop: "B12N")
LineDirection.create(line: westend, direction: 3, first_stop: "B12S", last_stop: "B23S")
LineDirection.create(line: seabeach, direction: 1, first_stop: "N10N", last_stop: "N02N")
LineDirection.create(line: seabeach, direction: 3, first_stop: "N02S", last_stop: "N10S")
LineDirection.create(line: jamaica, direction: 1, first_stop: "J27N", last_stop: "J15N")
LineDirection.create(line: jamaica, direction: 3, first_stop: "J15S", last_stop: "J27S")
bwaybkexn = ExpressLineDirection.create(line: bwaybk, direction: 1, first_stop: "M16N", last_stop: "M11N")
bwaybkexs = ExpressLineDirection.create(line: bwaybk, direction: 3, first_stop: "M11S", last_stop: "M16S")
LocalLineDirection.create(line: bwaybk, express_line_direction: bwaybkexn, direction: 1, first_stop: "M14N", last_stop: "M12N")
LocalLineDirection.create(line: bwaybk, express_line_direction: bwaybkexs, direction: 3, first_stop: "M12S", last_stop: "M14S")
LineDirection.create(line: myrtle, direction: 1, first_stop: "M10N", last_stop: "M01N")
LineDirection.create(line: myrtle, direction: 3, first_stop: "M01S", last_stop: "M10S")
fultonexn = ExpressLineDirection.create(line: fulton, direction: 1, first_stop: "A55N", last_stop: "A46N")
fultonexs = ExpressLineDirection.create(line: fulton, direction: 3, first_stop: "A46S", last_stop: "A55S")
LocalLineDirection.create(line: fulton, express_line_direction: fultonexn, direction: 1, first_stop: "A54N", last_stop: "A43N")
LocalLineDirection.create(line: fulton, express_line_direction: fultonexs, direction: 3, first_stop: "A43S", last_stop: "A54S")
concourseexn = ExpressLineDirection.create(line: concourse, direction: 1, first_stop: "D13N", last_stop: "D01N")
concourseexs = ExpressLineDirection.create(line: concourse, direction: 3, first_stop: "D01S", last_stop: "D13S")
LocalLineDirection.create(line: concourse, express_line_direction: concourseexn, direction: 1, first_stop: "D12N", last_stop: "D06N")
LocalLineDirection.create(line: concourse, express_line_direction: concourseexs, direction: 3, first_stop: "D06S", last_stop: "D12S")
LineDirection.create(line: culver, direction: 1, first_stop: "F27N", last_stop: "F20N")
LineDirection.create(line: culver, direction: 3, first_stop: "F20S", last_stop: "F27S")
epkwyexn = ExpressLineDirection.create(line: epkwy, direction: 1, first_stop: "239N", last_stop: "234N")
epkwyexs = ExpressLineDirection.create(line: epkwy, direction: 3, first_stop: "234S", last_stop: "239S")
LocalLineDirection.create(line: epkwy, express_line_direction: epkwyexn, direction: 1, first_stop: "238N", last_stop: "236N")
LocalLineDirection.create(line: epkwy, express_line_direction: epkwyexs, direction: 3, first_stop: "236S", last_stop: "238S")
LineDirection.create(line: nostrand, direction: 1, first_stop: "247N", last_stop: "241N")
LineDirection.create(line: nostrand, direction: 3, first_stop: "241S", last_stop: "247S")
LineDirection.create(line: newlots, direction: 1, first_stop: "257N", last_stop: "251N")
LineDirection.create(line: newlots, direction: 3, first_stop: "251S", last_stop: "257S")
pelhamexn = ExpressLineDirection.create(line: pelham, direction: 1, first_stop: "619N", last_stop: "601N")
pelhamexs = ExpressLineDirection.create(line: pelham, direction: 3, first_stop: "601S", last_stop: "619S")
LocalLineDirection.create(line: pelham, express_line_direction: pelhamexn, direction: 1, first_stop: "618N", last_stop: "609N")
LocalLineDirection.create(line: pelham, express_line_direction: pelhamexs, direction: 3, first_stop: "609S", last_stop: "618S")
LineDirection.create(line: jerome, direction: 1, first_stop: "415N", last_stop: "401N")
LineDirection.create(line: jerome, direction: 3, first_stop: "401S", last_stop: "415S")
LineDirection.create(line: lenox, direction: 1, first_stop: "227N", last_stop: "224N")
LineDirection.create(line: lenox, direction: 3, first_stop: "224S", last_stop: "227S")
whiteplainsexn = ExpressLineDirection.create(line: whiteplains, direction: 1, first_stop: "222N", last_stop: "213N")
whiteplainsexs = ExpressLineDirection.create(line: whiteplains, direction: 3, first_stop: "213S", last_stop: "222S")
LocalLineDirection.create(line: whiteplains, express_line_direction: whiteplainsexn, direction: 1, first_stop: "220N", last_stop: "214N")
LocalLineDirection.create(line: whiteplains, express_line_direction: whiteplainsexs, direction: 3, first_stop: "214S", last_stop: "220S")
LineDirection.create(line: dyre, direction: 1, first_stop: "505N", last_stop: "501N")
LineDirection.create(line: dyre, direction: 3, first_stop: "501S", last_stop: "505S")
LineDirection.create(line: bwayseventh, direction: 1, first_stop: "119N", last_stop: "101N")
LineDirection.create(line: bwayseventh, direction: 3, first_stop: "101S", last_stop: "119S")
cpwexn = ExpressLineDirection.create(line: cpw, direction: 1, first_stop: "A24N", last_stop: "A15N")
cpwexs = ExpressLineDirection.create(line: cpw, direction: 3, first_stop: "A15S", last_stop: "A24S")
LocalLineDirection.create(line: cpw, express_line_direction: cpwexn, direction: 1, first_stop: "A21N", last_stop: "A16N")
LocalLineDirection.create(line: cpw, express_line_direction: cpwexs, direction: 3, first_stop: "A16S", last_stop: "A21S")
LineDirection.create(line: wh, direction: 1, first_stop: "A07N", last_stop: "A02N")
LineDirection.create(line: wh, direction: 3, first_stop: "A02S", last_stop: "A07S")
LineDirection.create(line: si, direction: 1, first_stop: "S31N", last_stop: "S09N")
LineDirection.create(line: si, direction: 3, first_stop: "S09S", last_stop: "S31S")