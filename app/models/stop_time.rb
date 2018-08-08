class StopTime < ActiveRecord::Base
  belongs_to :trip, foreign_key: "trip_internal_id", primary_key: "internal_id"
  belongs_to :stop, foreign_key: "stop_internal_id", primary_key: "internal_id"

  def self.soon
    where("departure_time > ? and departure_time < ?",
      Time.current - Time.current.beginning_of_day,
      Time.current - Time.current.beginning_of_day + 40.minutes.to_i
    ).joins(trip: :schedule).merge(Schedule.today)
  end
end