
angular.module('myApp')


        .controller('promocionesAgregarCtrl', ['$scope', '$location', '$rootScope', 'AuthenticationService', 'localsService', 'promocionesService', function ($scope, $location, $rootScope, AuthenticationService, localsService, promocionesService) {
                $scope.Authenticated = AuthenticationService.isAuthenticated();
                if (!$scope.Authenticated) {
                    $location.path('/index');
                    return;
                }
                $scope.logout = function () {
                    AuthenticationService.logout();
                    $location.path('/index');
                }

                $scope.promo = {};
                $scope.fechas = {};
                $scope.promociones = [];
                $scope.misLocales = [];

                var establecimiento = parseInt(AuthenticationService.getEstablisment());
                localsService.localsByEstab(establecimiento).then(
                        function (data) {
                            var result = data.data;
                            $scope.misLocales = result.result;
                        },
                        function (err) {

                        });

                $scope.todas = false;

                $scope.agregarPromo = function () {
                    var promo = $scope.promo;
                    var foto = $scope.file;
                    var dateStart = new Date($scope.fechas.start_date);
                    var dateDue = new Date($scope.fechas.due_date);
                    var mesStart = parseInt(dateStart.getUTCMonth()) + 1;
                    var mesEnd = parseInt(dateDue.getUTCMonth()) + 1;
                    $scope.promo.start_date = dateStart.getUTCFullYear() + "-" + mesStart + "-" + dateStart.getUTCDate();
                    $scope.promo.due_date = dateDue.getUTCFullYear() + "-" + mesEnd + "-" + dateDue.getUTCDate();
                    $scope.promo.imagebase64 = "";
                    $scope.promo.is_general = ($scope.todas) ? 1 : 0;

                    promocionesService.agregarPromo(promo).then(function (data) {
                        var r = data.data;

                        if (r.result) {

                            $rootScope.msgCode = 1;
                            $location.path('/message');
                        } else {

                            $rootScope.msgCode = 2;
                            $location.path('/message');
                        }
                    },
                            function (err) {

                                $rootScope.msgCode = 2;
                                $location.path('/message');
                            })
                }


            }]);