class Schedule < ActiveRecord::Base
  scope :day, ->(day_of_the_week) { where("#{day_of_the_week} = 1")}

  def self.today
    day(Date::DAYNAMES[Date.current.wday].downcase)
  end
end