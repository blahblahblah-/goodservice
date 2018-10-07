require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Goodservice
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.time_zone = 'America/New_York'

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'localhost:7700', '/\Ahttps://www.theweekendest.com/', '/\Ahttp://www.theweekendest.com/'
        resource '*',
          headers: :any,
          methods: %i(get)
      end
    end
  end
end
