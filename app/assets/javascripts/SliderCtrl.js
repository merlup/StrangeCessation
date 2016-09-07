
app.controller("SliderCtrl", ['$scope', '$state',  '$stateParams', 'SliderImage', 'Upload', '$location',  function($scope, $state,  $stateParams, SliderImage, Upload,  $location) {

$scope.sliderimages = [];
$scope.files = [];
var nav_menu = document.getElementById("nav_menu");

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




     if( $state.$current == "dashboard.sliderimages.new" ) {
        nav_menu.style.visibility = "hidden";
     } 

   $scope.goBack = function() {
    $state.go("dashboard.sliderimages");
    nav_menu.style.visibility = "visible";
   }

}]);
