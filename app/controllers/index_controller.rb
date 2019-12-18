class IndexController < ApplicationController
  caches_action :index, expires_in: 2.seconds

  def index
  end
end
