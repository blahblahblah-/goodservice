class CalendarException < ActiveRecord::Base
  belongs_to :schedule, foreign_key: "schedule_service_id", primary_key: "service_id"
end