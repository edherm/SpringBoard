Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :projects
    resources :todo_lists do
      resources :todos, only: [:create, :update, :destroy]
    end
    resources :todos, only: [:show]
    resource :sessions, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
