class DropRouteLineDirections < ActiveRecord::Migration[5.2]
  def change
    drop_table :route_line_directions
  end
end
