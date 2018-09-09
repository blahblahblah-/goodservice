class ChangeTypeInLineDirectionsToBeNotNull < ActiveRecord::Migration[5.2]
  def change
    change_column :line_directions, :type, :string, null: true
  end
end
