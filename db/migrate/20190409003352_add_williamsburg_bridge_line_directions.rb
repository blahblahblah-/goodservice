class AddWilliamsburgBridgeLineDirections < ActiveRecord::Migration[5.2]
  def change
    wburg = Line.create(name: "Williamsburg Bridge", is_visible: true)
    LineBorough.create(borough: "Manhattan", line: wburg)
    LineBorough.create(borough: "Brooklyn", line: wburg)
    LineDirection.create(
      line: wburg, direction: 1, first_stop: "M18N", last_stop: "M16N", first_branch_stop: "D21N", first_alternate_branch_stop: "M19N", alternate_name: "via Williamsburg Bridge"
    )
    LineDirection.create(
      line: wburg, direction: 3, first_stop: "M16S", last_stop: "M18S", last_branch_stop: "M19S", last_alternate_branch_stop: "D21S", alternate_name: "via Williamsburg Bridge"
    )
  end
end
