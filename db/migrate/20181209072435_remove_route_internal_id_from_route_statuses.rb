class RemoveRouteInternalIdFromRouteStatuses < ActiveRecord::Migration[5.2]
  def change
    remove_column :route_statuses, :route_internal_id
  end
end
