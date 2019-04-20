class AddFkToLineStatusSummaries < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :line_status_summaries, :lines, on_delete: :cascade
  end
end
