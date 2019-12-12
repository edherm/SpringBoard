Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :new, :show]
    resources :projects
    resource :sessions, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
