Rails.application.routes.draw do
  namespace :api do
    resources :info, only: [:index]
  end
  root 'index#index'
end
