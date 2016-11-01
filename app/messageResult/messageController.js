
angular.module('myApp')


        .controller('messageCtrl', ['$scope', '$location', '$rootScope', '$cookies', 'AuthenticationService', function ($scope, $location, $rootScope, $cookies, AuthenticationService) {

                $scope.Authenticated = AuthenticationService.isAuthenticated();
                $scope.misLocales = [];
                if (!$scope.Authenticated) {
                    $location.path('/index');
                    return;
                }
                $scope.logout = function () {
                    AuthenticationService.logout();
                    $location.path('/index');
                }
                if (typeof $rootScope.msgCode == 'undefined' || $rootScope.msgCode == 0)
                    $location.path('/locales');
                $scope.message = $rootScope.msgCode;
                $rootScope.msgCode = 0;
                $scope.logout = function () {
                    AuthenticationService.logout();
                    $location.path('/index');
                }

            }]);