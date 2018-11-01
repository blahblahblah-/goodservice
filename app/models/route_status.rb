class RouteStatus < ActiveRecord::Base
  belongs_to :route, foreign_key: "route_internal_id", primary_key: "internal_id"
end