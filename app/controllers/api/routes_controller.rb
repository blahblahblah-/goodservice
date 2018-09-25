class Api::RoutesController < ApplicationController

  def index
    result = ScheduleProcessor.routes_info
    render json: result
  end
end