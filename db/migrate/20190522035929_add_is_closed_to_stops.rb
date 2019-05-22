class AddIsClosedToStops < ActiveRecord::Migration[5.2]
  def change
    add_column :stops, :is_closed, :boolean, null: false, default: false
  end
end
