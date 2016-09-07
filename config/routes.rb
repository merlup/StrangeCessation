Rails.application.routes.draw do
  get 'choice/new'

  root 'static_pages#home'

#Request Routes
  get 'dashboard/requests' => 'requests#index'
  get 'dashboard/requests/:id' => 'requests#show'
  get 'dashboard/questions/requests' => 'requests#index'
  get 'dashboard/requests/:id/edit' => 'requests#edit'
  delete 'dashboard/requests/:id' => 'requests#destroy'
#Price Sheet Routes
get 'dashboard/price_sheet_images/new' => 'price_sheet_images#new'
post 'price_sheet_images/new',  to: 'price_sheet_images#create'
get 'dashboard/price_sheet_images' => 'price_sheet_images#index'
get 'dashboard/price_sheet_images/price_sheet_images' => 'price_sheet_images#index'
get 'dashboard/price_sheet_images/price_sheet_images/new' => 'price_sheet_images#new'
delete '/dashboard/price_sheet_images/:id' => 'price_sheet_images#destroy'

#Question Routes
  get 'dashboard/questions' => 'questions#index'
  get '/dashboard/sliderimages/questions'  => 'questions#index'
  get 'dashboard/questions/:id/edit' => 'questions#edit'
  get 'dashboard/questions/new' => 'questions#new'
   post 'questions/new',  to: 'questions#create'


#Slider Routes
  get 'dashboard/sliderimages' => 'sliderimages#index'
  get 'dashboard/questions/sliderimages' => 'sliderimages#index'
  get 'dashboard/sliderimages/new' => 'sliderimages#new'
  delete '/dashboard/sliderimage/:id' => 'sliderimages#destroy'
   post 'sliderimages',  to: 'sliderimages#create'


#Dashboard Routes
  get 'dashboard/sliderimages/dashboard' => 'dashboard#index'
  get 'dashboard/dashboard' => 'dashboard#index'
  get 'dashboard/questions/57/dashboard' => 'dashboard#index'
  get 'dashboard/price_sheet_images/dashboard' => 'dashboard#index'
  get '/dashboard/requests/dashboard' => 'dashboard#index'

#Static Routes
  get 'dashboard/questions/static_pages/home' => 'static_pages#home'
  get 'dashboard/questions/static_pages/dashboard' => 'static_pages#dashboard'
  get 'dashboard/static_pages/home' => 'static_pages#home'
  get 'dashboard/sliderimages/static_pages/home'  => 'static_pages#home'
 get '/static_pages/home' => 'static_pages#home'
  get '/dashboard/static_pages/home'=> 'static_pages#home'
  get '/dashboard/requests/static_pages/home' => 'static_pages#home'

#Question Routes
get 'dashboard/questions/57/questions' => 'questions#index'
  get 'dashboard/requests/questions' => 'questions#index'
  get 'dashboard/questions/:id' => 'questions#show'
   delete 'dashboard/questions/:id' => 'questions#destroy'
  delete 'dashboard/questions/:id' => 'questions#destroy'



  get    'login'   => 'sessions#new'
  post   'login'   => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'
  
 
  resources :users
  resources :dashboard
  resources :answers
  resources :sliderimages
  resources :questions
  resources :requests
   resources :price_sheet_images
  resources :layouts
end
