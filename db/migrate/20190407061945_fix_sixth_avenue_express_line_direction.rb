class FixSixthAvenueExpressLineDirection < ActiveRecord::Migration[5.2]
  def change
    sixexs = ExpressLineDirection.joins(:line).find_by(lines: {name: "6 Avenue"}, direction: 3)
    sixexs.last_stop = 'D21S'
    sixexs.save!
  end
end
