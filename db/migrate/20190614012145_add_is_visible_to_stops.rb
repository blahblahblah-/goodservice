class AddIsVisibleToStops < ActiveRecord::Migration[5.2]
  def change
    add_column :stops, :is_visible, :boolean, null: false, default: true
  end
end
