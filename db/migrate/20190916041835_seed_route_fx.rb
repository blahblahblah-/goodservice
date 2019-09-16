class SeedRouteFx < ActiveRecord::Migration[5.2]
  def change
  	Route.create(name: 'FX', internal_id: 'FX', color: 'f2711c', visible: true)
  end
end
