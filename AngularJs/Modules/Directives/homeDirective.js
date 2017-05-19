var homeController = angular.module("homeModule");
// create/define directive
var homeDirective = function () {
    return {
        restrict: "EAC",
        template: "<h1> Print a message</h1>"
    };
}
// register directive
homeModule.directive("homeDirective", [homeDirective]);