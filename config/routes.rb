Rails.application.routes.draw do
  resources :characters
  resources :templates
  resources :users
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
end
