class CreateLineDirections < ActiveRecord::Migration[5.2]
  def change
    create_table :line_directions do |t|
      t.references :line, foreign_key: true, null: false
      t.integer :direction, null: false
      t.string :last_station, null: false
      t.string :type, null: false
      t.integer :line_direction_express_id
    end

    add_foreign_key :line_directions, :line_directions, column: :line_direction_express_id
  end
end
