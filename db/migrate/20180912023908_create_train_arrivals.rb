class CreateTrainArrivals < ActiveRecord::Migration[5.2]
  def change
    create_table :train_arrivals do |t|
      t.date :date
      t.string :trip_id
      t.string :stop_id
      t.string :route_id
      t.integer :five_minute_timestamp
      t.integer :arrival_timestamp
      t.timestamps
    end

    add_index :train_arrivals, [:date, :trip_id, :stop_id], unique: true
    add_index :train_arrivals, [:date, :route_id]
  end
end
