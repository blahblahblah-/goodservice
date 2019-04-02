class FixFultonStLineExpressLineDirections < ActiveRecord::Migration[5.2]
  def change
    fultonn = ExpressLineDirection.joins(:line).find_by(lines: {name: "Fulton Street"}, direction: 1)
    fultonn.last_branch_stop = "A41N" # Jay St–MetroTech
    fultonn.last_alternate_branch_stop = "A41N"
    fultonn.save!

    fultons = ExpressLineDirection.joins(:line).find_by(lines: {name: "Fulton Street"}, direction: 3)
    fultons.first_branch_stop = "A41S" # Jay St–MetroTech
    fultons.first_alternate_branch_stop = "A41S"
    fultons.save!

    chambersn = LineDirection.joins(:line).find_by(lines: {name: "8 Avenue (Lower Manhattan)"}, direction: 1)
    chambersn.first_branch_stop = "A41N" # Jay St–MetroTech
    chambersn.first_alternate_branch_stop = "A41N"
    chambersn.last_branch_stop = "A33N" # Spring St
    chambersn.last_alternate_branch_stop = "A32N" # W 4 St
    chambersn.save!

    chamberss = LineDirection.joins(:line).find_by(lines: {name: "8 Avenue (Lower Manhattan)"}, direction: 3)
    chamberss.first_branch_stop = "A33S" # Spring St
    chamberss.first_alternate_branch_stop = "A32S" # W 4 St
    chamberss.last_branch_stop = "A41S" # Jay St–MetroTech
    chamberss.last_alternate_branch_stop = "A41S"
    chamberss.save!
  end
end
