class AddFirstStopToLineDirections < ActiveRecord::Migration[5.2]
  def change
    add_column :line_directions, :first_stop, :string, null: false
    add_foreign_key :line_directions, :stops, column: :first_stop, primary_key: :internal_id
  end
end
