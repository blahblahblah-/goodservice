class RenameLines < ActiveRecord::Migration[5.2]
  def change
    sixmanbr = Line.find_by(name: "6 Avenue (Manhattan Bridge)")
    sixmanbr.name = "Manhattan Bridge (6 Avenue)"
    sixmanbr.save!

    sixrutgers = Line.find_by(name: "6 Avenue (Rutgers Street)")
    sixrutgers.name = "Rutgers Street (6 Avenue)"
    sixrutgers.save!

    eighth = Line.find_by(name: "8 Avenue (Lower Manhattan/Downtown Brooklyn)")
    eighth.name = "Cranberry Street (8 Avenue)"
    eighth.save!

    bway = Line.find_by(name: "Broadway (Manhattan Bridge/Lower Manhattan)")
    bway.name = "Manhattan Bridge/Montague Street (Broadway)"
    bway.save!
  end
end
