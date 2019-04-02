class RenameAndUnhideLineDirections < ActiveRecord::Migration[5.2]
  def change
    canarsiee = Line.find_by(name: "East of Myrtle-Wyckoff Avs")
    canarsiee.name = "Canarsie (Myrtle Avenue—Rockaway Parkway)"
    canarsiee.is_visible = true
    canarsiee.line_directions.each do |ld|
      ld.alternate_name = "Myrtle Av—Rockaway Pkwy"
      ld.save!
    end
    canarsiee.save!

    culvers = Line.find_by(name: "South of Kings Hwy")
    culvers.name = "Culver (Kings Highway—Coney Island)"
    culvers.is_visible = true
    culvers.line_directions.each do |ld|
      ld.alternate_name = "Kings Hwy—Coney Island"
      ld.save!
    end
    culvers.save!

    lefferts = Line.find_by(name: "Lefferts Blvd Branch")
    lefferts.name = "Fulton Street (Lefferts Boulevard Branch)"
    lefferts.is_visible = true
    lefferts.line_directions.each do |ld|
      ld.alternate_name = "Lefferts Blvd Branch"
      ld.save!
    end
    lefferts.save!

    chambers = Line.find_by(name: "via Chambers St")
    chambers.name = "8 Avenue (Lower Manhattan)"
    chambers.is_visible = true
    chambers.line_directions.each do |ld|
      ld.alternate_name = "via Chambers St"
      ld.save!
    end
    chambers.save!

    delancey = Line.find_by(name: "via Delancey St")
    delancey.name = "6 Avenue (Rutgers Street)"
    delancey.is_visible = true
    delancey.line_directions.each do |ld|
      ld.alternate_name = "via Delancey St"
      ld.save!
    end
    delancey.save!

    fiftythird = Line.find_by(name: "via 53 St")
    fiftythird.name = "53 Street"
    fiftythird.is_visible = true

    fiftythirdn = fiftythird.line_directions.find_by(direction: 1)
    fiftythirdn.alternate_name = "via 53 St"
    fiftythirdn.first_branch_stop = "D14N" # 7 Av/53 St
    fiftythirdn.first_alternate_branch_stop = "D15N" # 47-50 Sts–Rockefeller Ctr
    fiftythirdn.last_branch_stop = "G21N" # Queens Plaza
    fiftythirdn.last_alternate_branch_stop = "G21N"
    fiftythirdn.save!

    fiftythirds = fiftythird.line_directions.find_by(direction: 3)
    fiftythirds.alternate_name = "via 53 St"
    fiftythirds.first_branch_stop = "G21S" # Queens Plaza
    fiftythirds.first_alternate_branch_stop = "G21S"
    fiftythirds.last_branch_stop = "D14S" # 7 Av/53 St
    fiftythirds.last_alternate_branch_stop = "D15S" # 47-50 Sts–Rockefeller Ctr
    fiftythirds.save!

    fiftythird.save!

    sixtythird = Line.find_by(name: "via 63 St")
    sixtythird.name = "63 Street"
    sixtythird.is_visible = true

    sixtythirdn = sixtythird.line_directions.find_by(direction: 1)
    sixtythirdn.alternate_name = "via 63 St"
    sixtythirdn.first_branch_stop = "D15N" # 47-50 Sts–Rockefeller Ctr
    sixtythirdn.first_alternate_branch_stop = "D15N"
    sixtythirdn.last_branch_stop = "B04N" # 21 St–Queensbr
    sixtythirdn.last_alternate_branch_stop = "B04N"
    sixtythirdn.save!

    sixtythirds = sixtythird.line_directions.find_by(direction: 3)
    sixtythirds.alternate_name = "via 63 St"
    sixtythirds.first_branch_stop = "B04S" # Queens Plaza
    sixtythirds.first_alternate_branch_stop = "B04S"
    sixtythirds.last_branch_stop = "D15S" # 47-50 Sts–Rockefeller Ctr
    sixtythirds.last_alternate_branch_stop = "D15S"
    sixtythirds.save!

    sixtythird.save!
  end
end
