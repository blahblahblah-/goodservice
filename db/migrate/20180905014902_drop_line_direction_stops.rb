class DropLineDirectionStops < ActiveRecord::Migration[5.2]
  def change
    drop_table :line_direction_stops
  end
end
