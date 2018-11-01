class CreateRouteStatus < ActiveRecord::Migration[5.2]
  def change
    create_table :route_statuses do |t|
      t.integer :route_internal_id, null: false
      t.string :status, null: false
      t.timestamps
    end
  end
end
