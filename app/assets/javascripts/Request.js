var app = angular.module("StrangeCessation", ['ui.router', 'ngResource', 'pdf']);

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
    .state('requests', { url: '/requests',  views: {'main': { templateUrl: 'requests.html', controller: 'RequestsCtrl'}}})
    .state('requests.detail',  { 
        url: '/:id', 
        templateUrl: function($stateParams) {
                    return `/requests/${$stateParams.id}`;},
        controller: 'RequestController'
        })
    .state('requests.detail.pdf', { url: '.pdf', views: { 'requestpdf': {  templateUrl: function($stateParams) {return `/requests/${$stateParams.id}.pdf`;}, controller: 'RequestController'}}})
    .state('requests.detail.edit',  { url: '/edit', views: {'main2': { templateUrl: function($stateParams) {return `/requests/${$stateParams.id}/edit`;}, controller: 'RequestController'}}})
    .state('users', { url: '/users', templateUrl: 'users.html', controller: 'UsersCtrl'})
    .state('/users/:id', { url: 'users_show.html', controller: 'UsersCtrl' });

    $locationProvider.html5Mode({ enabled: true, requireBase: false });

});

app.controller("RequestsCtrl", ['$scope', '$state', '$stateParams', 'Request', '$location',  function($scope, $stateParams, $state, Request, $location ) {
     

    $scope.requests = Request.query();
    $scope.request = Request.query();
  
    $scope.deleteRequest = function (request) {
        Request.delete({id: request.id})
        console.log("deleted" + request.id);
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