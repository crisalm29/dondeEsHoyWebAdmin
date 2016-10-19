
angular.module('myApp')


        .controller('adminLoginCtrl', ['$scope','$location','$rootScope','AuthenticationService',function ($scope,$location,$rootScope,AuthenticationService) {
                
                
                
                $scope.login = function login() {
                    
                    $rootScope = (typeof $rootScope == 'undefined')? {} : $rootScope;
                    
                    $rootScope.isAuthenticated = true;
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/main');
                    return;
//                    AuthenticationService.Login($scope.username, $scope.password, function (response) {
//                        if (response.success) {
//                            AuthenticationService.SetCredentials(vm.username, vm.password);
//                            $location.path('/');
//                        } else {
//                            vm.dataLoading = false;
//                        }
//                    });
                };
                
            }]);