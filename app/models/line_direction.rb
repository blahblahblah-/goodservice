class LineDirection < ActiveRecord::Base
  belongs_to :line, foreign_key: "line_id"
  belongs_to :stop_time, foreign_key: "last_stop", primary_key: "stop_internal_id"

  NORTH = 1
  SOUTH = 3

  DIRECTIONS = [
    NORTH, SOUTH
  ]

  def name
    line.name
  end

  def self.scheduled_lines(route_internal_id, direction)
    stops = StopTime.soon_by_route(route_internal_id, direction).pluck(:stop_internal_id)
    self.where("type is null or type <> 'ExpressLineDirection'").where(last_stop: stops).or(self.where(type: 'ExpressLineDirection').where(penultimate_stop: stops).where(last_stop: stops))
      .includes(:line).uniq.map(&:line).uniq.select(&:is_visible).sort_by(&:name)
  end
end