class TruncatedServiceChange < ServiceChange
  def applicable_to_routing?(routing)
    if begin_of_route?
      routing.first == last_station
    else
      routing.last == first_station
    end
  end
end