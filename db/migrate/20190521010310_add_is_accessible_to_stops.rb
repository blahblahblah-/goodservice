class AddIsAccessibleToStops < ActiveRecord::Migration[5.2]
  def change
    add_column :stops, :is_accessible, :boolean, null: false, default: false
  end
end
