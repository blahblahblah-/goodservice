class AddUniqueConstraintToLineDirections < ActiveRecord::Migration[5.2]
  def change
    add_index :line_directions, [:line_id, :direction, :type], unique: true
  end
end
