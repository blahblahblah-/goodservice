class AddOnDeleteCascadeConstraintToActualTripsAndActualTripUpdates < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :actual_trip_updates, :actual_trips
    add_foreign_key :actual_trip_updates, :actual_trips, on_delete: :cascade
  end
end
