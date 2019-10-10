class Api::ArrivalsController < ApplicationController

  def index
    result = ScheduleProcessor.arrivals_info
    expires_now
    render json: result
  end
end