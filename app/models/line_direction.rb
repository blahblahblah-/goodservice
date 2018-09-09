class LineDirection < ActiveRecord::Base
  belongs_to :line, foreign_key: "line_id"

  NORTH = 1
  SOUTH = 3

  DIRECTIONS = [
    NORTH, SOUTH
  ]

  def name
    line.name
  end
end