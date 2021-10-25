Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resources :messages, only: [:show, :create, :update, :destroy]
    resources :todo_lists, only: [] do
      resources :todos, only: [:index]
    end
    resources :todos, only: [:show, :create, :update, :destroy]
    resources :projects do 
      resources :todo_lists
      resources :messages, only: [:index]
    end
    resource :sessions, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
