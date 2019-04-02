class FixConcourseExpressLineDirections < ActiveRecord::Migration[5.2]
  def change
    concoursen = ExpressLineDirection.joins(:line).find_by(lines: {name: "Concourse" }, direction: 1)
    concoursen.last_stop = "D03N" # Bedford Park Blvd
    concoursen.save!

    concourses = ExpressLineDirection.joins(:line).find_by(lines: {name: "Concourse" }, direction: 3)
    concourses.first_stop = "D03S" # Bedford Park Blvd
    concourses.save!
  end
end
