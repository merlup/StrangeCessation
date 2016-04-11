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
    .state('home', { url: '',  views: { 'main@': { templateUrl: 'static_pages/home.html'}}})
    .state('quotes', { url: '/quotes',  views: {'main@': { templateUrl: 'quotes.html', controller: 'QuotesCtrl'}}})
    .state('quotes.detail',  { url: '/:id', views: {'fullquote@': { templateUrl: 'quotes/new.html', controller: 'QuotesController'}}})
    .state('quotes.detail.pdf', { url: '/:id.pdf', views: { 'quotepdf': { controller: 'QuotesCtrl'}}})
    .state('users', { url: '/users', templateUrl: 'users.html', controller: 'UsersCtrl'})
    .state('/users/:id', { url: 'users_show.html', controller: 'UsersCtrl' });

    // $urlRouterProvider.otherwise( function($injector, $location) {
    //     var $state = $injector.get("$state");
    //         $state.go("home");
    // })

    $locationProvider.html5Mode({ enabled: true, requireBase: false });

});

app.controller("QuotesCtrl", ['$scope', '$state', '$stateParams', 'Quotes', 'Quote', '$location',  function($scope, $stateParams, $state, Quotes, Quote, $location ) {
    $scope.quotes = Quotes.query();
    $scope.quote = Quote.query();
    $scope.$stateParams = $stateParams;
    $scope.$state = $state;
    var quotes = $scope.quotes;
    var quote = $scope.quote;


    $scope.logState = function() {
    	console.log($state);
    }

    var logState = $scope.logState ;

    $scope.showQuote = function (quote) {
        quote.visible = !quote.visible;
        logState();
    }

    $scope.deleteQuote = function (quote) {
        Quote.delete({id: quote.id})
        console.log("deleted" + quote.id);
    }

    if($state == 'quotes.detail.pdf') {
	    $scope.firePdfModal = function() {
	    	console.log('Fire Modal');
	    }
    }

    $scope.appendRequest = function appendRequest() {

    	var request_div = angular.module.document.getElementById('blue');
    	request_div.createElement('full_request');
    	request_div.body.appendChild('full_request');
    	var full_request = angular.module.document.getElementById('full_request');
    	full_request.style = 'position: absolute; background-color: grey';
    	full_request.innerHTML = '<div ui-view="fullquote"></div>';

    }

    var appendRequest = $scope.appendRequest;

}]);

app.controller("QuotesController", ['Quote', '$scope', '$stateParams', QuotesController]);
function QuotesController( $scope, $stateParams, Quote ) {
	$scope.currentQuoteId = $stateParams.quote.id;
};

app.controller("UsersCtrl", ['$scope', '$http', 'Users', 'User', '$location',  function($scope, $http, Users, User, $location ) {
        $scope.users = Users.query();
    }
]);