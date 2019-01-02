class Api::StatsController < ApplicationController

  def index
    result = ScheduleProcessor.stats_info
    render json: result
  end
end