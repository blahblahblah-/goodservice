class CreateActualTripUpdates < ActiveRecord::Migration[5.2]
  def change
    create_table :actual_trip_updates do |t|
      t.integer :actual_trip_id, null: false
      t.string :next_stop, null: false
      t.integer :timestamp, null: false
      t.integer :diff, null: false
      t.integer :new_arrival_estimate, null: false
      t.timestamps
    end

    add_index :actual_trip_updates, [:actual_trip_id, :next_stop], unique: true
    add_foreign_key :actual_trip_updates, :actual_trips, column: :actual_trip_id
  end
end
