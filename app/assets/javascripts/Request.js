var app = angular.module("StrangeCessation", ['ui.router', 'ngAnimate','templates' , 'rails', 'ngFileUpload' ]);

app.factory('Request', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/requests', name: 'request'});
}]);


app.factory('SliderImage', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/sliderimages', name: 'sliderimage'});
}]);

app.factory('Question', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/questions', name: 'question'});
}]);

app.factory('Users', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/users', name: 'user'});
}]);

app.factory('PriceSheetImage', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/price_sheet_images', name: 'price_sheet_image'});
}]);


app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('home', { url: '',  views: { 'main': { templateUrl: 'static_pages/home.html', controller: 'MainCtrl'}}})
    .state('dashboard', {  url: '/dashboard',  views: {'main': { templateUrl: 'dashboard', controller: 'RequestsCtrl'}}})
    .state('dashboard.sliderimages', { url: '/sliderimages',  views: {'panel': {templateUrl: 'sliderimages', controller: 'SliderCtrl'}}})
    .state('dashboard.sliderimages.new', { url: '/new',  views: {'sliderpanel':  {templateUrl: 'sliderimages/new.html', controller: 'SliderCtrl'}}})
    .state('dashboard.pricesheetimages', {  url: '/price_sheet_images',  views: {'panel': { templateUrl: 'price_sheet_images', controller: 'PriceSheetCtrl'}}})
    .state('dashboard.pricesheetimages.new', { url: '/new',  views: {'pricesheetpanel': { templateUrl: 'price_sheet_images/new', controller: 'PriceSheetCtrl'}}})
    .state('dashboard.questions', {  url: '/questions',  views: {'panel': { templateUrl: 'questions', controller: 'QuestionCtrl'}}})
    .state('dashboard.questions.new', { url: '/new',  views: {'questionpanel': { templateUrl: 'questions/new', controller: 'QuestionCtrl'}}})
    .state('dashboard.questions.edit',  { url: '/:id/edit', views: {'questionpanel': { templateUrl: function($stateParams) {return `questions/${$stateParams.id}/edit`;}, controller: 'QuestionCtrl'}}})
    .state('dashboard.questions.show',  { url: '/:id', views: {'questionpanel': { templateUrl: function($stateParams) {return `questions/${$stateParams.id}`;}, controller: 'QuestionCtrl'}}})
    .state('dashboard.requests', { url: '/requests',  views: {'panel': { templateUrl: 'requests', controller: 'RequestsCtrl'}}})
    .state('dashboard.requests.detail',  { url: '/:id', views: {'requestspanel': { templateUrl: function($stateParams) {return `requests/${$stateParams.id}`;}, controller: 'RequestsCtrl'}}})
    .state('dashboard.requests.detail.pdf', { url: '.pdf', views: { 'requestspanel': {  templateUrl: function($stateParams) {return `/requests/${$stateParams.id}.pdf`;}, controller: 'RequestCtrl'}}})
    .state('dashboard.requests.detail.edit',  { url: '/edit', views: {'requestspanel': { templateUrl: function($stateParams) {return `/requests/${$stateParams.id}/edit`;}, controller: 'RequestCtrl'}}})
    .state('users', { url: '/users', templateUrl: 'users.html', controller: 'UsersCtrl'})
    .state('/users/:id', { url: 'users_show.html', controller: 'UsersCtrl' });

    $locationProvider.html5Mode({ enabled: true, requireBase: false });

});

app.controller("MainCtrl", ['$scope', '$state', '$stateParams', 'SliderImage', function ($scope, $state, $stateParams, SliderImage) {

 $scope.sliderimages = [];

 $scope.imagesArray = [];

     SliderImage.query({id: 'id', path: 'path', image: 'image'}).then(function (results) {
        $scope.sliderimages = results;
        $scope.searching = false;
       
    });
}]);

  
app.controller("PriceSheetCtrl", ['$scope', '$state',  '$stateParams', 'PriceSheetImage', 'Upload', '$location',  function($scope, $state, $stateParams, PriceSheetImage, Upload, $location) {

$scope.createPriceSheetImage = function (file) {
console.log("We Did it");
$scope.upload = Upload.upload({
          url: '/price_sheet_images', 
          fields: {
            'price_sheet_image[image]' : file
          },
        file: file,
         sendFieldsAs: 'json'
      }).progress(function(evt) {
         console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
         console.log(data);
      });
}

$scope.price_sheet_images = [];

var nav_menu = document.getElementById("nav_menu");

    PriceSheetImage.query().then(function (results) {
        $scope.price_sheet_images = results;
      
    });

     if($state.$current == "dashboard.pricesheetimages.new") {
        nav_menu.style.visibility = "hidden";
     } 

   $scope.goBack = function() {
    
    
    PriceSheetImage.query().then(function (results) {
        $scope.price_sheet_images = results;
      
    });
    $state.go("dashboard.pricesheetimages");
    nav_menu.style.visibility = "visible";
   }

    $scope.deletePriceSheetImage = function (price_sheet_image) {
        PriceSheetImage.$delete("price_sheet_images/" + price_sheet_image.id);
        console.log("deleted" + price_sheet_image.id);
        $scope.price_sheet_images.splice($scope.price_sheet_images.indexOf(price_sheet_image), 1)
        
    };

}]);


app.controller("RequestsCtrl", ['$scope', '$state', '$stateParams', 'Request',  '$location', '$http', function($scope,  $state, $stateParams, Request, $http, $location) {
    

    $scope.requests = [];
    $scope.unread_requests = [];
    $scope.show_parent_panel = true;

    var nav_menu = document.getElementById("nav_menu");

    $scope.state = $state;

    Request.query({ id: 'id' }).then(function (results) {
        $scope.requests = results;
   
    });

     Request.query({ read: false }).then(function (results) {
        $scope.unread_requests = results;
        $scope.searching = false;
    });

     if($state.$current == "dashboard.requests.detail") {
        nav_menu.style.visibility = "hidden";
     } 

   $scope.closeDetail = function() {
    $state.go("dashboard.requests");
    nav_menu.style.visibility = "visible";
   }
     
    $scope.deleteRequest = function (request) {
        Request.$delete("requests/" + request.id);
        console.log("deleted" + request.id);
        $scope.requests.splice($scope.requests.indexOf(request), 1);
        
    };

    var counter = 1; 
    var back_button = document.getElementById("back");
    var next_button = document.getElementById("next");
    
    $scope.nextPage = function(request_total) {
    $scope.requests_per_page = Request.query({page: counter +1}).then(function (results) {
        $scope.requests = results;
        $scope.searching = false;
    });

    $scope.requests = Request.query({ id: 'id' });
    var page_max =  Math.round(request_total / 5);
    counter += 1 ; 
    
    back_button.style.visibility = "visible" ;

     if (counter == 0) {
            back_button.style.visibility = "hidden" ;
        }
    if (counter >= page_max ) {
        next_button.style.visibility = "hidden" ;
        }
   
    }   

    $scope.backPage = function() {
    $scope.requests_per_page = Request.query({page: counter - 1}).then(function (results) {
        $scope.requests = results;
        $scope.searching = false;
    }); 
    counter -= 1 ;   

        if (counter <= 1) {
            back_button.style.visibility = "hidden" ;
            next_button.style.visibility = "visible" ;
        }  
    }


}]);



app.controller("SliderCtrl", ['$scope', 'Upload', '$state', '$stateParams', 'SliderImage', 'Upload', '$location',  function($scope, Upload, $stateParams, $state, SliderImage, $location) {

$scope.sliderimages = [];
$scope.files = [];

$scope.createSliderImage = function (file) {

$scope.upload = Upload.upload({
          url: '/sliderimages', 
          fields: {
            'sliderimage[image]' : file
          },
        file: file,
         sendFieldsAs: 'json'
      }).progress(function(evt) {
         console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
         console.log(data);
      });


}

SliderImage.query({id: 'id'}).then(function (results) {
    $scope.sliderimages = results;
    $scope.searching = false;
});

      $scope.deleteSliderImage = function (sliderimage) {
        SliderImage.$delete("sliderimage/" + sliderimage.id);
        console.log("deleted" + sliderimage.id);
        $scope.sliderimages.splice($scope.sliderimages.indexOf(sliderimage), 1)
        
    };
}]);





app.controller("QuestionCtrl", ['$scope', '$state',  '$stateParams', 'Question', 'Upload', '$location',  function($scope, $state, $stateParams, Question, Upload, $location) {

$scope.createQuestion = function (file) {

$scope.upload = Upload.upload({
          url: '/questions', 
          fields: {
            'question[content]' : this.content,
            'question[image]' : file
          },
        file: file,
         sendFieldsAs: 'json'
      }).progress(function(evt) {
         console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
         console.log(data);
      });


}

$scope.questions = [];

var nav_menu = document.getElementById("nav_menu");

    Question.query().then(function (results) {
        $scope.questions = results;
      
    });

     if($state.$current == "dashboard.questions.new") {
        nav_menu.style.visibility = "hidden";
     } 

   $scope.goBack = function() {
    
    
    Question.query().then(function (results) {
        $scope.questions = results;
      
    });
    $state.go("dashboard.questions");
    nav_menu.style.visibility = "visible";
   }

    $scope.deleteQuestion = function (question) {
        Question.$delete("questions/" + question.id);
        console.log("deleted" + question.id);
        $scope.questions.splice($scope.questions.indexOf(question), 1)
        
    };

}]);


app.controller("UsersCtrl", ['$scope', '$http', 'Users', 'User', '$location',  function($scope, $http, Users, User, $location ) {
        $scope.users = Users.query();
    }
]);