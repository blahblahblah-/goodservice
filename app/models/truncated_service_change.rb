class TruncatedServiceChange < ServiceChange
  def stations_enroute
    if begin_of_route?
      [nil, last_station]
    else
      [nil, first_station]
    end
  end
end