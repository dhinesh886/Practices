var homeController = angular.module("homeModule");

// create/define controller logic
var homeController = function ($scope, $location, homeService) {
    // viewmodel reference
    var vm = this;

    vm.Name = "Dhinesh";
    $scope.Name = "Kumar";
    vm.Names = [vm.Name, $scope.Name];

    var response = homeService.getAccountDetails()
    .then(
    function (response) {
        if (response != undefined) {
            vm.Name = 'Response : ' + response.name;
        }
    },
    function (response) {
        if (response != undefined) {
            vm.Name = 'Response : ' + response.name;
        }
    });

    $scope.RedirectToHome =function()
    {
        $location.path('/home');
    }
     
}
// register controller
homeModule.controller("homeController", ['$scope', '$location', 'homeService', homeController]);