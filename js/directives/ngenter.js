//this directive to check if enter key is pressed and then do the assigned action
//the directive's name in ngEnter and can be added in html as ng-enter
angular.module('todo').directive('ngEnter', function () {    
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            //check if key code is 13, for return keyboard key
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});

