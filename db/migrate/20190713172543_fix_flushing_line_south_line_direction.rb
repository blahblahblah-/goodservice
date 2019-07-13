class FixFlushingLineSouthLineDirection < ActiveRecord::Migration[5.2]
  def change
    flushings = ExpressLineDirection.joins(:line).find_by(lines: {name: "Flushing"}, direction: 3)
    flushings.last_stop = "718S" # Queensboro Plz
    flushings.save!
  end
end
