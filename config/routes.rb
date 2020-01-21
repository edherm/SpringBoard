Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :projects do 
      resources :todo_lists do
        resources :todos, only: [:index, :show, :create, :update, :destroy]
      end
      resources :messages
    end
    resource :sessions, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
