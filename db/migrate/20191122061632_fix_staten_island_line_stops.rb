class FixStatenIslandLineStops < ActiveRecord::Migration[5.2]
  def change
    sin = LineDirection.joins(:line).find_by(lines: {name: "Staten Island"}, direction: 1)
    sin.first_stop = "S09N"
    sin.last_stop = "S31N"
    sin.save!

    sis = LineDirection.joins(:line).find_by(lines: {name: "Staten Island"}, direction: 3)
    sis.first_stop = "S31S"
    sis.last_stop = "S09S"
    sis.save!
  end
end
