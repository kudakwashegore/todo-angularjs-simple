//data service for the app. For testing purpose, we preload the data
//Here, we could send request to a server side api to get and post data
angular.module('todo').service('allTodoListDataFactory', function(){
    return {
            //property to hold todo data
            'todo_list':[
                {
                    'title':"Project 1"
                },
                {
                    'title':"Project 2"
                },
                {
                    'title':"Project 3"
                },
                {
                    'title':"Project 4"
                },
                {
                    'title':"Project 5"
                }
                       
            ],
            //column to hold data in progress
            'inprogress_list':[
                {
                    'title':"Project 6"
                },
                {
                    'title':"Project 7"
                },
                {
                    'title':"Project 8"
                }
            ],
            //property to hold done list data
            'done_list':[
                {
                    'title':"Project 9"
                },
                {
                    'title':"Project 10"
                },
                {
                    'title':"Project 11"
                },
                {
                    'title':"Project 12"
                },
                {
                    'title':"Project 13"
                }
            ]
        };
})