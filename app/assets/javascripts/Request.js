var app = angular.module("StrangeCessation", ['ui.router', 'ngResource']);

app.factory('Request', ['$resource',function($resource){
 return $resource('/requests.json', {},{
 query: { method: 'GET', isArray: true },
 create: { method: 'POST' }
 })
}]);

app.factory('Request', ['$resource', function($resource){
 return $resource('/requests/:id.json', {}, {
 show: { method: 'GET' },
 update: { method: 'PUT', params: {id: '@id'} },
 delete: { method: 'DELETE', params: {id: '@id'} }
 });
}]);

app.factory('Users', ['$resource',function($resource){
 return $resource('/users.json', {},{
 query: { method: 'GET', isArray: true },
 create: { method: 'POST' }
 })
}]);

app.factory('User', ['$resource', function($resource){
 return $resource('/users/:id.json', {}, {
 show: { method: 'GET' },
 update: { method: 'PUT', params: {id: '@id'} },
 delete: { method: 'DELETE', params: {id: '@id'} }
 });
}]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('home', { url: '',  views: { 'main': { templateUrl: 'static_pages/home.html'}}})
      .state('dashboard', { url: '/dashboard',  views: {'main': { templateUrl: 'dashboard', controller: 'RequestsCtrl'}}})
     .state('dashboard.sliderimages', { url: '',  views: {'panel': { templateUrl: function($stateParams) {return `/sliderimages.html`;}, controller: 'RequestsCtrl'}}})
     .state('dashboard.sliderimages.new', { url: '',  views: {'panel': { templateUrl: 'sliderimages/new.html', controller: 'RequestsCtrl'}}})
     .state('dashboard.questions', { url: '',  views: {'panel': { templateUrl: 'questions', controller: 'RequestsCtrl'}}})
     .state('dashboard.questions.new', { url: '',  views: {'panel': { templateUrl: 'questions/new.html', controller: 'RequestsCtrl'}}})
    .state('dashboard.requests', { url: '',  views: {'panel': { templateUrl: 'requests.html', controller: 'RequestsCtrl'}}})
    .state('dashboard.requests.detail',  { url: '/:id', templateUrl: function($stateParams) {return `requests/${$stateParams.id}`;}, controller: 'RequestController'})
    .state('requests.detail.pdf', { url: '.pdf', views: { 'requestpdf': {  templateUrl: function($stateParams) {return `/requests/${$stateParams.id}.pdf`;}, controller: 'RequestController'}}})
    .state('requests.detail.edit',  { url: '/edit', views: {'main2': { templateUrl: function($stateParams) {return `/requests/${$stateParams.id}/edit`;}, controller: 'RequestController'}}})
    .state('users', { url: '/users', templateUrl: 'users.html', controller: 'UsersCtrl'})
    .state('/users/:id', { url: 'users_show.html', controller: 'UsersCtrl' });

    $locationProvider.html5Mode({ enabled: true, requireBase: false });

});

app.controller("RequestsCtrl", ['$scope', '$state', '$stateParams', 'Request', '$location',  function($scope, $stateParams, $state, Request, $location) {
     

    $scope.requests = Request.query();
    $scope.unread_requests = [];
    $scope.request = Request.query();
    $scope.request_arr = [];

    $scope.requests.$promise.then(function (results) {
        angular.forEach(results, function (result) {
            result.active = true;
            $scope.request_arr.push(result);
            if(result.read == false) {
                $scope.unread_requests.push(result);
            }  
        });
    });



   for(var i = 0; i <= $scope.unread_requests.length; i++) {
    console.log($scope.unread_requests);
   }

  
    $scope.deleteRequest = function (request) {
        Request.delete({id: request.id})
        console.log("deleted" + request.id);
        $scope.requests.splice(request, 1)
        
    };

    var counter = 1; 
    var back_button = document.getElementById("back");
    var next_button = document.getElementById("next");
    
    $scope.nextPage = function() {
    $scope.requests = Request.query({page: counter +1}) 
    var page_max =  $scope.request_arr.length ;
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
    $scope.requests = Request.query({page: counter - 1})   
    counter -= 1 ;   

        if (counter <= 1) {
            back_button.style.visibility = "hidden" ;
            next_button.style.visibility = "visible" ;
        }  
    }


}]);

app.controller("RequestController", ['Request', '$scope', '$stateParams', RequestController]);

function RequestController( $scope, $stateParams, Request ) {
    	$scope.currentRequestId = $stateParams.request.id;
};

app.controller("UsersCtrl", ['$scope', '$http', 'Users', 'User', '$location',  function($scope, $http, Users, User, $location ) {
        $scope.users = Users.query();
    }
]);