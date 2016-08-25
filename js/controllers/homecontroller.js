//main controller code
(function(){
    
    function HomeController($scope,AllToDoListDataFactory){
        //get data all from data factory and assign to a scope variable
        $scope.allData = AllToDoListDataFactory.all();

        //defining scope object for all required totals
        //we wrap them inside $watch so that totals can be updated in real time
        $scope.$watch(function(){
            //create scope variable to hold data for the 3 stages
            //data to bind in to do list
            $scope.todoData =  $scope.allData.todo_list;
            //data to bind in progress list
            $scope.progressData =   $scope.allData.inprogress_list;
            //data to bind in done list
            $scope.doneData =   $scope.allData.done_list;
            
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
                    $scope.allData = AllToDoListDataFactory.all();
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
        
        $scope.ItemsSorted = function(listData,index){
            listData.splice(index, 1);
            AllToDoListDataFactory.orderChanged($scope.allData);
        }
        

    }
    
    //attach controller function to angular app
    angular
        .module('todo')
        .controller('HomeController',['$scope', 'AllToDoListDataFactory',HomeController]);    
})();
