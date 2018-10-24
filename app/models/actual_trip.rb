class ActualTrip < ActiveRecord::Base
  has_many :actual_trip_updates, -> { order 'timestamp'}

  def latest_estimated_arrival_time
    actual_trip_updates.last&.new_arrival_estimate || initial_arrival_estimate
  end

  def latest_update_delay
    last_update = actual_trip_updates.last
    return 0 unless last_update
    return 0 if last_update.updated_at < Time.current - 5.minutes

    last_update.diff / 60
  end

  def latest_update_next_stop
    actual_trip_updates.last&.next_stop
  end

  def log_delay!(delay)
    delay_obj = actual_trip_updates.last.delay || actual_trip_updates.last.build_delay
    delay_obj.delayed_minutes = delay / 60
    delay_obj.save!
  end
end