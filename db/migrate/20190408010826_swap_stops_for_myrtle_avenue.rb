class SwapStopsForMyrtleAvenue < ActiveRecord::Migration[5.2]
  def change
    myrtlen = LineDirection.joins(:line).find_by(lines: {name: "Myrtle Avenue"}, direction: 1)
    myrtlen.first_stop = 'M01N'
    myrtlen.last_stop = 'M10N'
    myrtlen.save!

    myrtles = LineDirection.joins(:line).find_by(lines: {name: "Myrtle Avenue"}, direction: 3)
    myrtles.first_stop = 'M10S'
    myrtles.last_stop = 'M01S'
    myrtles.save!
  end
end
