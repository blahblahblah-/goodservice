class Trip < ActiveRecord::Base
  belongs_to :route, foreign_key: "route_internal_id", primary_key: "internal_id"
  belongs_to :schedule, foreign_key: "schedule_service_id", primary_key: "service_id"
end