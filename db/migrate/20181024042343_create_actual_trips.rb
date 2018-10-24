class CreateActualTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :actual_trips do |t|
      t.date :date, null: false
      t.string :trip_id, null: false
      t.string :route_id, null: false
      t.string :first_stop_id, null: false
      t.integer :first_stop_departure_timestamp
      t.integer :timestamp, null: false
      t.integer :initial_arrival_estimate, null: false
      t.timestamps
    end

    add_index :actual_trips, :created_at
  end
end
