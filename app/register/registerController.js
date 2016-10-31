

angular.module('myApp')

        .controller('registerCtrl', ['$scope', '$location', '$rootScope', 'AuthenticationService', function ($scope, $location, $rootScope, AuthenticationService) {

                $scope.Authenticated = AuthenticationService.isAuthenticated();
                if ($scope.Authenticated) {
                    $location.path('/main');
                    return;
                }

                $scope.establishment = {};
                $scope.establishment_account = {};

                $scope.registrar = function () {
                    $scope.establishment.imagebase64 = "";
                    $scope.establishment.establishment_type = 2;


                    $scope.establishment_account.imagebase64 = "";
                    AuthenticationService.register($scope.establishment, $scope.establishment_account).then(function (data) {
                        var result = data.data;
                        if (result.result) {
                            $location.path('/registrySuccess');
                        } else {

                            $rootScope.msgCode = 2;
                            $location.path('/message');
                        }

                        console.log(data);
                    }, function (err) {
                            $rootScope.msgCode = 2;
                            $location.path('/message');
                    })
                };
                AuthenticationService.register()

            }]);