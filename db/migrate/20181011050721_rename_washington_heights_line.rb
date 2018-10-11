class RenameWashingtonHeightsLine < ActiveRecord::Migration[5.2]
  def change
    line = Line.find_by!(name: "8 Avenue (Washington Heights)")
    line.name = "Washington Heights (8 Avenue)"
    line.save!
  end
end
