
app.controller("MainCtrl", ['$scope', '$state', '$stateParams', 'SliderImage', function ($scope, $state, $stateParams, SliderImage) {

 $scope.sliderimages = [];

 $scope.imagesArray = [];

     SliderImage.query({id: 'id', path: 'path', image: 'image'}).then(function (results) {
        $scope.sliderimages = results;
        $scope.searching = false;
       
    });
}]);
