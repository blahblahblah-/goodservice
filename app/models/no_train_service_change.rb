class NoTrainServiceChange < ServiceChange
  def applicable_to_routing?(routing)
    true
  end
end