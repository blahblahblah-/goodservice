class AddBranchStopToLineDirections < ActiveRecord::Migration[5.2]
  def change
    add_column :line_directions, :last_branch_stop, :string
    add_column :line_directions, :last_alternate_branch_stop, :string
    add_column :line_directions, :first_branch_stop, :string
    add_column :line_directions, :first_alternate_branch_stop, :string
  end
end
