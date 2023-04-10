Rails.application.routes.draw do
  resources :characters
  resources :templates
  resources :users
  get '/hello', to: 'application#hello_world'
end
