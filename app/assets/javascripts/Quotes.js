 var app = angular.module("StrangeCessation", ['ui.router', 'ngResource']);

app.factory('Quotes', ['$resource',function($resource){
 return $resource('/quotes.json', {},{
 query: { method: 'GET', isArray: true },
 create: { method: 'POST' }
 })
}]);

app.factory('Quote', ['$resource', function($resource){
 return $resource('/quotes/:id.json', {}, {
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
    .state('home', { url: '', templateUrl: 'static_pages/home.html'})
    .state('quotes', { url: '/quotes', templateUrl: 'quotes.html', controller:   'QuotesCtrl'})
    .state('users', { url: '/users', templateUrl: 'users.html', controller:   'UsersCtrl'})
    .state('view_quote',{
     views: { 
     	'quote_opened': { 
     		url: 'quotes/:id',
     		templateUrl: '#show.html', 
     		controller: "QuotesCtrl"
     	}
     }}
     )
    .state('/users/:id', { url: 'users_show.html', controller: "UsersCtrl" });
    $urlRouterProvider.otherwise( function($injector, $location) {
        var $state = $injector.get("$state");
            $state.go("home");
    })
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
});

app.controller("QuotesCtrl", ['$scope', '$http', 'Quotes', 'Quote', '$location',  function($scope, $http, Quotes, Quote, $location ) {
    $scope.quotes = Quotes.query();
    $scope.quote = Quote.query();

    $scope.showQuote = function (quote) {
        quote.visible = !quote.visible;
    }
}]);
app.controller("UsersCtrl", ['$scope', '$http', 'Users', 'User', '$location',  function($scope, $http, Users, User, $location ) {
        $scope.users = Users.query();
    }
]);