

angular.module('myApp')

.controller('registerCtrl', ['$scope','$location','AuthenticationService',function($scope,$location,AuthenticationService) {
        
                $scope.Authenticated = AuthenticationService.isAuthenticated();
                if($scope.Authenticated){
                    $location.path('/main');
                    return;
                }
}]);