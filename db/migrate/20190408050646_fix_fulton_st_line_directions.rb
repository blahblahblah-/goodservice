class FixFultonStLineDirections < ActiveRecord::Migration[5.2]
  def change
    fultonexn = ExpressLineDirection.joins(:line).find_by(lines: {name: "Fulton Street"}, direction: 1)
    fultonexn.last_stop = 'A46N' # Nostrand Av
    fultonexn.penultimate_stop = 'A48N' # Utica Av
    fultonexn.last_branch_stop = 'A38N' # Fulton St
    fultonexn.last_alternate_branch_stop = 'A38N'
    fultonexn.save!
  end
end
