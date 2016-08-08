Rails.application.routes.draw do
  root 'static_pages#home'
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'
  get 'static_pages/home'
  resources :users
  resources :requests
  resources :layouts
end
