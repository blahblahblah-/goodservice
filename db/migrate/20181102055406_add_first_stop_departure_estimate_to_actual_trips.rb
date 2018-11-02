class AddFirstStopDepartureEstimateToActualTrips < ActiveRecord::Migration[5.2]
  def change
    add_column :actual_trips, :first_stop_departure_estimate, :integer
  end
end
