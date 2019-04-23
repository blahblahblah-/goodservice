class Api::StatsController < ApplicationController

  def index
    expires_now
    result = ScheduleProcessor.stats_info
    render json: result
  end
end