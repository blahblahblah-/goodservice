class ServiceChange
  attr_accessor :direction, :stations_affected, :related_route, :affects_some_trains

  def initialize(direction, stations_affected)
    self.direction = direction
    self.stations_affected = stations_affected
    self.affects_some_trains = false
  end

  def first_station
    stations_affected.first || stations_affected.second
  end

  def last_station
    stations_affected.last || stations_affected.second_to_last
  end

  def begin_of_route?
    stations_affected.first.nil?
  end

  def end_of_route?
    stations_affected.last.nil?
  end

  def intermediate_stations
    stations_affected - [first_station, last_station]
  end

  def hash
    self.class.hash ^ self.direction.hash ^ self.stations_affected.first.hash ^ self.stations_affected.last.hash
  end

  def ==(other)
    self.class == other.class && self.direction == other.direction && self.stations_affected.first == other.stations_affected.first && self.stations_affected.last == other.stations_affected.last
  end

  def eql?(other)
    self == other
  end
end