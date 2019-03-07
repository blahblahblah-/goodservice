Rails.application.routes.draw do
  namespace :api do
    resources :info, only: [:index]
    resources :routes, only: [:index]
    resources :stats, only: [:index]
    post '/slack', to: 'slack#index'
    post '/slack/query', to: 'slack#query'
  end
  get '/oauth', to: 'oauth#index'
  get '/slack', to: 'slack#index'
  get '/slack/help', to: 'slack#help'
  get '/slack/privacy', to: 'slack#privacy'
  get '/slack/install', to: 'oauth#slack_install'
  get '/trains(/*id)', to: 'index#index'
  get '/boroughs(/*borough)(/*line)', to: 'index#index'
  get '/starred', to: 'index#index'
  root 'index#index'
end
