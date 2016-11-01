
angular.module('myApp')


        .controller('promocionesCtrl', ['$scope', '$location', 'AuthenticationService', 'promocionesService', function ($scope, $location, AuthenticationService, promocionesService) {
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

                var establecimiento = parseInt(AuthenticationService.getEstablisment());
                promocionesService.promosByEstabl(establecimiento).then(
                        function (data) {
                            var result = data.data;
                            $scope.promociones = result.result;
                        },
                        function (err) {

                        });

            }]);