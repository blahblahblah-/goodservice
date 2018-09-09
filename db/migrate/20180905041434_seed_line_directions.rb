class SeedLineDirections < ActiveRecord::Migration[5.2]
  def change
    secav = Line.find_by!(name: "2 Avenue")
    LineDirection.create(line: secav, direction: 1, first_stop: "Q03N", last_stop: "Q05N")
    LineDirection.create(line: secav, direction: 3, first_stop: "Q05S", last_stop: "Q03S")

    lex = Line.find_by!(name: "Lexington Avenue")
    lexexn = ExpressLineDirection.create(line: lex, direction: 1, first_stop: "420N", last_stop: "621N")
    lexexs = ExpressLineDirection.create(line: lex, direction: 3, first_stop: "621S", last_stop: "420S")
    LocalLineDirection.create(line: lex, express_line_direction: lexexn, direction: 1, first_stop: "639N", last_stop: "622N")
    LocalLineDirection.create(line: lex, express_line_direction: lexexs, direction: 3, first_stop: "622S", last_stop: "639S")

    sixav = Line.find_by!(name: "6 Avenue")
    sixexn = ExpressLineDirection.create(line: sixav, direction: 1, first_stop: "D20N", last_stop: "D15N")
    sixexs = ExpressLineDirection.create(line: sixav, direction: 3, first_stop: "D15S", last_stop: "D20S")
    LocalLineDirection.create(line: sixav, express_line_direction: sixexn, direction: 1, first_stop: "D19N", last_stop: "D19N")
    LocalLineDirection.create(line: sixav, express_line_direction: sixexs, direction: 3, first_stop: "D19S", last_stop: "D19S")

    bway = Line.find_by!(name: "Broadway")
    bwayexn = ExpressLineDirection.create(line: bway, direction: 1, first_stop: "R20N", last_stop: "R14N")
    bwayexs = ExpressLineDirection.create(line: bway, direction: 3, first_stop: "R14S", last_stop: "R20S")
    LocalLineDirection.create(line: bway, express_line_direction: bwayexn, direction: 1, first_stop: "R22N", last_stop: "R18N")
    LocalLineDirection.create(line: bway, express_line_direction: bwayexs, direction: 3, first_stop: "R18S", last_stop: "R22S")

    sevav = Line.find_by!(name: "7 Avenue")
    sevexn = ExpressLineDirection.create(line: sevav, direction: 1, first_stop: "137N", last_stop: "120N")
    sevexs = ExpressLineDirection.create(line: sevav, direction: 3, first_stop: "120S", last_stop: "137S")
    LocalLineDirection.create(line: sevav, express_line_direction: sevexn, direction: 1, first_stop: "136N", last_stop: "121N")
    LocalLineDirection.create(line: sevav, express_line_direction: sevexs, direction: 3, first_stop: "121S", last_stop: "136S")

    eigav = Line.find_by!(name: "8 Avenue")
    eigexn = ExpressLineDirection.create(line: eigav, direction: 1, first_stop: "A32N", last_stop: "A27N")
    eigexs = ExpressLineDirection.create(line: eigav, direction: 3, first_stop: "A27S", last_stop: "A32S")
    LocalLineDirection.create(line: eigav, express_line_direction: eigexn, direction: 1, first_stop: "A30N", last_stop: "A30N")
    LocalLineDirection.create(line: eigav, express_line_direction: eigexs, direction: 3, first_stop: "A30S", last_stop: "A30S")

    canarsie = Line.find_by!(name: "14 Street–Canarsie")
    LineDirection.create(line: canarsie, direction: 1, first_stop: "L17N", last_stop: "L01N")
    LineDirection.create(line: canarsie, direction: 3, first_stop: "L01S", last_stop: "L17S")

    flushing = Line.find_by!(name: "Flushing")
    flushingexn = ExpressLineDirection.create(line: flushing, direction: 1, first_stop: "726N", last_stop: "701N")
    flushingexs = ExpressLineDirection.create(line: flushing, direction: 3, first_stop: "701S", last_stop: "726S")
    LocalLineDirection.create(line: flushing, express_line_direction: flushingexn, direction: 1, first_stop: "716N", last_stop: "705N")
    LocalLineDirection.create(line: flushing, express_line_direction: flushingexs, direction: 3, first_stop: "705S", last_stop: "716S")

    nassau = Line.find_by!(name: "Nassau Street")
    LineDirection.create(line: nassau, direction: 1, first_stop: "M23N", last_stop: "M19N")
    LineDirection.create(line: nassau, direction: 3, first_stop: "M19S", last_stop: "M23S")

    crosstown = Line.find_by!(name: "Crosstown")
    LineDirection.create(line: crosstown, direction: 1, first_stop: "G36N", last_stop: "G22N")
    LineDirection.create(line: crosstown, direction: 3, first_stop: "G22S", last_stop: "G36S")

    fortysecond = Line.find_by!(name: "42 Street")
    LineDirection.create(line: fortysecond, direction: 1, first_stop: "902N", last_stop: "901N")
    LineDirection.create(line: fortysecond, direction: 3, first_stop: "901S", last_stop: "902S")

    franklin = Line.find_by!(name: "Franklin Avenue")
    LineDirection.create(line: franklin, direction: 1, first_stop: "S04N", last_stop: "S01N")
    LineDirection.create(line: franklin, direction: 3, first_stop: "S01S", last_stop: "S04S")

    rockawaypk = Line.find_by!(name: "Rockaway (Rockaway Park Branch)")
    LineDirection.create(line: rockawaypk, direction: 1, first_stop: "H15N", last_stop: "H12N")
    LineDirection.create(line: rockawaypk, direction: 3, first_stop: "H12S", last_stop: "H15S")

    farrockaway = Line.find_by!(name: "Rockaway (Far Rockaway Branch)")
    LineDirection.create(line: farrockaway, direction: 1, first_stop: "H11N", last_stop: "H06N")
    LineDirection.create(line: farrockaway, direction: 3, first_stop: "H06S", last_stop: "H11S")

    astoria = Line.find_by!(name: "Astoria")
    LineDirection.create(line: astoria, direction: 1, first_stop: "R06N", last_stop: "R01N")
    LineDirection.create(line: astoria, direction: 3, first_stop: "R01S", last_stop: "R06S")

    queensblvd = Line.find_by!(name: "Queens Boulevard")
    queensexn = ExpressLineDirection.create(line: queensblvd, direction: 1, first_stop: "G14N", last_stop: "F06N")
    queensexs = ExpressLineDirection.create(line: queensblvd, direction: 3, first_stop: "F06S", last_stop: "G14S")
    LocalLineDirection.create(line: queensblvd, express_line_direction: queensexn, direction: 1, first_stop: "G20N", last_stop: "G09N")
    LocalLineDirection.create(line: queensblvd, express_line_direction: queensexs, direction: 3, first_stop: "G09S", last_stop: "G20S")

    fourthav = Line.find_by!(name: "4 Avenue")
    fourthexn = ExpressLineDirection.create(line: fourthav, direction: 1, first_stop: "R36N", last_stop: "R31N")
    fourthexs = ExpressLineDirection.create(line: fourthav, direction: 3, first_stop: "R31S", last_stop: "R36S")
    LocalLineDirection.create(line: fourthav, express_line_direction: fourthexn, direction: 1, first_stop: "R35N", last_stop: "R32N")
    LocalLineDirection.create(line: fourthav, express_line_direction: fourthexs, direction: 3, first_stop: "R32S", last_stop: "R35S")

    brighton = Line.find_by!(name: "Brighton")
    brightonexn = ExpressLineDirection.create(line: brighton, direction: 1, first_stop: "D40N", last_stop: "D24N")
    brightonexs = ExpressLineDirection.create(line: brighton, direction: 3, first_stop: "D24S", last_stop: "D40S")
    LocalLineDirection.create(line: brighton, express_line_direction: brightonexn, direction: 1, first_stop: "D41N", last_stop: "D27N")
    LocalLineDirection.create(line: brighton, express_line_direction: brightonexs, direction: 3, first_stop: "D27S", last_stop: "D41S")

    westend = Line.find_by!(name: "West End")
    LineDirection.create(line: westend, direction: 1, first_stop: "B23N", last_stop: "B12N")
    LineDirection.create(line: westend, direction: 3, first_stop: "B12S", last_stop: "B23S")

    seabeach = Line.find_by!(name: "Sea Beach")
    LineDirection.create(line: seabeach, direction: 1, first_stop: "N10N", last_stop: "N02N")
    LineDirection.create(line: seabeach, direction: 3, first_stop: "N02S", last_stop: "N10S")

    jamaica = Line.find_by!(name: "Jamaica")
    LineDirection.create(line: jamaica, direction: 1, first_stop: "J27N", last_stop: "J15N")
    LineDirection.create(line: jamaica, direction: 3, first_stop: "J15S", last_stop: "J27S")

    bwaybk = Line.find_by!(name: "Broadway (Brooklyn)")
    bwaybkexn = ExpressLineDirection.create(line: bwaybk, direction: 1, first_stop: "M16N", last_stop: "M11N")
    bwaybkexs = ExpressLineDirection.create(line: bwaybk, direction: 3, first_stop: "M11S", last_stop: "M16S")
    LocalLineDirection.create(line: bwaybk, express_line_direction: bwaybkexn, direction: 1, first_stop: "M14N", last_stop: "M12N")
    LocalLineDirection.create(line: bwaybk, express_line_direction: bwaybkexs, direction: 3, first_stop: "M12S", last_stop: "M14S")

    myrtle = Line.find_by!(name: "Myrtle Avenue")
    LineDirection.create(line: myrtle, direction: 1, first_stop: "M10N", last_stop: "M01N")
    LineDirection.create(line: myrtle, direction: 3, first_stop: "M01S", last_stop: "M10S")

    fulton = Line.find_by!(name: "Fulton Street")
    fultonexn = ExpressLineDirection.create(line: fulton, direction: 1, first_stop: "A55N", last_stop: "A46N")
    fultonexs = ExpressLineDirection.create(line: fulton, direction: 3, first_stop: "A46S", last_stop: "A55S")
    LocalLineDirection.create(line: fulton, express_line_direction: fultonexn, direction: 1, first_stop: "A54N", last_stop: "A43N")
    LocalLineDirection.create(line: fulton, express_line_direction: fultonexs, direction: 3, first_stop: "A43S", last_stop: "A54S")

    concourse = Line.find_by!(name: "Concourse")
    concourseexn = ExpressLineDirection.create(line: concourse, direction: 1, first_stop: "D13N", last_stop: "D01N")
    concourseexs = ExpressLineDirection.create(line: concourse, direction: 3, first_stop: "D01S", last_stop: "D13S")
    LocalLineDirection.create(line: concourse, express_line_direction: concourseexn, direction: 1, first_stop: "D12N", last_stop: "D06N")
    LocalLineDirection.create(line: concourse, express_line_direction: concourseexs, direction: 3, first_stop: "D06S", last_stop: "D12S")

    culver = Line.find_by!(name: "Culver")
    LineDirection.create(line: culver, direction: 1, first_stop: "F27N", last_stop: "F20N")
    LineDirection.create(line: culver, direction: 3, first_stop: "F20S", last_stop: "F27S")

    epkwy = Line.find_by!(name: "Eastern Parkway")
    epkwyexn = ExpressLineDirection.create(line: epkwy, direction: 1, first_stop: "239N", last_stop: "234N")
    epkwyexs = ExpressLineDirection.create(line: epkwy, direction: 3, first_stop: "234S", last_stop: "239S")
    LocalLineDirection.create(line: epkwy, express_line_direction: epkwyexn, direction: 1, first_stop: "238N", last_stop: "236N")
    LocalLineDirection.create(line: epkwy, express_line_direction: epkwyexs, direction: 3, first_stop: "236S", last_stop: "238S")

    nostrand = Line.find_by!(name: "Nostrand Avenue")
    LineDirection.create(line: nostrand, direction: 1, first_stop: "247N", last_stop: "241N")
    LineDirection.create(line: nostrand, direction: 3, first_stop: "241S", last_stop: "247S")

    newlots = Line.find_by!(name: "New Lots")
    LineDirection.create(line: newlots, direction: 1, first_stop: "257N", last_stop: "251N")
    LineDirection.create(line: newlots, direction: 3, first_stop: "251S", last_stop: "257S")

    pelham = Line.find_by!(name: "Pelham")
    pelhamexn = ExpressLineDirection.create(line: pelham, direction: 1, first_stop: "619N", last_stop: "601N")
    pelhamexs = ExpressLineDirection.create(line: pelham, direction: 3, first_stop: "601S", last_stop: "619S")
    LocalLineDirection.create(line: pelham, express_line_direction: pelhamexn, direction: 1, first_stop: "618N", last_stop: "609N")
    LocalLineDirection.create(line: pelham, express_line_direction: pelhamexs, direction: 3, first_stop: "609S", last_stop: "618S")

    jerome = Line.find_by!(name: "Jerome Avenue")
    LineDirection.create(line: jerome, direction: 1, first_stop: "415N", last_stop: "401N")
    LineDirection.create(line: jerome, direction: 3, first_stop: "401S", last_stop: "415S")

    lenox = Line.find_by!(name: "Lenox Avenue")
    LineDirection.create(line: lenox, direction: 1, first_stop: "227N", last_stop: "224N")
    LineDirection.create(line: lenox, direction: 3, first_stop: "224S", last_stop: "227S")

    whiteplains = Line.find_by!(name: "White Plains Road")
    whiteplainsexn = ExpressLineDirection.create(line: whiteplains, direction: 1, first_stop: "222N", last_stop: "213N")
    whiteplainsexs = ExpressLineDirection.create(line: whiteplains, direction: 3, first_stop: "213S", last_stop: "222S")
    LocalLineDirection.create(line: whiteplains, express_line_direction: whiteplainsexn, direction: 1, first_stop: "220N", last_stop: "214N")
    LocalLineDirection.create(line: whiteplains, express_line_direction: whiteplainsexs, direction: 3, first_stop: "214S", last_stop: "220S")

    dyre = Line.find_by!(name: "Dyre Avenue")
    LineDirection.create(line: dyre, direction: 1, first_stop: "505N", last_stop: "501N")
    LineDirection.create(line: dyre, direction: 3, first_stop: "501S", last_stop: "505S")

    bwayseventh = Line.find_by!(name: "Broadway–7 Avenue")
    LineDirection.create(line: bwayseventh, direction: 1, first_stop: "119N", last_stop: "101N")
    LineDirection.create(line: bwayseventh, direction: 3, first_stop: "101S", last_stop: "119S")

    cpw = Line.find_by!(name: "Central Park West")
    cpwexn = ExpressLineDirection.create(line: cpw, direction: 1, first_stop: "A24N", last_stop: "A15N")
    cpwexs = ExpressLineDirection.create(line: cpw, direction: 3, first_stop: "A15S", last_stop: "A24S")
    LocalLineDirection.create(line: cpw, express_line_direction: cpwexn, direction: 1, first_stop: "A21N", last_stop: "A16N")
    LocalLineDirection.create(line: cpw, express_line_direction: cpwexs, direction: 3, first_stop: "A16S", last_stop: "A21S")

    wh = Line.find_by!(name: "8 Avenue (Washington Heights)")
    LineDirection.create(line: wh, direction: 1, first_stop: "A07N", last_stop: "A02N")
    LineDirection.create(line: wh, direction: 3, first_stop: "A02S", last_stop: "A07S")

    si = Line.find_by!(name: "Staten Island")
    LineDirection.create(line: si, direction: 1, first_stop: "S31N", last_stop: "S09N")
    LineDirection.create(line: si, direction: 3, first_stop: "S09S", last_stop: "S31S")
  end
end
