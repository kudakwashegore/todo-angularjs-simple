//this directive to check if enter key is pressed and then do the assigned action
//the directive's name in todoEnter and can be added in html as todo-enter
(function(){
    function todoEnter(){            
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                //check if key code is 13, for return keyboard key
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.todoEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    }
    
    
     //attach directive function to angular app
    angular
        .module('todo')
        .directive('todoEnter', todoEnter);
})();



