class Schedule < ActiveRecord::Base
  has_many :calendar_exceptions, foreign_key: "schedule_service_id", primary_key: "service_id"
  scope :day, ->(day_of_the_week) { where("#{day_of_the_week} = 1")}

  def self.today
    Schedule.joins("LEFT OUTER JOIN calendar_exceptions ON schedules.service_id ="\
      "calendar_exceptions.schedule_service_id and calendar_exceptions.date = '#{Date.current}'"
      ).where("(calendar_exceptions.exception_type = 1 or "\
      "(#{Date::DAYNAMES[(Date.current).wday].downcase} = 1 and calendar_exceptions.exception_type is null) and
      start_date <= '#{Date.current}' and end_date > '#{Date.current}')")
  end
end