Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  
  root "home#index"
  match "/404", to: "erreurs#page_introuvable", via: :all
  match "/422", to: "erreurs#erreur_interne", via: :all
  match "/500", to: "erreurs#erreur_interne", via: :all
end
