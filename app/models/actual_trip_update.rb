class ActualTripUpdate < ActiveRecord::Base
  belongs_to :actual_trip
  has_one :delay
end