class LocalLineDirection < LineDirection
  belongs_to :express_line_direction, class_name: "ExpressLineDirection", foreign_key: "express_line_direction_id"

  def name
    "#{line.name} Local"
  end
end