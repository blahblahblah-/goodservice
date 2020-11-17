class ReroutingServiceChange < ServiceChange
  def stations_enroute
    stations_affected
  end
end