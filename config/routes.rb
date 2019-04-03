Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, default: :json do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index]
    resources :channels, only: [:create, :destroy, :update, :show, :index]
    resources :servers, only: [:create, :destroy, :update, :show, :index]
  end
  resources :servers, default: :json, only: :show
  root to: 'static_pages#root'
  mount ActionCable.server, at: '/channel'
  
end
