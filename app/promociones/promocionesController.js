
angular.module('myApp')


        .controller('mainCtrl', ['$scope','$location','AuthenticationService', function ($scope,$location,AuthenticationService) {
                $scope.Authenticated = AuthenticationService.isAuthenticated();
                if(!$scope.Authenticated){
                    $location.path('/index');
                    return;
                }
                $scope.logout = function(){
                    AuthenticationService.logout();
                    $location.path('/index');
                }
                $scope.ofertasActivas = [];
                $scope.misLocales = [];
                
                
            }]);