class CreateLineDirectionStatus < ActiveRecord::Migration[5.2]
  def change
    create_table :line_direction_statuses do |t|
      t.integer :line_direction_id, null: false
      t.float :travel_time
      t.timestamps
    end
    add_index :line_direction_statuses, [:created_at, :line_direction_id], name: "indx_line_direction_statuses_timestamp_id"
  end
end
