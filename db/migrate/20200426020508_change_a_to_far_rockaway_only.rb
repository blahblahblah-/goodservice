class ChangeAToFarRockawayOnly < ActiveRecord::Migration[5.2]
  def change
    route = Route.find_by(internal_id: 'A')
    route.alternate_name = 'Far Rockaway'
    route.save!
  end
end
