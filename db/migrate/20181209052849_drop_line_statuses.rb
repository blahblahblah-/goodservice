class DropLineStatuses < ActiveRecord::Migration[5.2]
  def change
    drop_table :line_statuses
  end
end
