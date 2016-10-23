
angular.module('myApp')


        .controller('adminLoginCtrl', ['$scope', '$location', '$rootScope', '$cookies', 'AuthenticationService', function ($scope, $location, $rootScope, $cookies, AuthenticationService) {


                $scope.Authenticated = AuthenticationService.isAuthenticated();
                if ($scope.Authenticated) {
                    $location.path('/locales');
                    return;
                }
                
                $scope.loginError = false;
                
                $scope.login = function login() {

                    $rootScope = (typeof $rootScope == 'undefined') ? {} : $rootScope;

                    AuthenticationService.login($scope.usuario, $scope.password).then(function (response) {
                        var result = response.data;
                        if (result.result) {
                            $rootScope.isAuthenticated = true;
                            AuthenticationService.SetCredentials($scope.usuario, $scope.password);
                            $location.path('/locales');
                        }
                        else{
                            $scope.loginError = true;
                        }
                        console.log(response);
                    }, function (err) {
                        

                    });
                    return;
                };

            }]);