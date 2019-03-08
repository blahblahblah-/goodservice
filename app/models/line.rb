class Line < ActiveRecord::Base
  has_many :line_boroughs
  has_many :line_directions

  def boroughs
    line_boroughs.pluck(:borough)
  end

  def as_json(*)
    super.tap do |hash|
      hash[:boroughs] = boroughs
    end
  end
end