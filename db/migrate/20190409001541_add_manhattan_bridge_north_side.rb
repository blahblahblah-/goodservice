class AddManhattanBridgeNorthSide < ActiveRecord::Migration[5.2]
  def change
    sixth = Line.create(name: "Sixth Avenue (Manhattan Bridge)", is_visible: true)
    LineBorough.create(borough: "Manhattan", line: sixth)
    LineBorough.create(borough: "Brooklyn", line: sixth)
    LineDirection.create(
      line: sixth, direction: 1, first_stop: "D22N", last_stop: "D22N", first_branch_stop: "R31N", first_alternate_branch_stop: "D24N", alternate_name: "via Manhattan Bridge (North Side)"
    )
    LineDirection.create(
      line: sixth, direction: 3, first_stop: "D22S", last_stop: "D22S", last_branch_stop: "R31S", last_alternate_branch_stop: "D24S", alternate_name: "via Manhattan Bridge (North Side)"
    )
  end
end
