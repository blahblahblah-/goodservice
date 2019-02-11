class CorrectSpellingOfDiscrepancyForRouteStatuses < ActiveRecord::Migration[5.2]
  def change
    rename_column :route_statuses, :max_headway_discreprency, :max_headway_discrepancy
  end
end
