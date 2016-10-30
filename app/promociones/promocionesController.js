
angular.module('myApp')


        .controller('promocionesCtrl', ['$scope', '$location', 'AuthenticationService', 'localsService', function ($scope, $location, AuthenticationService, localsService) {
                $scope.Authenticated = AuthenticationService.isAuthenticated();
                if (!$scope.Authenticated) {
                    $location.path('/index');
                    return;
                }
                $scope.logout = function () {
                    AuthenticationService.logout();
                    $location.path('/index');
                }
                $scope.promociones = [];
                $scope.misLocales = [];

                localsService.localsByEstab(1).then(
                        function (data) {
                            var result = data.data;
                            $scope.misLocales = result.result;
                        },
                        function (err) {

                        });

            }]);