class ReroutingServiceChange < ServiceChange
  def applicable_to_routing?(routing)
    if begin_of_route?
      routing.include?(last_station)
    else
      routing.include?(first_station)
    end
  end
end