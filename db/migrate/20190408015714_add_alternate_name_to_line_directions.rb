class AddAlternateNameToLineDirections < ActiveRecord::Migration[5.2]
  def change
    add_column :line_directions, :alternate_name, :string
  end
end
