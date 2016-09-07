app.controller("RequestsCtrl", ['$scope', '$state', '$stateParams', 'Request',  '$location', '$http', function($scope,  $state, $stateParams, Request, $http, $location) {
    

    $scope.requests = [];
    $scope.unread_requests = [];
    $scope.show_parent_panel = true;

    var nav_menu = document.getElementById("nav_menu");

    $scope.state = $state;

    Request.query({ id: 'id' }).then(function (results) {
        $scope.requests = results;
   
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
