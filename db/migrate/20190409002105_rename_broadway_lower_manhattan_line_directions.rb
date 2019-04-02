class RenameBroadwayLowerManhattanLineDirections < ActiveRecord::Migration[5.2]
  def change
    bway = Line.find_by(name: "Broadway (Lower Manhattan)")
    bway.name = 'Broadway (Manhattan Bridge/Lower Manhattan)'
    bway.save!
  end
end
