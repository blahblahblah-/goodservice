class Line < ActiveRecord::Base
  has_many :line_boroughs

  def boroughs
    line_boroughs.pluck(:borough)
  end
end