class Api::RoutesController < ApplicationController

  def index
    result = ScheduleProcessor.routes_info
    expires_now
    render json: result
  end
end