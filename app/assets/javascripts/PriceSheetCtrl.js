  
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

