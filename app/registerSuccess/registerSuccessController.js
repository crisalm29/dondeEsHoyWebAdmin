
angular.module('myApp')


        .controller('registerSuccessCtrl', ['$scope', '$rootScope', '$location', '$routeParams', 'AuthenticationService', 'localsService', function ($scope, $rootScope, $location, $routeParams, AuthenticationService, localsService) {
                $scope.Authenticated = AuthenticationService.isAuthenticated();
                if ($scope.Authenticated) {
                    $location.path('/main');
                    return;
                }


                

            }]);