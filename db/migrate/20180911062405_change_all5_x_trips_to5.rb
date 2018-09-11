class ChangeAll5XTripsTo5 < ActiveRecord::Migration[5.2]
  def change
    Trip.where(route_internal_id: "5X").update_all(route_internal_id: "5");
  end
end
