//main controller code
angular.module('todo').controller('mainController',['$scope', 'allTodoListDataFactory', function($scope,allTodoListDataFactory){
    
    //get data all from data factory and assign to a scope variable
    $scope.allData = allTodoListDataFactory;
    
    
    //create scope variable to hold data for the 3 stages
    //data to bind in to do list
    $scope.todoData = $scope.allData.todo_list;
    //data to bind in progress list
    $scope.progressData =  $scope.allData.inprogress_list;
    //data to bind in done list
    $scope.doneData =  $scope.allData.done_list;

    //defining scope object for all required totals
    //we wrap them inside $watch so that totals can be updated in real time
    $scope.$watch(function(){
        $scope.total = {
            todo: $scope.todoData.length,
            progress: $scope.progressData.length,
            done: $scope.doneData.length,
            all: function(){
                return (this.todo + this.progress + this.done);
            }
        }
    });
    
    //scope object for adding new project to 'to do list'
    $scope.newProject = {
        project: "",
        validate: false,
        addProject: function(valid){
            //check if entered value if valid
            if(valid){
                //add new project to todo list
                $scope.todoData.push({'title': this.project});
                //clear textfield
                this.project = "";
                //hide validation message
                this.validate = false;
            }else{
                //show validation message
                this.validate = true;
            }           
        }   
    }
    
    
}]);