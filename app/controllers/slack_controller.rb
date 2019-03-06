class SlackController < ApplicationController
  caches_action :index, expires_in: 2.seconds

  def index
  end

  def help
  end

  def privacy
  end
end
