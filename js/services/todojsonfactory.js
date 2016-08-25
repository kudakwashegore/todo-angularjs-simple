//data service for the app. For testing purpose, we preload the data
//Here, we could send request to a server side api to get and post data
(function(){
    function AllToDoListDataFactory(){
        var ToDoData = {};
        
        //initialise local storage
        ToDoData.storage = new todoDataStore.Store("todo");
        
        //add new item to do list
        ToDoData.add = function(item){
            item = item || '';
            this.storage.save({'title': item});
        }
        
        //run when sort order changes and updated local storage
        ToDoData.orderChanged = function(sortedData){
            this.storage.orderChanged(sortedData);
        }
        
        //get al data from local storage
        ToDoData.all = function(){            
            return this.storage.findAll();
        }
        
        //get totals for all stages
        ToDoData.todoTotal = function(){
            return this.all().todo_list.length;
        }
        
        ToDoData.inprogressTotal = function(){
            return this.all().inprogress_list.length;
        }
        
        ToDoData.doneTotal = function(){
            return this.all().done_list.length;
        }
        
        //all total
        ToDoData.allTotal = function(){
            return (this.todoTotal() + this.inprogressTotal() + this.doneTotal());
        }
        
        return ToDoData;
    }
    
    
    angular
        .module('todo')
        .service('AllToDoListDataFactory', AllToDoListDataFactory);
    
})();
