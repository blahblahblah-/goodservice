require "csv"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Route.create(name: '1', internal_id: '1', color: 'db2828')
Route.create(name: '2', internal_id: '2', color: 'db2828')
Route.create(name: '3', internal_id: '3', color: 'db2828')
Route.create(name: '4', internal_id: '4', color: '21ba45')
Route.create(name: '5', internal_id: '5', color: '21ba45')
Route.create(name: '6', internal_id: '6', color: '21ba45')
Route.create(name: '6X', internal_id: '6X', color: '21ba45', visible: false)
Route.create(name: '7', internal_id: '7', color: 'a333c8')
Route.create(name: '7X', internal_id: '7X', color: 'a333c8', visible: false)
Route.create(name: 'S', alternate_name: '42 St Shuttle', internal_id: 'GS', color: '767676')
Route.create(name: 'A', internal_id: 'A', color: '2185d0')
Route.create(name: 'B', internal_id: 'B', color: 'f2711c')
Route.create(name: 'C', internal_id: 'C', color: '2185d0')
Route.create(name: 'D', internal_id: 'D', color: 'f2711c')
Route.create(name: 'E', internal_id: 'E', color: '2185d0')
Route.create(name: 'F', internal_id: 'F', color: 'f2711c')
Route.create(name: 'FX', internal_id: 'FX', color: 'f2711c', visible: true)
Route.create(name: 'S', alternate_name: 'Franklin Avenue Shuttle', internal_id: 'FS', color: '767676')
Route.create(name: 'G', internal_id: 'G', color: 'b5cc18')
Route.create(name: 'J', internal_id: 'J', color: 'a5673f')
Route.create(name: 'L', internal_id: 'L', color: 'A0A0A0')
Route.create(name: 'M', internal_id: 'M', color: 'f2711c')
Route.create(name: 'N', internal_id: 'N', color: 'fbbd08', text_color: '000000')
Route.create(name: 'Q', internal_id: 'Q', color: 'fbbd08', text_color: '000000')
Route.create(name: 'R', internal_id: 'R', color: 'fbbd08', text_color: '000000')
Route.create(name: 'S', alternate_name: 'Rockaway Park Shuttle', internal_id: 'H', color: '767676')
Route.create(name: 'W', internal_id: 'W', color: 'fbbd08', text_color: '000000')
Route.create(name: 'Z', internal_id: 'Z', color: 'a5673f')
Route.create(name: 'SIR', internal_id: 'SI', color: '2185d0', visible: false)

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
  s.start_date = Date.today - 1.day
  s.end_date = Date.today + 1.year
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
  t.route_internal_id = "5" if t.route_internal_id == "5X"
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
canarsie = Line.create(name: "14 Street")
flushing = Line.create(name: "Flushing")
nassau = Line.create(name: "Nassau Street")

crosstown = Line.create(name: "Crosstown (Court Sq—Bedford–Nostrand Avs)")
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
jamaica = Line.create(name: "Jamaica (Myrtle Avenue—Crescent Street)")
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
wh = Line.create(name: "Washington Heights (8 Avenue)")
si = Line.create(name: "Staten Island")

canarsie2 = Line.create(name: "Canarsie (Broadway Junction—Rockaway Parkway)")
culver2 = Line.create(name: "Culver (Kings Highway—Coney Island)")
lefferts = Line.create(name: "Fulton Street (Lefferts Boulevard Branch)")
cranberry = Line.create(name: "Cranberry Street (8 Avenue)")
rutgers = Line.create(name: "Rutgers Street (6 Avenue)")
fiftythird = Line.create(name: "53 Street")
sixtythird = Line.create(name: "63 Street")
manhbrbway = Line.create(name: "Manhattan Bridge/Montague Street (Broadway)")
manhbrsixth = Line.create(name: "Manhattan Bridge (6 Avenue)")
wburgbr = Line.create(name: "Williamsburg Bridge")
fiftyninth = Line.create(name: "59 Street")
queensblvd2 = Line.create(name: "Queens Boulevard (Eastern Queens)")
culver3 = Line.create(name: "Culver (Church Avenue—Kings Highway)")
crosstown2 = Line.create(name: "Crosstown (Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts)")
flushing2 = Line.create(name: "Flushing (34 Street–Hudson Yards—Queensboro Plaza)")
canarsie3 = Line.create(name: "Canarsie (Myrtle Avenue—Broadway Junction)")
jamaica2 = Line.create(name: "Jamaica (Crescent Street—Jamaica Center)")
canarsie4 = Line.create(name: "Canarsie (Lorimer Street—Myrtle Avenue)")

LineBorough.create(borough: "Manhattan", line: secav)
LineBorough.create(borough: "Manhattan", line: lex)
LineBorough.create(borough: "Manhattan", line: sixav)
LineBorough.create(borough: "Manhattan", line: bway)
LineBorough.create(borough: "Manhattan", line: sevav)
LineBorough.create(borough: "Manhattan", line: eigav)
LineBorough.create(borough: "Manhattan", line: canarsie)
LineBorough.create(borough: "Brooklyn", line: canarsie)
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

LineBorough.create(borough: "Brooklyn", line: canarsie2)
LineBorough.create(borough: "Brooklyn", line: culver2)
LineBorough.create(borough: "Queens", line: lefferts)
LineBorough.create(borough: "Brooklyn", line: cranberry)
LineBorough.create(borough: "Manhattan", line: cranberry)
LineBorough.create(borough: "Brooklyn", line: rutgers)
LineBorough.create(borough: "Manhattan", line: rutgers)
LineBorough.create(borough: "Queens", line: fiftythird)
LineBorough.create(borough: "Manhattan", line: fiftythird)
LineBorough.create(borough: "Queens", line: sixtythird)
LineBorough.create(borough: "Manhattan", line: sixtythird)
LineBorough.create(borough: "Brooklyn", line: manhbrbway)
LineBorough.create(borough: "Manhattan", line: manhbrbway)
LineBorough.create(borough: "Brooklyn", line: manhbrsixth)
LineBorough.create(borough: "Manhattan", line: manhbrsixth)
LineBorough.create(borough: "Brooklyn", line: wburgbr)
LineBorough.create(borough: "Manhattan", line: wburgbr)
LineBorough.create(borough: "Queens", line: fiftyninth)
LineBorough.create(borough: "Manhattan", line: fiftyninth)
LineBorough.create(borough: "Queens", line: queensblvd2)
LineBorough.create(borough: "Brooklyn", line: culver3)
LineBorough.create(borough: "Brooklyn", line: crosstown2)
LineBorough.create(borough: "Queens", line: flushing2)
LineBorough.create(borough: "Manhattan", line: flushing2)
LineBorough.create(borough: "Brooklyn", line: canarsie3)
LineBorough.create(borough: "Brooklyn", line: jamaica2)
LineBorough.create(borough: "Queens", line: jamaica2)
LineBorough.create(borough: "Brooklyn", line: canarsie4)

LineDirection.create(line: secav, direction: 1, first_stop: "Q03N", last_stop: "Q05N", first_branch_stop: "B08N", first_alternate_branch_stop: "B08N")
LineDirection.create(line: secav, direction: 3, first_stop: "Q05S", last_stop: "Q03S", last_branch_stop: "B08S", last_alternate_branch_stop: "B08S")
lexexn = ExpressLineDirection.create(line: lex, direction: 1, first_stop: "640N", penultimate_stop: "626N", last_stop: "621N")
lexexs = ExpressLineDirection.create(line: lex, direction: 3, first_stop: "621S", penultimate_stop: "635S",  last_stop: "640S")
LocalLineDirection.create(line: lex, express_line_direction: lexexn, direction: 1, first_stop: "639N", last_stop: "622N")
LocalLineDirection.create(line: lex, express_line_direction: lexexs, direction: 3, first_stop: "622S", last_stop: "639S")
sixexn = ExpressLineDirection.create(line: sixav, direction: 1, first_stop: "D21N", penultimate_stop: "D20N", last_stop: "D15N")
sixexs = ExpressLineDirection.create(line: sixav, direction: 3, first_stop: "D15S", penultimate_stop: "D17S", last_stop: "D21S")
LocalLineDirection.create(line: sixav, express_line_direction: sixexn, direction: 1, first_stop: "D19N", last_stop: "D18N")
LocalLineDirection.create(line: sixav, express_line_direction: sixexs, direction: 3, first_stop: "D18S", last_stop: "D19S")
bwayexn = ExpressLineDirection.create(line: bway, direction: 1, first_stop: "R20N", penultimate_stop: "R20N", last_stop: "R14N", first_branch_stop: "R23N", first_alternate_branch_stop: "Q01N", last_branch_stop: "R15N", last_alternate_branch_stop: "R14N")
bwayexs = ExpressLineDirection.create(line: bway, direction: 3, first_stop: "R14S", penultimate_stop: "R17S", last_stop: "R20S", first_branch_stop: "R15S", first_alternate_branch_stop: "R14S", last_branch_stop: "R23S", last_alternate_branch_stop: "Q01S")
LocalLineDirection.create(line: bway, express_line_direction: bwayexn, direction: 1, first_stop: "R22N", last_stop: "R18N")
LocalLineDirection.create(line: bway, express_line_direction: bwayexs, direction: 3, first_stop: "R18S", last_stop: "R22S")
sevexn = ExpressLineDirection.create(line: sevav, direction: 1, first_stop: "137N", penultimate_stop: "123N", last_stop: "120N")
sevexs = ExpressLineDirection.create(line: sevav, direction: 3, first_stop: "120S", penultimate_stop: "132S", last_stop: "137S")
LocalLineDirection.create(line: sevav, express_line_direction: sevexn, direction: 1, first_stop: "136N", last_stop: "121N")
LocalLineDirection.create(line: sevav, express_line_direction: sevexs, direction: 3, first_stop: "121S", last_stop: "136S")
eigexn = ExpressLineDirection.create(line: eigav, direction: 1, first_stop: "A32N", penultimate_stop: "A31N", last_stop: "A24N", last_branch_stop: "A24N", last_alternate_branch_stop: "D14N")
eigexs = ExpressLineDirection.create(line: eigav, direction: 3, first_stop: "A24S", penultimate_stop: "A28S", last_stop: "A32S", first_branch_stop: "A24S", first_alternate_branch_stop: "D14S")
LocalLineDirection.create(line: eigav, express_line_direction: eigexn, direction: 1, first_stop: "A30N", last_stop: "A25N")
LocalLineDirection.create(line: eigav, express_line_direction: eigexs, direction: 3, first_stop: "A25S", last_stop: "A30S")
LineDirection.create(line: canarsie, direction: 1, first_stop: "L08N", last_stop: "L01N", first_branch_stop: "L10N", first_alternate_branch_stop: "L10N")
LineDirection.create(line: canarsie, direction: 3, first_stop: "L01S", last_stop: "L08S", last_branch_stop: "L10S" , last_alternate_branch_stop: "L10S")
flushingexn = ExpressLineDirection.create(line: flushing, direction: 1, first_stop: "712N", penultimate_stop: "707N", last_stop: "701N", first_branch_stop: "718N", first_alternate_branch_stop: "718N", last_branch_stop: "701N", last_alternate_branch_stop: "702N")
flushingexs = ExpressLineDirection.create(line: flushing, direction: 3, first_stop: "701S", penultimate_stop: "712S", last_stop: "718S", first_branch_stop: "701S", first_alternate_branch_stop: "702S", last_branch_stop: "718S", last_alternate_branch_stop: "718S")
LocalLineDirection.create(line: flushing, express_line_direction: flushingexn, direction: 1, first_stop: "716N", last_stop: "705N")
LocalLineDirection.create(line: flushing, express_line_direction: flushingexs, direction: 3, first_stop: "705S", last_stop: "716S")
LineDirection.create(line: nassau, direction: 1, first_stop: "M23N", last_stop: "M19N")
LineDirection.create(line: nassau, direction: 3, first_stop: "M19S", last_stop: "M23S")
LineDirection.create(line: crosstown, direction: 1, first_stop: "G32N", last_stop: "G22N", first_branch_stop: "G33N", first_alternate_branch_stop: "G33N")
LineDirection.create(line: crosstown, direction: 3, first_stop: "G22S", last_stop: "G32S", last_branch_stop: "G33S", last_alternate_branch_stop: "G33S")
LineDirection.create(line: fortysecond, direction: 1, first_stop: "901N", last_stop: "902N")
LineDirection.create(line: fortysecond, direction: 3, first_stop: "902S", last_stop: "901S")
LineDirection.create(line: franklin, direction: 1, first_stop: "S04N", last_stop: "S01N", first_branch_stop: "D26N", first_alternate_branch_stop: "D26N")
LineDirection.create(line: franklin, direction: 3, first_stop: "S01S", last_stop: "S04S", last_branch_stop: "D26S", last_alternate_branch_stop: "D26S")
LineDirection.create(line: rockawaypk, direction: 1, first_stop: "H15N", last_stop: "H12N", last_branch_stop: "H04N", last_alternate_branch_stop: "H04N")
LineDirection.create(line: rockawaypk, direction: 3, first_stop: "H12S", last_stop: "H15S", first_branch_stop: "H04S", first_alternate_branch_stop: "H04S")
LineDirection.create(line: farrockaway, direction: 1, first_stop: "H11N", last_stop: "H06N", last_branch_stop: "A55N", last_alternate_branch_stop: "A55N")
LineDirection.create(line: farrockaway, direction: 3, first_stop: "H06S", last_stop: "H11S", first_branch_stop: "A55S", first_alternate_branch_stop: "A55S")
LineDirection.create(line: astoria, direction: 1, first_stop: "R06N", last_stop: "R01N", first_branch_stop: "R09N", first_alternate_branch_stop: "R09N")
LineDirection.create(line: astoria, direction: 3, first_stop: "R01S", last_stop: "R06S", last_branch_stop: "R09S", last_alternate_branch_stop: "R09S")
queensexn = ExpressLineDirection.create(line: queensblvd, direction: 1, first_stop: "G14N", penultimate_stop: "G14N", last_stop: "G08N", first_branch_stop: "B04N", first_alternate_branch_stop: "G21N")
queensexs = ExpressLineDirection.create(line: queensblvd, direction: 3, first_stop: "G08S", penultimate_stop: "G08S", last_stop: "G14S", last_branch_stop: "B04S", last_alternate_branch_stop: "G21S")
LocalLineDirection.create(line: queensblvd, express_line_direction: queensexn, direction: 1, first_stop: "G20N", last_stop: "G09N")
LocalLineDirection.create(line: queensblvd, express_line_direction: queensexs, direction: 3, first_stop: "G09S", last_stop: "G20S")
fourthexn = ExpressLineDirection.create(line: fourthav, direction: 1, first_stop: "R36N", penultimate_stop: "R36N", last_stop: "R31N", first_branch_stop: "R41N", first_alternate_branch_stop: "R36N")
fourthexs = ExpressLineDirection.create(line: fourthav, direction: 3, first_stop: "R31S", penultimate_stop: "R31S", last_stop: "R36S", last_branch_stop: "R41S", last_alternate_branch_stop: "R36S")
LocalLineDirection.create(line: fourthav, express_line_direction: fourthexn, direction: 1, first_stop: "R35N", last_stop: "R32N")
LocalLineDirection.create(line: fourthav, express_line_direction: fourthexs, direction: 3, first_stop: "R32S", last_stop: "R35S")
brightonexn = ExpressLineDirection.create(line: brighton, direction: 1, first_stop: "D40N", penultimate_stop: "D28N", last_stop: "D24N", first_branch_stop: "D43N", first_alternate_branch_stop: "D40N")
brightonexs = ExpressLineDirection.create(line: brighton, direction: 3, first_stop: "D24S", penultimate_stop: "D35S", last_stop: "D40S", last_branch_stop: "D43S", last_alternate_branch_stop: "D40S")
LocalLineDirection.create(line: brighton, express_line_direction: brightonexn, direction: 1, first_stop: "D41N", last_stop: "D27N")
LocalLineDirection.create(line: brighton, express_line_direction: brightonexs, direction: 3, first_stop: "D27S", last_stop: "D41S")
LineDirection.create(line: westend, direction: 1, first_stop: "B23N", last_stop: "B12N", first_branch_stop: "D43N", first_alternate_branch_stop: "D43N")
LineDirection.create(line: westend, direction: 3, first_stop: "B12S", last_stop: "B23S", last_branch_stop: "D43S", last_alternate_branch_stop: "D43S")
LineDirection.create(line: seabeach, direction: 1, first_stop: "N10N", last_stop: "N02N", first_branch_stop: "D43N", first_alternate_branch_stop: "D43N")
LineDirection.create(line: seabeach, direction: 3, first_stop: "N02S", last_stop: "N10S", last_branch_stop: "D43S", last_alternate_branch_stop: "D43S")
LineDirection.create(line: jamaica, direction: 1, first_stop: "J27N", last_stop: "J24N", first_branch_stop: "M11N", first_alternate_branch_stop: "J27N", last_branch_stop: "J20N", last_alternate_branch_stop: "J20N")
LineDirection.create(line: jamaica, direction: 3, first_stop: "J24S", last_stop: "J27S", first_branch_stop: "J20S", first_alternate_branch_stop: "J20S", last_branch_stop: "M11S", last_alternate_branch_stop: "J27S")
bwaybkexn = ExpressLineDirection.create(line: bwaybk, direction: 1, first_stop: "M16N", penultimate_stop: "M16N", last_stop: "M11N")
bwaybkexs = ExpressLineDirection.create(line: bwaybk, direction: 3, first_stop: "M11S", penultimate_stop: "M11S", last_stop: "M16S")
LocalLineDirection.create(line: bwaybk, express_line_direction: bwaybkexn, direction: 1, first_stop: "M14N", last_stop: "M12N")
LocalLineDirection.create(line: bwaybk, express_line_direction: bwaybkexs, direction: 3, first_stop: "M12S", last_stop: "M14S")
LineDirection.create(line: myrtle, direction: 1, first_stop: "M01N", last_stop: "M10N", last_branch_stop: "M11N", last_alternate_branch_stop: "M11N")
LineDirection.create(line: myrtle, direction: 3, first_stop: "M10S", last_stop: "M01S", first_branch_stop: "M11S", first_alternate_branch_stop: "M11S")
fultonexn = ExpressLineDirection.create(line: fulton, direction: 1, first_stop: "A55N", penultimate_stop: "A48N", last_stop: "A46N", last_branch_stop: "A41N", last_alternate_branch_stop: "A41N")
fultonexs = ExpressLineDirection.create(line: fulton, direction: 3, first_stop: "A42S", penultimate_stop: "A51S", last_stop: "A55S", first_branch_stop: "A41S", first_alternate_branch_stop: "A41S")
LocalLineDirection.create(line: fulton, express_line_direction: fultonexn, direction: 1, first_stop: "A54N", last_stop: "A43N")
LocalLineDirection.create(line: fulton, express_line_direction: fultonexs, direction: 3, first_stop: "A43S", last_stop: "A54S")
concourseexn = ExpressLineDirection.create(line: concourse, direction: 1, first_stop: "D13N", penultimate_stop: "D07N", last_stop: "D01N")
concourseexs = ExpressLineDirection.create(line: concourse, direction: 3, first_stop: "D01S", penultimate_stop: "D07S", last_stop: "D13S")
LocalLineDirection.create(line: concourse, express_line_direction: concourseexn, direction: 1, first_stop: "D12N", last_stop: "D06N")
LocalLineDirection.create(line: concourse, express_line_direction: concourseexs, direction: 3, first_stop: "D06S", last_stop: "D12S")
LineDirection.create(line: culver, direction: 1, first_stop: "F27N", last_stop: "F20N")
LineDirection.create(line: culver, direction: 3, first_stop: "F20S", last_stop: "F27S")
epkwyexn = ExpressLineDirection.create(line: epkwy, direction: 1, first_stop: "239N", penultimate_stop: "239N", last_stop: "234N", first_branch_stop: "250N", first_alternate_branch_stop: "241N", last_branch_stop: "137N", last_alternate_branch_stop: "640N")
epkwyexs = ExpressLineDirection.create(line: epkwy, direction: 3, first_stop: "234S", penultimate_stop: "235S", last_stop: "239S", first_branch_stop: "137S", first_alternate_branch_stop: "640S", last_branch_stop: "250S", last_alternate_branch_stop: "241S")
LocalLineDirection.create(line: epkwy, express_line_direction: epkwyexn, direction: 1, first_stop: "238N", last_stop: "236N")
LocalLineDirection.create(line: epkwy, express_line_direction: epkwyexs, direction: 3, first_stop: "236S", last_stop: "238S")
LineDirection.create(line: nostrand, direction: 1, first_stop: "247N", last_stop: "241N")
LineDirection.create(line: nostrand, direction: 3, first_stop: "241S", last_stop: "247S")
LineDirection.create(line: newlots, direction: 1, first_stop: "257N", last_stop: "251N", last_branch_stop: "250N", last_alternate_branch_stop: "250N")
LineDirection.create(line: newlots, direction: 3, first_stop: "251S", last_stop: "257S", first_branch_stop: "250S", first_alternate_branch_stop: "250S")
pelhamexn = ExpressLineDirection.create(line: pelham, direction: 1, first_stop: "619N", penultimate_stop: "613N", last_stop: "601N", first_branch_stop: "621N", first_alternate_branch_stop: "621N")
pelhamexs = ExpressLineDirection.create(line: pelham, direction: 3, first_stop: "601S", penultimate_stop: "613S", last_stop: "619S", last_branch_stop: "621S", last_alternate_branch_stop: "621S")
LocalLineDirection.create(line: pelham, express_line_direction: pelhamexn, direction: 1, first_stop: "618N", last_stop: "609N")
LocalLineDirection.create(line: pelham, express_line_direction: pelhamexs, direction: 3, first_stop: "609S", last_stop: "618S")
LineDirection.create(line: jerome, direction: 1, first_stop: "415N", last_stop: "401N")
LineDirection.create(line: jerome, direction: 3, first_stop: "401S", last_stop: "415S")
LineDirection.create(line: lenox, direction: 1, first_stop: "227N", last_stop: "224N", first_branch_stop: "120N", first_alternate_branch_stop: "120N", last_branch_stop: "301N", last_alternate_branch_stop: "222N")
LineDirection.create(line: lenox, direction: 3, first_stop: "224S", last_stop: "227S", last_branch_stop: "120S", last_alternate_branch_stop: "120S", first_branch_stop: "301S", first_alternate_branch_stop: "222S")
whiteplainsexn = ExpressLineDirection.create(line: whiteplains, direction: 1, first_stop: "222N", penultimate_stop: "221N", last_stop: "213N")
whiteplainsexs = ExpressLineDirection.create(line: whiteplains, direction: 3, first_stop: "213S", penultimate_stop: "213S", last_stop: "222S")
LocalLineDirection.create(line: whiteplains, express_line_direction: whiteplainsexn, direction: 1, first_stop: "220N", last_stop: "214N", last_branch_stop: "204N", last_alternate_branch_stop: "213N")
LocalLineDirection.create(line: whiteplains, express_line_direction: whiteplainsexs, direction: 3, first_stop: "214S", last_stop: "220S", first_branch_stop: "204S", first_alternate_branch_stop: "213S")
LineDirection.create(line: dyre, direction: 1, first_stop: "505N", last_stop: "501N", first_branch_stop: "213N", first_alternate_branch_stop: "213N")
LineDirection.create(line: dyre, direction: 3, first_stop: "501S", last_stop: "505S", last_branch_stop: "213S", last_alternate_branch_stop: "213S")
LineDirection.create(line: bwayseventh, direction: 1, first_stop: "119N", first_branch_stop: "120N", first_alternate_branch_stop: "120N", last_stop: "101N")
LineDirection.create(line: bwayseventh, direction: 3, first_stop: "101S", last_branch_stop: "120S", last_alternate_branch_stop: "120S", last_stop: "119S")
cpwexn = ExpressLineDirection.create(line: cpw, direction: 1, first_stop: "A24N", last_branch_stop: "A09N", last_alternate_branch_stop: "D13N", penultimate_stop: "A24N", last_stop: "A15N")
cpwexs = ExpressLineDirection.create(line: cpw, direction: 3, first_stop: "A15S", first_branch_stop: "A09S", first_alternate_branch_stop: "D13S", penultimate_stop: "A15S", last_stop: "A24S")
LocalLineDirection.create(line: cpw, express_line_direction: cpwexn, direction: 1, first_stop: "A21N", last_stop: "A16N")
LocalLineDirection.create(line: cpw, express_line_direction: cpwexs, direction: 3, first_stop: "A16S", last_stop: "A21S")
LineDirection.create(line: wh, direction: 1, first_stop: "A07N", first_branch_stop: "A09N", first_alternate_branch_stop: "A09N", last_stop: "A02N")
LineDirection.create(line: wh, direction: 3, first_stop: "A02S", last_branch_stop: "A09S", last_alternate_branch_stop: "A09S", last_stop: "A07S")
LineDirection.create(line: si, direction: 1, first_stop: "S31N", last_stop: "S09N")
LineDirection.create(line: si, direction: 3, first_stop: "S09S", last_stop: "S31S")

LineDirection.create(line: canarsie2, direction: 1, first_stop: "L29N", last_stop: "L24N", last_branch_stop: "L22N", last_alternate_branch_stop: "L22N")
LineDirection.create(line: canarsie2, direction: 3, first_stop: "L24S", last_stop: "L29S", first_branch_stop: "L22S", first_alternate_branch_stop: "L22S")
LineDirection.create(line: culver2, direction: 1, first_stop: "F39N", last_stop: "F38N", first_branch_stop: "D43N", first_alternate_branch_stop: "D43N", last_branch_stop: "F35N", last_alternate_branch_stop: "F35N")
LineDirection.create(line: culver2, direction: 3, first_stop: "F38S", last_stop: "F39S", last_branch_stop: "D43S", last_alternate_branch_stop: "D43S", first_branch_stop: "F35S", first_alternate_branch_stop: "F35S")
LineDirection.create(line: lefferts, direction: 1, first_stop: "A65N", last_branch_stop: "A55N", last_alternate_branch_stop: "A55N", last_stop: "A63N")
LineDirection.create(line: lefferts, direction: 3, first_stop: "A63S", first_branch_stop: "A55S", first_alternate_branch_stop: "A55S", last_stop: "A65S")
LineDirection.create(line: cranberry, direction: 1, first_stop: "A40N", last_stop: "A36N", first_branch_stop: "A41N", first_alternate_branch_stop: "A41N", last_branch_stop: "A33N", last_alternate_branch_stop: "A32N")
LineDirection.create(line: cranberry, direction: 3, first_stop: "A36S", last_stop: "A40S", first_branch_stop: "A33S", first_alternate_branch_stop: "A32S", last_branch_stop: "A41S", last_alternate_branch_stop: "A41S")
LineDirection.create(line: rutgers, direction: 1, first_stop: "F18N", last_stop: "F15N", first_branch_stop: "A41N", first_alternate_branch_stop: "A41N", last_branch_stop: "D21N", last_alternate_branch_stop: "D21N")
LineDirection.create(line: rutgers, direction: 3, first_stop: "F15S", last_stop: "F18S", first_branch_stop: "D21S", first_alternate_branch_stop: "D21S", last_branch_stop: "A41S", last_alternate_branch_stop: "A41S")
LineDirection.create(line: fiftythird, direction: 1, first_stop: "F12N", last_stop: "F09N", first_branch_stop: "D14N", first_alternate_branch_stop: "D15N", last_branch_stop: "G21N", last_alternate_branch_stop: "G21N")
LineDirection.create(line: fiftythird, direction: 3, first_stop: "F09S", last_stop: "F12S", first_branch_stop: "G21S", first_alternate_branch_stop: "G21S", last_branch_stop: "D14S", last_alternate_branch_stop: "D15S")
LineDirection.create(line: sixtythird, direction: 1, first_stop: "B06N", last_stop: "B04N", first_branch_stop: "D15N", first_alternate_branch_stop: "D15N", last_branch_stop: "B04N", last_alternate_branch_stop: "B04N")
LineDirection.create(line: sixtythird, direction: 3, first_stop: "B04S", last_stop: "B06S", first_branch_stop: "B04S", first_alternate_branch_stop: "B04S", last_branch_stop: "D15S", last_alternate_branch_stop: "D15S")
manhbrbwayexn = ExpressLineDirection.create(line: manhbrbway, direction: 1, first_stop: "Q01N", penultimate_stop: "Q01N", last_stop: "Q01N", first_branch_stop: "R31N", first_alternate_branch_stop: "D24N", last_branch_stop: "R23N", last_alternate_branch_stop: "Q01N")
manhbrbwayexs = ExpressLineDirection.create(line: manhbrbway, direction: 3, first_stop: "Q01S", penultimate_stop: "Q01S", last_stop: "Q01S", first_branch_stop: "R23S", first_alternate_branch_stop: "Q01S", last_branch_stop: "R31S", last_alternate_branch_stop: "D24S")
LocalLineDirection.create(line: manhbrbway, express_line_direction: manhbrbwayexn, direction: 1, first_stop: "R26N", last_stop: "R23N")
LocalLineDirection.create(line: manhbrbway, express_line_direction: manhbrbwayexs, direction: 3, first_stop: "R23S", last_stop: "R26S")
LineDirection.create(line: manhbrsixth, direction: 1, first_stop: "D22N", last_stop: "D22N", first_branch_stop: "R31N", first_alternate_branch_stop: "D24N")
LineDirection.create(line: manhbrsixth, direction: 3, first_stop: "D22S", last_stop: "D22S", last_branch_stop: "R31S", last_alternate_branch_stop: "D24S")
LineDirection.create(line: wburgbr, direction: 1, first_stop: "M18N", last_stop: "M16N", first_branch_stop: "D21N", first_alternate_branch_stop: "M19N")
LineDirection.create(line: wburgbr, direction: 3, first_stop: "M16S", last_stop: "M18S", last_branch_stop: "M19S", last_alternate_branch_stop: "D21S")
LineDirection.create(line: fiftyninth, direction: 1, first_stop: "R13N", last_stop: "R11N", first_branch_stop: "R14N", first_alternate_branch_stop: "R14N", last_branch_stop: "R09N", last_alternate_branch_stop: "G21N")
LineDirection.create(line: fiftyninth, direction: 3, first_stop: "R11S", last_stop: "R13S", first_branch_stop: "R09S", first_alternate_branch_stop: "G21S", last_branch_stop: "R14S", last_alternate_branch_stop: "R14S")
queensblvd2exn = ExpressLineDirection.create(line: queensblvd2, direction: 1, first_stop: "G08N", penultimate_stop: "G08N", last_stop: "F06N", last_branch_stop: "F01N", last_alternate_branch_stop: "G05N")
queensblvd2exs = ExpressLineDirection.create(line: queensblvd2, direction: 3, first_stop: "F06S", penultimate_stop: "F06S", last_stop: "G08S", first_branch_stop: "F01S", first_alternate_branch_stop: "G05S")
LocalLineDirection.create(line: queensblvd2, express_line_direction: queensblvd2exn, direction: 1, first_stop: "F07N", last_stop: "F05N")
LocalLineDirection.create(line: queensblvd2, express_line_direction: queensblvd2exs, direction: 3, first_stop: "F05S", last_stop: "F07S")
LineDirection.create(line: culver3, direction: 1, first_stop: "F35N", last_stop: "F29N", last_branch_stop: "F27N", last_alternate_branch_stop: "F27N")
LineDirection.create(line: culver3, direction: 3, first_stop: "F29S", last_stop: "F35S", first_branch_stop: "F27S", first_alternate_branch_stop: "F27S")
LineDirection.create(line: crosstown2, direction: 1, first_stop: "G36N", last_stop: "G34N", first_branch_stop: "A42N", first_alternate_branch_stop: "A42N", last_branch_stop: "G33N", last_alternate_branch_stop: "G33N")
LineDirection.create(line: crosstown2, direction: 3, first_stop: "G34S", last_stop: "G36S", first_branch_stop: "G33S", first_alternate_branch_stop: "G33S", last_branch_stop: "A42S", last_alternate_branch_stop: "A42S")
LineDirection.create(line: flushing2, direction: 1, first_stop: "726N", last_stop: "719N", last_branch_stop: "718N", last_alternate_branch_stop: "718N")
LineDirection.create(line: flushing2, direction: 3, first_stop: "719S", last_stop: "726S", first_branch_stop: "718S", first_alternate_branch_stop: "718S")
LineDirection.create(line: canarsie3, direction: 1, first_stop: "L21N", last_stop: "L19N", first_branch_stop: "L22N", first_alternate_branch_stop: "L22N", last_branch_stop: "L17N", last_alternate_branch_stop: "L17N")
LineDirection.create(line: canarsie3, direction: 3, first_stop: "L19S", last_stop: "L21S", first_branch_stop: "L17S", first_alternate_branch_stop: "L17S", last_branch_stop: "L22S", last_alternate_branch_stop: "L22S")
LineDirection.create(line: jamaica2, direction: 1, first_stop: "J15N", last_stop: "J15N", first_branch_stop: "J20N", first_alternate_branch_stop: "J20N", last_branch_stop: "G05N", last_alternate_branch_stop: "G05N")
LineDirection.create(line: jamaica2, direction: 3, first_stop: "J15S", last_stop: "J15S", first_branch_stop: "G05S", first_alternate_branch_stop: "G05S", last_branch_stop: "J20S", last_alternate_branch_stop: "J20S")
LineDirection.create(line: canarsie4, direction: 1, first_stop: "L16N", last_stop: "L11N", first_branch_stop: "L17N", first_alternate_branch_stop: "L17N", last_branch_stop: "L10N", last_alternate_branch_stop: "L10N")
LineDirection.create(line: canarsie4, direction: 3, first_stop: "L11S", last_stop: "L16S", last_branch_stop: "L17S", last_alternate_branch_stop: "L17S", first_branch_stop: "L10S", first_alternate_branch_stop: "L10S")
