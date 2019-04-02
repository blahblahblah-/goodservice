class AddBranchStopsToDelancey < ActiveRecord::Migration[5.2]
  def change
    delanceyn = LineDirection.joins(:line).find_by(lines: {name: "6 Avenue (Rutgers Street)"}, direction: 1)
    delanceyn.first_branch_stop = "A41N" # Jay St–MetroTech
    delanceyn.first_alternate_branch_stop = "A41N"
    delanceyn.last_branch_stop = "D21N" # Broadway–Lafayette St
    delanceyn.last_alternate_branch_stop = "D21N"
    delanceyn.save!

    delanceys = LineDirection.joins(:line).find_by(lines: {name: "6 Avenue (Rutgers Street)"}, direction: 3)
    delanceys.first_branch_stop = "D21S" # Broadway–Lafayette St
    delanceys.first_alternate_branch_stop = "D21S"
    delanceys.last_branch_stop = "A41S" # Jay St–MetroTech
    delanceys.last_alternate_branch_stop = "A41S"
    delanceys.save!
  end
end
