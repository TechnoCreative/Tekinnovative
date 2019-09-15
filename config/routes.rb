Rails.application.routes.draw do
  devise_for :users
  get 'newsletters/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  
  root "home#index"
  match "*path", to: "home#index", via: :all
  resources :newsletters
  
end
