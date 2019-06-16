class UpdateCulverKingsHwyConeyLine < ActiveRecord::Migration[5.2]
  def change
    culverkingsn = LineDirection.joins(:line).find_by!(lines: {name: "Culver (Kings Highway—Coney Island)"}, direction: 1)
    culverkingsn.last_stop = 'F38N'
    culverkingsn.save!

    culverkingss = LineDirection.joins(:line).find_by!(lines: {name: "Culver (Kings Highway—Coney Island)"}, direction: 3)
    culverkingss.first_stop = "F38S"
    culverkingss.save!
  end
end
