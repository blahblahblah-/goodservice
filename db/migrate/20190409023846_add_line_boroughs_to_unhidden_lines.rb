class AddLineBoroughsToUnhiddenLines < ActiveRecord::Migration[5.2]
  def change
    canarsiee = Line.find_by(name: "Canarsie (Myrtle Avenue—Rockaway Parkway)")
    LineBorough.create(borough: "Brooklyn", line: canarsiee)

    culvers = Line.find_by(name: "Culver (Kings Highway—Coney Island)")
    LineBorough.create(borough: "Brooklyn", line: culvers)

    lefferts = Line.find_by(name: "Fulton Street (Lefferts Boulevard Branch)")
    LineBorough.create(borough: "Queens", line: lefferts)

    chambers = Line.find_by(name: "8 Avenue (Lower Manhattan)")
    chambers.name = "8 Avenue (Lower Manhattan/Downtown Brooklyn)"
    chambers.save!

    LineBorough.create(borough: "Manhattan", line: chambers)
    LineBorough.create(borough: "Brooklyn", line: chambers)

    delancey = Line.find_by(name: "6 Avenue (Rutgers Street)")
    LineBorough.create(borough: "Manhattan", line: delancey)
    LineBorough.create(borough: "Brooklyn", line: delancey)

    fiftythird = Line.find_by(name: "53 Street")
    LineBorough.create(borough: "Manhattan", line: fiftythird)
    LineBorough.create(borough: "Queens", line: fiftythird)

    sixtythird = Line.find_by(name: "63 Street")
    LineBorough.create(borough: "Manhattan", line: sixtythird)
    LineBorough.create(borough: "Queens", line: sixtythird)
  end
end
