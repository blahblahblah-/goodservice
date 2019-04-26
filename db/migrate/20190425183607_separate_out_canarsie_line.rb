class SeparateOutCanarsieLine < ActiveRecord::Migration[5.2]
  def change
    fourteenth = Line.find_by(name: "14 Street–Canarsie")
    fourteenth.name = "14 Street"

    fourteenthn = fourteenth.line_directions.find_by(direction: 1)
    fourteenthn.first_stop = "L08N" # Bedford Av
    fourteenthn.first_branch_stop = "L10N" # Lorimer St
    fourteenthn.first_alternate_branch_stop = "L10N" # Lorimer St
    fourteenthn.save!

    fourteenths = fourteenth.line_directions.find_by(direction: 3)
    fourteenths.last_stop = "L08S" # Bedford Av
    fourteenths.last_branch_stop = "L10S" # Lorimer St
    fourteenths.last_alternate_branch_stop = "L10S"
    fourteenths.save!

    fourteenth.save!

    canarsiel = Line.create(name: "Canarsie (Lorimer Street—Myrtle Avenue)", is_visible: true)
    LineBorough.create(borough: "Brooklyn", line: canarsiel)
    LineDirection.create(
      line: canarsiel, direction: 1,
      first_stop: "L17N", # Myrtle–Wyckoff Avs
      last_stop: "L10N", # Lorimer St
      alternate_name: "Lorimer St—Myrtle Av"
    )
    LineDirection.create(
      line: canarsiel, direction: 3,
      first_stop: "L10S", # Lorimer St
      last_stop: "L17S", # Myrtle–Wyckoff Avs
      alternate_name: "Lorimer St—Myrtle Av"
    )
  end
end
