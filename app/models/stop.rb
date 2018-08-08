class Stop < ActiveRecord::Base
  belongs_to :parent_stop, class_name: "Stop", foreign_key: "parent_stop_id", primary_key: "internal_id", optional: true
  has_many :stop_times, foreign_key: "stop_internal_id", primary_key: "internal_id"

  def current_headways
    times = stop_times.soon.map(&:departure_time)
    times << Time.current - Time.current.beginning_of_day if times.size == 1
    times.sort.each_cons(2).map { |a,b| (b - a) / 60 }
  end

  def current_headways_by_route
    data = stop_times.soon.includes(trip: :route).group_by { |time| time.trip.route.internal_id }
    Hash[
      data.map do |k, st|
        times = st.map(&:departure_time)
        times << Time.current - Time.current.beginning_of_day if times.size == 1
        [k, times.sort.each_cons(2).map { |a,b| (b - a) / 60 }]
      end
    ]
  end
end