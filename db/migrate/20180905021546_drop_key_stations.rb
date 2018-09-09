class DropKeyStations < ActiveRecord::Migration[5.2]
  def change
    drop_table :key_stations
  end
end
