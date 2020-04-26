class MoveAShuttleToAl < ActiveRecord::Migration[5.2]
  def change
    # Jay St—MetroTech
    jay = 'A41'

    # Lefferts Blvd
    lefferts = 'A65'

    Trip.where(route_internal_id: 'A').each do |t|
      stops = StopTime.where(trip_internal_id: t.internal_id).pluck(:stop_internal_id).map { |s| s[0..2] }

      if !stops.include?(jay) && stops.include?(lefferts)
        t.route_internal_id = 'AL'
        t.save!
        puts "New trip #{t.internal_id} saved!"
      end
    end
  end
end
