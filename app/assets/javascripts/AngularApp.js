var app = angular.module("StrangeCessation", ['ui.router', 'ngAnimate','templates' , 'rails', 'ngFileUpload' ]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('home', { url: '',  views: { 'main': { templateUrl: 'static_pages/home', controller: 'MainCtrl'}}})
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


app.controller("UsersCtrl", ['$scope', '$http', 'Users', 'User', '$location',  function($scope, $http, Users, User, $location ) {
        $scope.users = Users.query();
    }
]);