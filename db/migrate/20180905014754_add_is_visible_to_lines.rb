class AddIsVisibleToLines < ActiveRecord::Migration[5.2]
  def change
    add_column :lines, :is_visible, :boolean, default: true, null: false
  end
end
