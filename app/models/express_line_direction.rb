class ExpressLineDirection < LineDirection
  has_one :local_line_direction, inverse_of: :express_line_direction, class_name: "LocalLineDirection"

  def name
    "#{line.name} Express"
  end
end