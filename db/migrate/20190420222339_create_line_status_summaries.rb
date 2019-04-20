class CreateLineStatusSummaries < ActiveRecord::Migration[5.2]
  def change
    create_table :line_status_summaries do |t|
      t.integer :line_id, null: false
      t.date :date, null: false
      t.json :summary, null: false
      t.timestamps
    end
    add_index :line_status_summaries, [:date, :line_id], unique: true
  end
end
