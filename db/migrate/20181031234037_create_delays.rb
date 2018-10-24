class CreateDelays < ActiveRecord::Migration[5.2]
  def change
    create_table :delays do |t|
      t.integer :actual_trip_update_id, null: false
      t.integer :delayed_minutes
      t.timestamps
    end

    add_index :delays, :actual_trip_update_id, unique: true
  end
end
