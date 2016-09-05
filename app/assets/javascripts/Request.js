var app = angular.module("StrangeCessation", ['ui.router', 'ngAnimate','templates' , 'rails']);

app.factory('Request', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/requests', name: 'request'});
}]);


app.factory('SliderImage', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/sliderimages', name: 'sliderimage'});
}]);

app.factory('Question', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/questions', name: 'question'}, {
 show: { method: 'GET' },
 update: { method: 'PUT', params: {id: '@id'} },
 delete: { method: 'DELETE', params: {id: '@id'} }
 });
}]);

app.factory('Users', ['railsResourceFactory',function(railsResourceFactory){
 return railsResourceFactory({url: '/users', name: 'user'});
}]);


app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('home', { url: '',  views: { 'main': { templateUrl: 'static_pages/home.html'}}})
    .state('dashboard', {  url: '/dashboard',  views: {'main': { templateUrl: 'dashboard', controller: 'RequestsCtrl'}}})
    .state('dashboard.sliderimages', { url: '/sliderimages',  views: {'panel': {templateUrl: 'sliderimages', controller: 'SliderCtrl'}}})
    .state('dashboard.sliderimages.new', { url: '/new',  views: {'sliderpanel':  {templateUrl: 'sliderimages/new.html', controller: 'SliderCtrl'}}})
    .state('dashboard.questions', {  url: '/questions',  views: {'panel': { templateUrl: 'questions', controller: 'QuestionCtrl'}}})
    .state('dashboard.questions.new', { url: '/new',  views: {'questionpanel': { templateUrl: 'questions/new', controller: 'QuestionCtrl'}}})
    .state('dashboard.questions.edit',  { url: '/:id/edit', views: {'questionpanel': { templateUrl: function($stateParams) {return `questions/${$stateParams.id}/edit`;}, controller: 'QuestionCtrl'}}})
    .state('dashboard.questions.show',  { url: '/:id', views: {'questionpanel': { templateUrl: function($stateParams) {return `questions/${$stateParams.id}`;}, controller: 'QuestionCtrl'}}})
    .state('dashboard.requests', { url: '/requests',  views: {'panel': { templateUrl: 'requests', controller: 'RequestsCtrl'}}})
    .state('dashboard.requests.detail',  { url: '/:id', views: {'requestspanel': { templateUrl: function($stateParams) {return `/requests/${$stateParams.id}`;}, controller: 'RequestsCtrl'}}})
    .state('dashboard.requests.detail.pdf', { url: '.pdf', views: { 'requestspanel': {  templateUrl: function($stateParams) {return `/requests/${$stateParams.id}.pdf`;}, controller: 'RequestCtrl'}}})
    .state('dashboard.requests.detail.edit',  { url: '/edit', views: {'requestspanel': { templateUrl: function($stateParams) {return `/requests/${$stateParams.id}/edit`;}, controller: 'RequestCtrl'}}})
    .state('users', { url: '/users', templateUrl: 'users.html', controller: 'UsersCtrl'})
    .state('/users/:id', { url: 'users_show.html', controller: 'UsersCtrl' });

    $locationProvider.html5Mode({ enabled: true, requireBase: false });

});

app.controller("RequestsCtrl", ['$scope', '$state', '$stateParams', 'Request',  '$location', '$http', function($scope,  $state, $stateParams, Request, $http, $location) {
    
    $scope.searching = true;
    $scope.requests = [];
    $scope.unread_requests = [];
    $scope.show_parent_panel = true;

    var nav_menu = document.getElementById("nav_menu");

    $scope.state = $state;

    Request.query({ id: 'id' }).then(function (results) {
        $scope.requests = results;
        $scope.searching = false;
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

app.controller("SliderCtrl", ['$scope', '$state', '$stateParams', 'SliderImage', function($scope, $stateParams, $state, SliderImage,  $location) {

$scope.sliderimages = SliderImage.query();
$scope.sliderimage = SliderImage.query();

SliderImage.query({id: 'id'}).then(function (results) {
    $scope.sliderimages = results;
    $scope.searching = false;
});

  $scope.createSliderImage = function () {
        new SliderImage({
            image: this.image 
        }).create().then(function(SliderImage) {
            $scope.image = '',
            $scope.silderimages.push(SliderImage);
           console.log(SliderImage);
       });
    }

}]);

app.controller("QuestionCtrl", ['$scope', '$state',  '$stateParams', 'Question', '$location',  function($scope, $stateParams, $state, Question, $location) {

$scope.searching = true;

$scope.questions = [];

    Question.query({ id: 'id' }).then(function (results) {
        $scope.questions = results;
        $scope.searching = false;
    });

     
    $scope.deleteQuestion = function (question) {
        Question.$delete("questions/" + question.id);
        console.log("deleted" + question.id);
        $scope.questions.splice($scope.questions.indexOf(question), 1)
        
    };

    $scope.createQuestion = function () {
        new Question({
            content: this.content,
            image: this.image 
        }).create().then(function(Question) {
            $scope.content = '',
            $scope.questions.push(Question);
           console.log(Question);
       });
    }


}]);


app.controller("UsersCtrl", ['$scope', '$http', 'Users', 'User', '$location',  function($scope, $http, Users, User, $location ) {
        $scope.users = Users.query();
    }
]);