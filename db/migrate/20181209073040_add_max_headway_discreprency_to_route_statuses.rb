class AddMaxHeadwayDiscreprencyToRouteStatuses < ActiveRecord::Migration[5.2]
  def change
    add_column :route_statuses, :max_headway_discreprency, :integer, null: false, default: 0
  end
end
