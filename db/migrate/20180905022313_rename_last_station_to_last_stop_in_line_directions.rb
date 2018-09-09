class RenameLastStationToLastStopInLineDirections < ActiveRecord::Migration[5.2]
  def change
    rename_column :line_directions, :last_station, :last_stop
    add_foreign_key :line_directions, :stops, column: :last_stop, primary_key: :internal_id
  end
end
