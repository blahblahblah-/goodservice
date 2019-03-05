require "uri"
require "net/http"

class OauthController < ApplicationController

  SLACK_OAUTH_URI = "https://slack.com/api/oauth.access"

  def index
    code = params[:code]

    post_params = {
      client_id: ENV["SLACK_CLIENT_ID"],
      client_secret: ENV["SLACK_CLIENT_SECRET"],
      code: code
    }
    data = Net::HTTP.post_form(URI.parse(SLACK_OAUTH_URI), post_params)

    tracker.event(category: 'slack', action: 'oauth', label: 'auth')
    redirect_to ENV["SLACK_REDIRECT_URI"]
  end

  def slack_install
    tracker.event(category: 'slack', action: 'oauth', label: 'install')
    redirect_to ENV["SLACK_DIRECT_INSTALL_URI"]
  end

  private

  def tracker
    Staccato.tracker('UA-125010964-1', nil, ssl: true)
  end
end
