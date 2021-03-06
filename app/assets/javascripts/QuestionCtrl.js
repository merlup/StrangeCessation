
app.controller("QuestionCtrl", ['$scope', '$state',  '$compile', '$stateParams', 'Question', 'Choices', 'Upload', '$location',  function($scope, $state,  $compile, $stateParams, Question, Choices, Upload, $location) {
 

 $scope.input_ids = [];

  if($state.$current == "dashboard.questions.new" ) {
    $scope.answer_type = this.answer_type;

     $scope.$watch('choice_amount', function() {
        if($scope.answer_type  == "Dropdown") {
          document.getElementById('selections_for_dropdown').innerHTML = "";
            var mark_up = [];
                 for(var i = 0; i <= $scope.choice_amount - 1 ; i++) {
                  var model = `choice${[i]}`
                  var innerHT = `<input type="text" class="form-control" ng-model="${model}" id="${model}" ></input>`
                  mark_up.push(innerHT);
                  $scope.input_ids.push(model);
                }
                console.log(model + " " + mark_up);
                mark_up.forEach(function(x) {
                  $('#selections_for_dropdown').append($compile(x)($scope));
                  
                });

        };
  
        if($scope.answer_type  == "Radio") {
           document.getElementById('selections_for_radio').innerHTML = "";
            var mark_up = [];
                 for(var i = 0; i <= $scope.choice_amount - 1 ; i++) {
                  var model = `choice${[i]}`
                  var innerHT = `<input type="text" class="form-control" ng-model="${model}" id="${model}" ></input>`
                  mark_up.push(innerHT);
                  $scope.input_ids.push(model);
                }
                console.log(model + " " + mark_up);
                mark_up.forEach(function(x) {
                  $('#selections_for_radio').append($compile(x)($scope));
                });
        };
      }, true);

  
  }
         
        
$scope.choice_answers = [];
$scope.choices = [];
$scope.createQuestion = function (file) {

for(var i = 0; i < $scope.input_ids.length; i++) { 
  console.log($scope.input_ids[i]);
  var find_me = $scope.input_ids[i];
console.log("Find Me= " + find_me + `${find_me}`);
    var input_answer = document.getElementById(`${find_me}`).value;
    $scope.choice_answers.push(input_answer);
  }

  for(var i = 0; i < $scope.choice_answers.length; i++) { 
    console.log( $scope.choice_answers[i] )
    $scope.choices.push({'[body]' : $scope.choice_answers[i]}) 
  }


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
