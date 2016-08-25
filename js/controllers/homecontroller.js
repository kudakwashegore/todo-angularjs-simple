//main controller code
(function(){
    
    function HomeController($scope,AllToDoListDataFactory){
        //get data all from data factory and assign to a scope variable
        $scope.allData = AllToDoListDataFactory.all();

        
        //create scope variable to hold data for the 3 stages
        //data to bind in to do list
        $scope.todoData =  AllToDoListDataFactory.all().todo_list;
        //data to bind in progress list
        $scope.progressData =   AllToDoListDataFactory.all().inprogress_list;
        //data to bind in done list
        $scope.doneData =   AllToDoListDataFactory.all().done_list;

        //defining scope object for all required totals
        //we wrap them inside $watch so that totals can be updated in real time
        $scope.$watch(function(){
            $scope.total = {
                todo:  AllToDoListDataFactory.todoTotal(),
                progress: AllToDoListDataFactory.inprogressTotal(),
                done: AllToDoListDataFactory.doneTotal(),
                all: AllToDoListDataFactory.allTotal()
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
                    AllToDoListDataFactory.add(this.project);
                    //update UI
                    $scope.todoData =  AllToDoListDataFactory.all().todo_list;
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

    }
    
    
    angular
        .module('todo')
        .controller('HomeController',['$scope', 'AllToDoListDataFactory',HomeController]);    
})();
