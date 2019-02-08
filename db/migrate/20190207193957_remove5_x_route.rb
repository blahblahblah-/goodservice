class Remove5XRoute < ActiveRecord::Migration[5.2]
  def change
    Trip.where(route_internal_id: "5X").update_all(route_internal_id: "5")
    Route.find_by(internal_id: "5X").destroy
  end
end
