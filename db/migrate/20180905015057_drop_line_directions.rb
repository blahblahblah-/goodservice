class DropLineDirections < ActiveRecord::Migration[5.2]
  def change
    drop_table :line_directions
  end
end
