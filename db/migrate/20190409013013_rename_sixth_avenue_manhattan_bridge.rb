class RenameSixthAvenueManhattanBridge < ActiveRecord::Migration[5.2]
  def change
    sixth = Line.find_by(name: "Sixth Avenue (Manhattan Bridge)", is_visible: true)
    sixth.name = "6 Avenue (Manhattan Bridge)"
    sixth.save!
  end
end
