class BreakUpCrosstownFlushingCanarsieJamaicaLines < ActiveRecord::Migration[5.2]
  def change
    crosstown = Line.find_by(name: "Crosstown")
    crosstown.name = "Crosstown (Court Sq—Bedford–Nostrand Avs)"

    crosstownn = crosstown.line_directions.find_by(direction: 1)
    crosstownn.alternate_name = "Court Sq—Bedford–Nostrand"
    crosstownn.first_stop = "G32N" # Myrtle–Willoughby Avs
    crosstownn.first_branch_stop = "G33N" # Bedford–Nostrand Avs
    crosstownn.first_alternate_branch_stop = "G33N"
    crosstownn.save!

    crosstowns = crosstown.line_directions.find_by(direction: 3)
    crosstowns.alternate_name = "Court Sq—Bedford–Nostrand"
    crosstowns.last_stop = "G32S"
    crosstowns.last_branch_stop = "G33S" # Bedford-Nostrand Avs
    crosstowns.last_alternate_branch_stop = "G33S"
    crosstowns.save!

    crosstown.save!

    crosstown2 = Line.create(name: "Crosstown (Bedford–Nostrand Avs—Hoyt–Schermerhorn Sts)", is_visible: true)
    LineBorough.create(borough: "Brooklyn", line: crosstown2)
    LineDirection.create(
      line: crosstown2, direction: 1,
      first_stop: "G36N", # Fulton St
      last_stop: "G34N", # Classon Av
      first_branch_stop: "A42N", # Hoyt–Schermerhorn Sts
      first_alternate_branch_stop: "A42N",
      last_branch_stop: "G33N", # Bedford-Nostrand Avs
      last_alternate_branch_stop: "G33N",
      alternate_name: "Bedford–Nostrand—Hoyt–Schermerhorn"
    )
    LineDirection.create(
      line: crosstown2, direction: 3,
      first_stop: "G34S", # Classon Av
      last_stop: "G36S", # Fulton St
      first_branch_stop: "G33S", # Bedford-Nostrand Avs
      first_alternate_branch_stop: "G33S",
      last_branch_stop: "A42S", # Hoyt–Schermerhorn Sts
      last_alternate_branch_stop: "A42S",
      alternate_name: "Bedford–Nostrand—Hoyt–Schermerhorn"
    )

    flushing = Line.find_by(name: "Flushing")

    flushingn = flushing.line_directions.find_by(direction: 1, type: "ExpressLineDirection")
    flushingn.first_stop = "712N" # 61 St—Woodside
    flushingn.first_branch_stop = "718N" # Queensboro Plz
    flushingn.first_alternate_branch_stop = "718N"
    flushingn.save!

    flushings = flushing.line_directions.find_by(direction: 3, type: "ExpressLineDirection")
    flushings.last_stop = "712S" # 61 St—Woodside
    flushings.last_branch_stop = "718S" # Queensboro Plz
    flushings.last_alternate_branch_stop = "718S"
    flushings.save!

    flushing.line_boroughs.find_by(borough: "Manhattan").destroy

    flushing.save!

    flushing2 = Line.create(name: "Flushing (34 Street–Hudson Yards—Queensboro Plaza)", is_visible: true)
    LineBorough.create(borough: "Queens", line: flushing2)
    LineBorough.create(borough: "Manhattan", line: flushing2)
    LineDirection.create(
      line: flushing2, direction: 1,
      first_stop: "726N", # 34 St–Hudson Yards
      last_stop: "719N", # Court Sq
      last_branch_stop: "718N", # Queensboro Plz
      last_alternate_branch_stop: "718N",
      alternate_name: "Hudson Yds—Queensboro Plz"
    )
    LineDirection.create(
      line: flushing2, direction: 3,
      first_stop: "719S", # Court Sq
      last_stop: "726S", # 34 St–Hudson Yards
      first_branch_stop: "718S", # Queensboro Plz
      first_alternate_branch_stop: "718S",
      alternate_name: "Hudson Yds—Queensboro Plz"
    )

    canarsiee = Line.find_by(name: "Canarsie (Myrtle Avenue—Rockaway Parkway)")
    canarsiee.name = "Canarsie (Broadway Junction—Rockaway Parkway)"

    canarsieen = canarsiee.line_directions.find_by(direction: 1)
    canarsieen.alternate_name = "Broadway Jct—Rockaway Pkwy"
    canarsieen.last_stop = "L24N" # Atlantic Av
    canarsieen.last_branch_stop = "L22N" # Broadway Jct
    canarsieen.last_alternate_branch_stop = "L22N"
    canarsieen.save!

    canarsiees = canarsiee.line_directions.find_by(direction: 3)
    canarsiees.alternate_name = "Broadway Jct—Rockaway Pkwy"
    canarsiees.first_stop = "L24S" # Atlantic Av
    canarsiees.first_branch_stop = "L22S" # Broadway Jct
    canarsiees.first_alternate_branch_stop = "L22S"
    canarsiees.save!

    canarsiee.save!

    canarsiem = Line.create(name: "Canarsie (Myrtle Avenue—Broadway Junction)", is_visible: true)
    LineBorough.create(borough: "Brooklyn", line: canarsiem)
    LineDirection.create(
      line: canarsiem, direction: 1,
      first_stop: "L21N", # Bushwick Av–Aberdeen St
      last_stop: "L19N", # Halsey St
      first_branch_stop: "L22N", # Broadway Jct
      first_alternate_branch_stop: "L22N",
      last_branch_stop: "L17N", # Myrtle–Wyckoff Avs
      last_alternate_branch_stop: "L17N",
      alternate_name: "Myrtle Av—Broadway Jct"
    )
    LineDirection.create(
      line: canarsiem, direction: 3,
      first_stop: "L19S", # Halsey St
      last_stop: "L21S", # Bushwick Av–Aberdeen St
      first_branch_stop: "L17S", # Myrtle–Wyckoff Avs
      first_alternate_branch_stop: "L17S",
      last_branch_stop: "L22S", # Broadway Jct
      last_alternate_branch_stop: "L22S",
      alternate_name: "Myrtle Av—Broadway Jct"
    )

    jamaica = Line.find_by(name: "Jamaica")
    jamaica.name = "Jamaica (Myrtle Avenue—Crescent Street)"

    jamaican = jamaica.line_directions.find_by(direction: 1)
    jamaican.alternate_name = "Myrtle Av—Crescent St"
    jamaican.last_stop = "J24N" # Alabama Av
    jamaican.last_branch_stop = "J20N" # Crescent St
    jamaican.last_alternate_branch_stop = "J20N"
    jamaican.save!

    jamaicas = jamaica.line_directions.find_by(direction: 3)
    jamaicas.alternate_name = "Myrtle Av—Crescent St"
    jamaicas.first_stop = "J24S" # Alabama Av
    jamaicas.first_branch_stop = "J20S" # Crescent St
    jamaicas.first_alternate_branch_stop = "J20S"
    jamaicas.save!

    jamaica.line_boroughs.find_by(borough: "Queens").destroy

    jamaica.save!

    jamaica2 = Line.create(name: "Jamaica (Crescent Street—Jamaica Center)", is_visible: true)
    LineBorough.create(borough: "Brooklyn", line: jamaica2)
    LineBorough.create(borough: "Queens", line: jamaica2)
    LineDirection.create(
      line: jamaica2, direction: 1,
      first_stop: "J15N", # Woodhaven Blvd
      last_stop: "J15N",
      first_branch_stop: "J20N", # Crescent St
      first_alternate_branch_stop: "J20N",
      last_branch_stop: "G05N", # Jamaica Ctr
      last_alternate_branch_stop: "G05N",
      alternate_name: "Crescent St—Jamaica Ctr"
    )
    LineDirection.create(
      line: jamaica2, direction: 3,
      first_stop: "J15S", # Halsey St
      last_stop: "J15S", # Bushwick Av–Aberdeen St
      first_branch_stop: "G05S", # Myrtle–Wyckoff Avs
      first_alternate_branch_stop: "G05S",
      last_branch_stop: "J20S", # Broadway Jct
      last_alternate_branch_stop: "J20S",
      alternate_name: "Crescent St—Jamaica Ctr"
    )
  end
end
