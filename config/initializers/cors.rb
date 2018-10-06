Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:7700', '/\Ahttps://www.theweekendest.com/', '/\Ahttp://www.theweekendest.com/'
    resource '*',
      headers: :any,
      methods: %i(get)
  end
end