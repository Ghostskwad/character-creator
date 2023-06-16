Rails.application.routes.draw do
  resources :wizards
  resources :rogues
  resources :druids
  resources :clerics
  resources :barbarians
  resources :bards
  resources :characters
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
end
