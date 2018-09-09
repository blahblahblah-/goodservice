class Line < ActiveRecord::Base
  has_many :line_boroughs
  has_many :line_directions

  def boroughs
    line_boroughs.pluck(:borough)
  end
end