class Api::RoutesController < ApplicationController

  def index
    result = Rails.cache.read("routes-info")
    expires_now
    render json: result
  end
end