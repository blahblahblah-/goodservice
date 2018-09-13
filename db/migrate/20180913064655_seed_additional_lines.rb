class SeedAdditionalLines < ActiveRecord::Migration[5.2]
  def change
    manhbr = Line.create(name: "via Manhattan Bridge", is_visible: false)
    LineDirection.create(line: manhbr, direction: 1, first_stop: "Q01N", last_stop: "Q01N")
    LineDirection.create(line: manhbr, direction: 3, first_stop: "Q01S", last_stop: "Q01S")

    whitehall = Line.create(name: "via Whitehall St", is_visible: false)
    LineDirection.create(line: whitehall, direction: 1, first_stop: "R26N", last_stop: "R23N")
    LineDirection.create(line: whitehall, direction: 3, first_stop: "R23S", last_stop: "R26S")

    canarsiee = Line.create(name: "East of Myrtle-Wyckoff Avs", is_visible: false)
    LineDirection.create(line: canarsiee, direction: 1, first_stop: "L29N", last_stop: "L19N")
    LineDirection.create(line: canarsiee, direction: 3, first_stop: "L19S", last_stop: "L29S")

    culvers = Line.create(name: "South of Kings Hwy", is_visible: false)
    LineDirection.create(line: culvers, direction: 1, first_stop: "F39N", last_stop: "F36N")
    LineDirection.create(line: culvers, direction: 3, first_stop: "F36S", last_stop: "F39S")

    lefferts = Line.create(name: "Lefferts Blvd Branch", is_visible: false)
    LineDirection.create(line: lefferts, direction: 1, first_stop: "A65N", last_stop: "A63N")
    LineDirection.create(line: lefferts, direction: 3, first_stop: "A63S", last_stop: "A65S")

    chambers = Line.create(name: "via Chambers St", is_visible: false)
    LineDirection.create(line: chambers, direction: 1, first_stop: "A40N", last_stop: "A36N")
    LineDirection.create(line: chambers, direction: 3, first_stop: "A36S", last_stop: "A40S")

    delancey = Line.create(name: "via Delancey St", is_visible: false)
    LineDirection.create(line: delancey, direction: 1, first_stop: "F18N", last_stop: "F15N")
    LineDirection.create(line: delancey, direction: 3, first_stop: "F15S", last_stop: "F18S")

    fiftythird = Line.create(name: "via 53 St", is_visible: false)
    LineDirection.create(line: fiftythird, direction: 1, first_stop: "F12N", last_stop: "F09N")
    LineDirection.create(line: fiftythird, direction: 3, first_stop: "F09S", last_stop: "F12S")

    sixtythird = Line.create(name: "via 63 St", is_visible: false)
    LineDirection.create(line: sixtythird, direction: 1, first_stop: "B06N", last_stop: "B04N")
    LineDirection.create(line: sixtythird, direction: 3, first_stop: "B04S", last_stop: "B06S")
  end
end
