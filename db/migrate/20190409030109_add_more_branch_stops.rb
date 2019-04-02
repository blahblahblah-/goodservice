class AddMoreBranchStops < ActiveRecord::Migration[5.2]
  def change
    epkwyn = ExpressLineDirection.joins(:line).find_by(lines: {name: "Eastern Parkway"}, direction: 1)
    epkwyn.last_branch_stop = "137N" # Chambers St
    epkwyn.last_alternate_branch_stop = "640N" # Brooklyn Br–City Hall
    epkwyn.save!

    epkwys = ExpressLineDirection.joins(:line).find_by(lines: {name: "Eastern Parkway"}, direction: 3)
    epkwys.first_branch_stop = "137S" # Chambers St
    epkwys.first_alternate_branch_stop = "640S" # Brooklyn Br–City Hall
    epkwys.save!

    jamaican = LineDirection.joins(:line).find_by(lines: {name: "Jamaica"}, direction: 1)
    jamaican.first_branch_stop = "M11N" # Myrtle Av
    jamaican.first_alternate_branch_stop = "M11N"
    jamaican.last_branch_stop = "G05N" # Jamaica Ctr
    jamaican.last_alternate_branch_stop = "G05N"
    jamaican.save!

    jamaicas = LineDirection.joins(:line).find_by(lines: {name: "Jamaica"}, direction: 3)
    jamaicas.first_branch_stop = "G05S" # Jamaica Ctr
    jamaicas.first_alternate_branch_stop = "G05S"
    jamaicas.last_branch_stop = "M11S" # Myrtle Av
    jamaicas.last_alternate_branch_stop = "M11S"
    jamaicas.save!

    rockawayn = LineDirection.joins(:line).find_by(lines: {name: "Rockaway (Far Rockaway Branch)"}, direction: 1)
    rockawayn.last_branch_stop = "A61N" # Rockaway Blvd
    rockawayn.last_alternate_branch_stop = "A61N"
    rockawayn.save!

    rockaways = LineDirection.joins(:line).find_by(lines: {name: "Rockaway (Far Rockaway Branch)"}, direction: 3)
    rockaways.first_branch_stop = "A61S" # Rockaway Blvd
    rockaways.first_alternate_branch_stop = "A61S"
    rockaways.save!

    rockawaypn = LineDirection.joins(:line).find_by(lines: {name: "Rockaway (Rockaway Park Branch)"}, direction: 1)
    rockawaypn.last_branch_stop = "H04N" # Broad Channel
    rockawaypn.last_alternate_branch_stop = "H04N"
    rockawaypn.save!

    rockawayps = LineDirection.joins(:line).find_by(lines: {name: "Rockaway (Rockaway Park Branch)"}, direction: 3)
    rockawayps.first_branch_stop = "H04S" # Broad Channel
    rockawayps.first_alternate_branch_stop = "H04S"
    rockawayps.save!

    brightonn = ExpressLineDirection.joins(:line).find_by(lines: {name: "Brighton"}, direction: 1)
    brightonn.first_branch_stop = "D43N" # Coney Island—Stillwell Av
    brightonn.first_alternate_branch_stop = "D40N" # Brighton Beach
    brightonn.save!

    brightons = ExpressLineDirection.joins(:line).find_by(lines: {name: "Brighton"}, direction: 3)
    brightons.last_branch_stop = "D43S" # Coney Island–Stillwell Av
    brightons.last_alternate_branch_stop = "D40S" # Brighton Beach
    brightons.save!
  end
end
