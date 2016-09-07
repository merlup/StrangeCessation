
app.controller("QuestionCtrl", ['$scope', '$state',  '$stateParams', 'Question', 'Choices', 'Upload', '$location',  function($scope, $state, $stateParams, Question, Choices, Upload, $location) {


$scope.choice_amount =  this.choice_amount;


   $scope.$watch('choice_amount', function() {
         for(var i = 0; i <= $scope.choice_amount ; i++) {
    document.getElementById('selections_for_dropdown').innerHTML += `<input type="text" class="form-control" ng-model="question${[i]}" ></input>`;
   
  }

}, true);



$scope.createQuestion = function (file) {


$scope.choices = [ {'[body]' : this.choice0 } ,{ '[body]' : this.choice1 }, {'[body]' : this.choice2} ]

$scope.upload = Upload.upload({
          url: '/questions', 
          fields: {
            'question[content]' : this.content,
            'question[answer_type]' : this.answer_type,
            'question[choice_amount]' : this.choice_amount,
            'question[choices_attributes]' : $scope.choices,
            'question[image]' : file
          },
        file: file,
         sendFieldsAs: 'json'
      }).progress(function(evt) {
         console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
         console.log(data);
      });


}

$scope.questions = [];

var nav_menu = document.getElementById("nav_menu");

    Question.query().then(function (results) {
        $scope.questions = results;
      
    });

     if($state.$current == "dashboard.questions.new" || $state.$current == "dashboard.questions.show" || $state.$current == "dashboard.questions.edit" ) {
        nav_menu.style.visibility = "hidden";
     } 

   $scope.goBack = function() {

    $state.go("dashboard.questions");
    nav_menu.style.visibility = "visible";
   }

    $scope.deleteQuestion = function (question) {
        Question.$delete("questions/" + question.id);
        console.log("deleted" + question.id);
        $scope.questions.splice($scope.questions.indexOf(question), 1)
        
    };

}]);
