class AddIndexToTripInternalIdToStopTimes < ActiveRecord::Migration[5.2]
  def change
    add_index :stop_times, :trip_internal_id
  end
end
