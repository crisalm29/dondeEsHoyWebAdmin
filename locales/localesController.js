
angular.module('myApp')


        .controller('localesCtrl', ['$scope', '$location', 'AuthenticationService','establishmentService', function ($scope, $location, AuthenticationService,establishmentService) {
                $scope.Authenticated = AuthenticationService.isAuthenticated();
                if (!$scope.Authenticated) {
                    $location.path('/index');
                    return;
                }
                $scope.logout = function () {
                    AuthenticationService.logout();
                    $location.path('/index');
                }

                establishmentService.establismentInfoById(1).then(function (data) {
                    var resultados = data.data;
                    if(resultados.valido){
                        $scope.establecimiento = resultados.result;
                    }
                    else{
                        
                    }

                }, function (err) {

                });

                $scope.misLocales = [];


            }]);