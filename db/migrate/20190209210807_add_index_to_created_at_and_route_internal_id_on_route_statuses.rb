class AddIndexToCreatedAtAndRouteInternalIdOnRouteStatuses < ActiveRecord::Migration[5.2]
  def change
    add_index :route_statuses, [:created_at, :route_internal_id]
  end
end
