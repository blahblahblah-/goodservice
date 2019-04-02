class SeedMoreLines < ActiveRecord::Migration[5.2]
  def change
    manhbr = Line.find_by(name: "via Manhattan Bridge")
    manhbr.line_directions.destroy_all
    manhbr.destroy

    whitehall = Line.find_by(name: "via Whitehall St")
    whitehall.line_directions.destroy_all
    whitehall.destroy

    bway = Line.create(name: "Broadway (Lower Manhattan)", is_visible: true)
    LineBorough.create(borough: "Manhattan", line: bway)
    LineBorough.create(borough: "Brooklyn", line: bway)
    bwayexpn = ExpressLineDirection.create(
      line: bway, direction: 1, first_stop: "Q01N", last_stop: "Q01N", penultimate_stop: "Q01N", first_branch_stop: "R31N", first_alternate_branch_stop: "D24N", last_branch_stop: "R22N", last_alternate_branch_stop: "R20N", alternate_name: "via Manhattan Bridge (South Side)"
    )
    bwayexps = ExpressLineDirection.create(
      line: bway, direction: 3, first_stop: "Q01S", last_stop: "Q01S", penultimate_stop: "Q01S", first_branch_stop: "R22S", first_alternate_branch_stop: "R20S", last_branch_stop: "R31S", last_alternate_branch_stop: "D24S", alternate_name: "via Manhattan Bridge (South Side)"
    )
    LocalLineDirection.create(line: bway, direction: 1, first_stop: "R26N", last_stop: "R23N", express_line_direction: bwayexpn, alternate_name: "via Whitehall St")
    LocalLineDirection.create(line: bway, direction: 3, first_stop: "R23S", last_stop: "R26S", express_line_direction: bwayexps, alternate_name: "via Whitehall St")

    # sixth = Line.create(name: "Manhattan Bridge (North Side)", is_visible: true)
    # LineBorough.create(borough: "Manhattan", line: sixth)
    # LineBorough.create(borough: "Brooklyn", line: sixth)
    # sixthexpn = ExpressLineDirection.create(
    #   line: sixth, direction: 1, first_stop: "D22N", last_stop: "D22N", penultimate_stop: "D22N", first_branch_stop: "R31N", first_alternate_branch_stop: "D24N", alternate_name: "via Manhattan Bridge (North Side)"
    # )
    # sixthexps = ExpressLineDirection.create(
    #   line: sixth, direction: 3, first_stop: "D22S", last_stop: "D22S", penultimate_stop: "D22S", last_branch_stop: "R31S", last_alternate_branch_stop: "D24S", alternate_name: "via Manhattan Bridge (North Side)"
    # )
    # LocalLineDirection.create(line: sixth, direction: 1, first_stop: "XXXN", last_stop: "XXXN", express_line_direction: sixthexpn, alternate_name: "--")
    # LocalLineDirection.create(line: sixth, direction: 3, first_stop: "XXXS", last_stop: "XXXS", express_line_direction: sixthexps, alternate_name: "--")

    # wburg = Line.create(name: "Williamsburg Bridge", is_visible: true)
    # LineBorough.create(borough: "Manhattan", line: wburg)
    # LineBorough.create(borough: "Brooklyn", line: wburg)
    # wburgexpn = ExpressLineDirection.create(
    #   line: wburg, direction: 1, first_stop: "M18N", last_stop: "M16N", first_branch_stop: "D21N", first_alternate_branch_stop: "M19N", alternate_name: "Williamsburg Bridge"
    # )
    # wburgexps = ExpressLineDirection.create(
    #   line: wburg, direction: 3, first_stop: "M16S", last_stop: "M18S", last_branch_stop: "M19S", last_alternate_branch_stop: "D21S", alternate_name: "Williamsburg Bridge"
    # )
    # LocalLineDirection.create(line: wburg, direction: 1, first_stop: "XXXN", last_stop: "XXXM", express_line_direction: wburgexpn, alternate_name: "--")
    # LocalLineDirection.create(line: wburg, direction: 3, first_stop: "XXXS", last_stop: "XXXS", express_line_direction: wburgexps, alternate_name: "--")
  end
end
