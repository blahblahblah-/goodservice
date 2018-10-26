class StopTime < ActiveRecord::Base
  belongs_to :trip, foreign_key: "trip_internal_id", primary_key: "internal_id"
  belongs_to :stop, foreign_key: "stop_internal_id", primary_key: "internal_id"

  DAY_IN_MINUTES = 86400

  def self.soon(time_range: 60.minutes)
    if (Time.current + time_range).to_date == Date.current.tomorrow
      where("(departure_time > ? and departure_time < ?) or (departure_time > ? and departure_time < ?)",
        Time.current - Time.current.beginning_of_day,
        Time.current - Time.current.beginning_of_day + time_range.to_i,
        0,
        (Time.current - Time.current.beginning_of_day + time_range.to_i) % DAY_IN_MINUTES
      ).joins(trip: :schedule).merge(Schedule.today)
    elsif Time.current.hour < 4
      where("(departure_time > ? and departure_time < ?) or (departure_time > ? and departure_time < ?)",
        Time.current - Time.current.beginning_of_day,
        Time.current - Time.current.beginning_of_day + time_range.to_i,
        Time.current - Time.current.beginning_of_day + DAY_IN_MINUTES,
        Time.current - Time.current.beginning_of_day + DAY_IN_MINUTES + time_range.to_i
      ).joins(trip: :schedule).merge(Schedule.today)
    else
      where("departure_time > ? and departure_time < ?",
        Time.current - Time.current.beginning_of_day,
        Time.current - Time.current.beginning_of_day + time_range.to_i
      ).joins(trip: :schedule).merge(Schedule.today)
    end
  end

  def self.soon_by_route(route_id, direction, time_range: 60.minutes)
    soon(time_range: time_range).where(trips: {route_internal_id: route_id, direction: direction})
  end

  def self.scheduled_destinations_by_route(route_id, direction)
    StopTime.soon_by_route(route_id, direction).map(&:trip).map(&:destination).sort.uniq
  end
end