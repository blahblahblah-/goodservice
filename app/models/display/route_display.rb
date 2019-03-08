module Display
  class RouteDisplay
    include Comparable
    delegate :internal_id, :color, :text_color, :name, :alternate_name, :visible?, :scheduled?, to: :route

    def initialize(route)
      @route = route
    end

    def <=>(another)
      name <=> another.name
    end

    attr_accessor :route
  end
end