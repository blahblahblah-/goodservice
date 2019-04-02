class FixPelhamLineDirections < ActiveRecord::Migration[5.2]
  def change
    pelhamexn = ExpressLineDirection.joins(:line).find_by(lines: {name: "Pelham"}, direction: 1)
    pelhamexn.first_stop = '619N'
    pelhamexn.first_branch_stop = '621N'
    pelhamexn.first_alternate_branch_stop = '621N'
    pelhamexn.save!

    pelhamexs = ExpressLineDirection.joins(:line).find_by(lines: {name: "Pelham"}, direction: 3)
    pelhamexs.last_stop = '619S'
    pelhamexs.last_branch_stop = '621S'
    pelhamexs.last_alternate_branch_stop = '621S'
    pelhamexs.save!
  end
end
