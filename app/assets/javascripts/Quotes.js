var app = angular.module("QuotesApp", ['ngRoute', 'ngResource']);

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

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider.when('/quotes',{
			templateUrl: '/quotes.html.erb',
			controller: 'QuotesCtrl'
		});
		$routeProvider.when('/quotes/:id', {
			templateUrl: 'show.html.erb',
			controller: "QuotesCtrl"
		});
		$routeProvider.otherwise({
			redirectTo: '/quotes'
		});
	}
]);

app.controller("QuotesCtrl", ['$scope', '$http', 'Quotes', 'Quote', '$location',  function($scope, $http,Quotes, Quote, $location ) {
		$scope.quotes = Quotes.query();
	}
]);