class Api::StatsController < ApplicationController

  def index
    expires_now
    result = Rails.cache.read("stats-info")
    render json: result
  end
end