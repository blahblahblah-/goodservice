class LineBorough < ActiveRecord::Base
  belongs_to :line, foreign_key: "line_id"
end