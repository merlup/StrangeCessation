Rails.application.routes.draw do
  get 'sliderimages/new'

  get 'sliderimages/index'

  get 'sliderimages/show'

  get 'sliderimages/edit'
  get 'dashboard/requests' => 'requests#index'
  get 'dashboard/requests/:id' => 'requests#show'
  get 'dashboard/questions' => 'questions#index'
  get 'dashboard/questions/new' => 'questions#new'
  get 'dashboard/sliderimages' => 'sliderimages#index'
  get '/dashboard/questions/sliderimages' => 'sliderimages#index'
  get '/dashboard/sliderimages/new' => 'sliderimages#new'
  get '/dashboard/sliderimages/dashboard' => 'dashboard#index'
  get 'dashboard/questions/static_pages/home' => 'static_pages#home'
  get 'dashboard/questions/static_pages/dashboard' => 'static_pages#dashboard'
  get 'dashboard/requests/questions' => 'questions#index'
  get 'dashboard/static_pages/home' => 'static_pages#home'
  delete '/dashboard/requests/:id' => 'requests#destroy'
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
