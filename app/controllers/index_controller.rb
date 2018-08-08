class IndexController < ApplicationController
  caches_action :index, expires_in: 2.minutes

  def index
    processor = ScheduleProcessor.new
    @routes = Route.all
    @troubled_routes = processor.troubled_routes
  end
end
