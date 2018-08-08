class KeyStation < ActiveRecord::Base
  belongs_to :line_direction, foreign_key: "line_direction_id"
  belongs_to :stop, foreign_key: "stop_internal_id", primary_key: "internal_id"
end