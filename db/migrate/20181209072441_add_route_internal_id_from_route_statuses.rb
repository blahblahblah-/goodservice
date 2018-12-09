class AddRouteInternalIdFromRouteStatuses < ActiveRecord::Migration[5.2]
  def change
    RouteStatus.delete_all
    add_column :route_statuses, :route_internal_id, :string, null: false
    add_index :route_statuses, [:route_internal_id, :created_at]
  end
end
