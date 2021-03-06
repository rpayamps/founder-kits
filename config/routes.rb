Rails.application.routes.draw do
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :products, only: [:index, :show]

  
  get '/users', to: "users#index"
  get '/users/:id', to: "users#showone"
  post '/users/:id', to: "users#update"
  post "/signup", to: "users#create"
  post '/reviews', to: "reviews#create"
  delete '/reviews/:id', to: "reviews#destroy"
  patch '/users/:id', to: "users#updates"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
