var homeModule = angular.module("homeModule");

// creare/define service
var homeService = function ($http, $q) {
    
    this.getAccountDetails = function()
    {
        var defered = $q.defer();

        var successCallback = function (response)
        {
            response.status = "Success";
            return defered.resolve(response.data);
        }
        var errorCallback = function (response) {
            return defered.reject({ status: "Error" });
        }

        $http.get("https://api.github.com/users/dhineshkumarm")
        .then(
            successCallback,
            errorCallback);

        return defered.promise;
    }
}

// register service
homeModule.service("homeService", ['$http', '$q', homeService]);