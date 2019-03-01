Rails.application.routes.draw do
  namespace :api do
    resources :info, only: [:index]
    resources :routes, only: [:index]
    resources :stats, only: [:index]
    post '/slack', to: 'slack#index'
  end
  get '/oauth', to: 'oauth#index'
  get '/routes(/*id)', to: 'index#index'
  get '/boroughs(/*borough)(/*line)', to: 'index#index'
  get '/starred', to: 'index#index'
  get '/trains', to: 'index#index'
  root 'index#index'
end
