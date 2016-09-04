Rails.application.routes.draw do
  get 'sliderimages/new'

  get 'sliderimages/index'

  get 'sliderimages/show'

  get 'sliderimages/edit'

  root 'static_pages#home'
  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'
  post 'questions/new',  to: 'questions#create'
  get 'static_pages/home'
  resources :users
  resources :dashboard
  resources :answers
  resources :sliderimages
  resources :questions
  resources :requests
  resources :layouts
end
