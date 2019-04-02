class FixLineDirections < ActiveRecord::Migration[5.2]
  def change
    flushingn = ExpressLineDirection.joins(:line).find_by(lines: {name: "Flushing"}, direction: 1)
    flushingn.last_branch_stop = "701N" # Flushing–Main St
    flushingn.last_alternate_branch_stop = "702N" # Mets–Willets Pt
    flushingn.save!

    flushings = ExpressLineDirection.joins(:line).find_by(lines: {name: "Flushing"}, direction: 3)
    flushings.first_branch_stop = "701S" # Flushing–Main St
    flushings.first_alternate_branch_stop = "702S" # Mets–Willets Pt
    flushings.save!

    jamaican = LineDirection.joins(:line).find_by(lines: {name: "Jamaica (Myrtle Avenue—Crescent Street)"}, direction: 1)
    jamaican.first_alternate_branch_stop = "J27N" # Broadway Jct
    jamaican.save!

    jamaicas = LineDirection.joins(:line).find_by(lines: {name: "Jamaica (Myrtle Avenue—Crescent Street)"}, direction: 3)
    jamaicas.last_alternate_branch_stop = "J27S" # Broadway Jct
    jamaicas.save!
  end
end
