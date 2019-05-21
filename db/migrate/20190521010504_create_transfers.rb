class CreateTransfers < ActiveRecord::Migration[5.2]
  def change
    create_table :transfers do |t|
      t.string :from_stop_internal_id, null: false
      t.string :to_stop_internal_id, null: false
      t.integer :min_transfer_time, null: false, default: 0
    end
  end
end
