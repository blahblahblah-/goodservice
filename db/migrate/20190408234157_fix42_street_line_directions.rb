class Fix42StreetLineDirections < ActiveRecord::Migration[5.2]
  def change
    fortysecondn = LineDirection.joins(:line).find_by(lines: {name: "42 Street"}, direction: 1)
    fortysecondn.first_stop = '901N'
    fortysecondn.last_stop = '902N'
    fortysecondn.save!

    fortyseconds = LineDirection.joins(:line).find_by(lines: {name: "42 Street"}, direction: 3)
    fortyseconds.first_stop = '902S'
    fortyseconds.last_stop = '901S'
    fortyseconds.save!
  end
end
