Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
    devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  get 'newsletters/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  
  root "home#index"
  #match "*path", to: "home#index", via: :all
  resources :newsletters
  resources :articles
end