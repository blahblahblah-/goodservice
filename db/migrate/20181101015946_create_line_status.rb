class CreateLineStatus < ActiveRecord::Migration[5.2]
  def change
    create_table :line_statuses do |t|
      t.integer :line_id, null: false
      t.string :status, null: false
      t.timestamps
    end
  end
end
