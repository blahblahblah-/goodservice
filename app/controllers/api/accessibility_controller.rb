class Api::AccessibilityController < ApplicationController

  def index
    result = Rails.cache.read("accessibility-info")
    expires_now
    render json: result
  end
end