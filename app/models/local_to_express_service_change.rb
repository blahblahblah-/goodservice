class LocalToExpressServiceChange < ServiceChange
  def stations_enroute
    [first_station, last_station]
  end
end