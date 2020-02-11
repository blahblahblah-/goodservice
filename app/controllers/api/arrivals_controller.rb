class Api::ArrivalsController < ApplicationController

  def index
    result = Rails.cache.read("arrivals_info")
    expires_now
    render json: result
  end
end