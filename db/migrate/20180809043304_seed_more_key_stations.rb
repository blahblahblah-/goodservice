class SeedMoreKeyStations < ActiveRecord::Migration[5.2]
  def change
    KeyStation.destroy_all
    LineBorough.destroy_all
    LineDirection.destroy_all
    Line.destroy_all

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
    jnassau = LineDirection.create(direction: "Uptown", line: nassau)
    bnassau = LineDirection.create(direction: "Downtown", line: nassau)

    qcrosstown = LineDirection.create(direction: "Queens", line: crosstown)
    bcrosstown = LineDirection.create(direction: "Brooklyn", line: crosstown)
    wfortysecond = LineDirection.create(direction: "West", line: fortysecond)
    efortysecond = LineDirection.create(direction: "East", line: fortysecond)
    nfranklin = LineDirection.create(direction: "North", line: franklin)
    sfranklin = LineDirection.create(direction: "South", line: franklin)
    nrockawaypk = LineDirection.create(direction: "Broad Channel", line: rockawaypk)
    srockawaypk = LineDirection.create(direction: "Rockaway Park", line: rockawaypk)
    nfarrockaway = LineDirection.create(direction: "Broad Channel", line: farrockaway)
    sfarrockaway = LineDirection.create(direction: "Far Rockaway", line: farrockaway)
    nastoria = LineDirection.create(direction: "North", line: astoria)
    sastoria = LineDirection.create(direction: "South", line: astoria)
    equeensblvd = LineDirection.create(direction: "East", line: queensblvd)
    wqueensblvd = LineDirection.create(direction: "West", line: queensblvd)
    nfourthav = LineDirection.create(direction: "North", line: fourthav)
    sfourthav = LineDirection.create(direction: "South", line: fourthav)
    nbrighton = LineDirection.create(direction: "North", line: brighton)
    sbrighton = LineDirection.create(direction: "South", line: brighton)
    nwestend = LineDirection.create(direction: "North", line: westend)
    swestend = LineDirection.create(direction: "South", line: westend)
    nseabeach = LineDirection.create(direction: "North", line: seabeach)
    sseabeach = LineDirection.create(direction: "South", line: seabeach)
    njamaica = LineDirection.create(direction: "North", line: jamaica)
    sjamaica = LineDirection.create(direction: "South", line: jamaica)
    nbwaybk = LineDirection.create(direction: "North", line: bwaybk)
    sbwaybk = LineDirection.create(direction: "South", line: bwaybk)
    nmyrtle = LineDirection.create(direction: "North", line: myrtle)
    smyrtle = LineDirection.create(direction: "South", line: myrtle)
    wfulton = LineDirection.create(direction: "West", line: fulton)
    efulton = LineDirection.create(direction: "East", line: fulton)
    uconcourse = LineDirection.create(direction: "Uptown", line: concourse)
    dconcourse = LineDirection.create(direction: "Downtown", line: concourse)
    nculver = LineDirection.create(direction: "North", line: culver)
    sculver = LineDirection.create(direction: "South", line: culver)
    wepkwy = LineDirection.create(direction: "West", line: epkwy)
    eepkwy = LineDirection.create(direction: "East", line: epkwy)
    nnostrand = LineDirection.create(direction: "North", line: nostrand)
    snostrand = LineDirection.create(direction: "South", line: nostrand)
    wnewlots = LineDirection.create(direction: "West", line: newlots)
    enewlots = LineDirection.create(direction: "South", line: newlots)
    upelham = LineDirection.create(direction: "Uptown", line: pelham)
    dpelham = LineDirection.create(direction: "Downtown", line: pelham)
    ujerome = LineDirection.create(direction: "Uptown", line: jerome)
    djerome = LineDirection.create(direction: "Downtown", line: jerome)
    ulenox = LineDirection.create(direction: "Uptown", line: lenox)
    dlenox = LineDirection.create(direction: "Downtown", line: lenox)
    uwhiteplains = LineDirection.create(direction: "Uptown", line: whiteplains)
    dwhiteplains = LineDirection.create(direction: "Downtown", line: whiteplains)
    udyre = LineDirection.create(direction: "Uptown", line: dyre)
    ddyre = LineDirection.create(direction: "Downtown", line: dyre)
    ubwayseventh = LineDirection.create(direction: "Uptown", line: bwayseventh)
    dbwayseventh = LineDirection.create(direction: "Downtown", line: bwayseventh)
    ucpw = LineDirection.create(direction: "Uptown", line: cpw)
    dcpw = LineDirection.create(direction: "Downtown", line: cpw)
    uwh = LineDirection.create(direction: "Uptown", line: wh)
    dwh = LineDirection.create(direction: "Downtown", line: wh)
    nsi = LineDirection.create(direction: "North", line: si)
    ssi = LineDirection.create(direction: "South", line: si)

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
    KeyStation.create(line_direction: nbwaybk, stop_internal_id: "M16N") # Marcy Av
    KeyStation.create(line_direction: sbwaybk, stop_internal_id: "M16S") # Marcy Av

    KeyStation.create(line_direction: qcrosstown, stop_internal_id: "G31N") # Flushing Av
    KeyStation.create(line_direction: bcrosstown, stop_internal_id: "G31S")
    KeyStation.create(line_direction: wfortysecond, stop_internal_id: "901N") # Grand Central
    KeyStation.create(line_direction: efortysecond, stop_internal_id: "902S") # Times Sq
    KeyStation.create(line_direction: nfranklin, stop_internal_id: "S04N") # Botanic Garden
    KeyStation.create(line_direction: sfranklin, stop_internal_id: "S01S") # Franklin Av
    KeyStation.create(line_direction: nrockawaypk, stop_internal_id: "H12N") # B 90 St
    KeyStation.create(line_direction: srockawaypk, stop_internal_id: "H14N") # B 105 St
    KeyStation.create(line_direction: nfarrockaway, stop_internal_id: "H10N") # B 67 St
    KeyStation.create(line_direction: sfarrockaway, stop_internal_id: "H10S") # B 25 St
    KeyStation.create(line_direction: nastoria, stop_internal_id: "R09N") # Queensboro Plz
    KeyStation.create(line_direction: sastoria, stop_internal_id: "R06S") # 36 Av
    KeyStation.create(line_direction: equeensblvd, stop_internal_id: "G14N") # Roosevelt Av
    KeyStation.create(line_direction: wqueensblvd, stop_internal_id: "G14S") # Roosevelt Av
    KeyStation.create(line_direction: equeensblvd, stop_internal_id: "F06N") # Union Tpke
    KeyStation.create(line_direction: wqueensblvd, stop_internal_id: "F06S") # Union Tpke
    KeyStation.create(line_direction: nfourthav, stop_internal_id: "R31N") # Atlantic Av
    KeyStation.create(line_direction: sfourthav, stop_internal_id: "R31S")
    KeyStation.create(line_direction: nfourthav, stop_internal_id: "R36N") # 36 St
    KeyStation.create(line_direction: sfourthav, stop_internal_id: "R36S")
    KeyStation.create(line_direction: nbrighton, stop_internal_id: "D27N") # Parkside Av
    KeyStation.create(line_direction: sbrighton, stop_internal_id: "D27S")
    KeyStation.create(line_direction: nbrighton, stop_internal_id: "D35N") # Kings Hwy
    KeyStation.create(line_direction: sbrighton, stop_internal_id: "D35S")
    KeyStation.create(line_direction: nwestend, stop_internal_id: "B16N") # 62 St
    KeyStation.create(line_direction: swestend, stop_internal_id: "B16S")
    KeyStation.create(line_direction: nseabeach, stop_internal_id: "N07N") # Bay Pkwy
    KeyStation.create(line_direction: sseabeach, stop_internal_id: "N07S")
    KeyStation.create(line_direction: njamaica, stop_internal_id: "J27N") # Bway Jct
    KeyStation.create(line_direction: sjamaica, stop_internal_id: "J27S")
    KeyStation.create(line_direction: njamaica, stop_internal_id: "J15N") # Woodhaven Blvd
    KeyStation.create(line_direction: sjamaica, stop_internal_id: "J15S")
    KeyStation.create(line_direction: jnassau, stop_internal_id: "M19N") # Bowery
    KeyStation.create(line_direction: bnassau, stop_internal_id: "M19S")
    KeyStation.create(line_direction: nmyrtle, stop_internal_id: "M04N") # Fresh Pond Rd
    KeyStation.create(line_direction: smyrtle, stop_internal_id: "M10S") # Central Av
    KeyStation.create(line_direction: wfulton, stop_internal_id: "A46N") # Nostrand Av
    KeyStation.create(line_direction: efulton, stop_internal_id: "A46S")
    KeyStation.create(line_direction: wfulton, stop_internal_id: "A51N") # Bway Jct
    KeyStation.create(line_direction: efulton, stop_internal_id: "A51S")
    KeyStation.create(line_direction: wfulton, stop_internal_id: "A61N") # Rockaway Blvd
    KeyStation.create(line_direction: efulton, stop_internal_id: "A61S")
    KeyStation.create(line_direction: uconcourse, stop_internal_id: "D05N") # Fordham Rd
    KeyStation.create(line_direction: dconcourse, stop_internal_id: "D11S") # 161 St - Yankee Stadium
    KeyStation.create(line_direction: nculver, stop_internal_id: "F20N") # Bergen St
    KeyStation.create(line_direction: sculver, stop_internal_id: "F20S")
    KeyStation.create(line_direction: nculver, stop_internal_id: "F32N") # Bay Pkwy
    KeyStation.create(line_direction: sculver, stop_internal_id: "F32S")
    KeyStation.create(line_direction: wepkwy, stop_internal_id: "235N") # Atlantic Av
    KeyStation.create(line_direction: eepkwy, stop_internal_id: "235S")
    KeyStation.create(line_direction: nnostrand, stop_internal_id: "241N") # President St
    KeyStation.create(line_direction: snostrand, stop_internal_id: "246S") # Newkirk Av
    KeyStation.create(line_direction: wnewlots, stop_internal_id: "251N") # Sutter Av-Rutland Rd
    KeyStation.create(line_direction: enewlots, stop_internal_id: "256S") # Van Siclen Av
    KeyStation.create(line_direction: upelham, stop_internal_id: "608N") # Parkchester
    KeyStation.create(line_direction: dpelham, stop_internal_id: "608S")
    KeyStation.create(line_direction: ujerome, stop_internal_id: "402N") # Mosholu Pkwy
    KeyStation.create(line_direction: djerome, stop_internal_id: "415S") # 149 St–Grand Concourse
    KeyStation.create(line_direction: ulenox, stop_internal_id: "224N") # 135 St
    KeyStation.create(line_direction: dlenox, stop_internal_id: "227S") # Central Pk N
    KeyStation.create(line_direction: uwhiteplains, stop_internal_id: "214N") # West Farms Sq
    KeyStation.create(line_direction: dwhiteplains, stop_internal_id: "214S")
    KeyStation.create(line_direction: uwhiteplains, stop_internal_id: "204N") # Nereid Av
    KeyStation.create(line_direction: dwhiteplains, stop_internal_id: "212S") # Bronx Pk E
    KeyStation.create(line_direction: udyre, stop_internal_id: "502N") # Baychester Av
    KeyStation.create(line_direction: ddyre, stop_internal_id: "505S") # Morris Park
    KeyStation.create(line_direction: ubwayseventh, stop_internal_id: "115N") # 137 St–City COllege
    KeyStation.create(line_direction: dbwayseventh, stop_internal_id: "115S")
    KeyStation.create(line_direction: ubwayseventh, stop_internal_id: "109N") # Dyckman St
    KeyStation.create(line_direction: dbwayseventh, stop_internal_id: "109S")
    KeyStation.create(line_direction: ucpw, stop_internal_id: "A21N") # 81 St–Natural History
    KeyStation.create(line_direction: dcpw, stop_internal_id: "A21S")
    KeyStation.create(line_direction: uwh, stop_internal_id: "A07N") # 175 St,
    KeyStation.create(line_direction: dwh, stop_internal_id: "A07S")
    KeyStation.create(line_direction: nsi, stop_internal_id: "S22N") # New Dorp
    KeyStation.create(line_direction: ssi, stop_internal_id: "S22S")
  end
end
