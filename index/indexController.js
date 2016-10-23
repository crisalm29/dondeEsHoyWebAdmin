

angular.module('myApp')

        .controller('indexCtrl', ['$scope', '$location', 'AuthenticationService', function ($scope, $location, AuthenticationService) {
                $scope.Authenticated = AuthenticationService.isAuthenticated();
                

            }]);

