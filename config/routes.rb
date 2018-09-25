Rails.application.routes.draw do
  namespace :api do
    resources :info, only: [:index]
    resources :routes, only: [:index]
  end
  get '/routes(/*id)', to: 'index#index'
  get '/boroughs(/*borough)(/*line)', to: 'index#index'
  root 'index#index'
end
