
angular.module('myApp')


        .controller('localesCtrl', ['$scope', '$location', 'AuthenticationService','establishmentService','localsService', function ($scope, $location, AuthenticationService,establishmentService,localsService) {
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
                
                
                localsService.localsByEstab(1).then(function(data){
                    var result = data.data;
                    $scope.misLocales = result.result;
                },
                function(err){
                    
                });

                establishmentService.establismentInfoById(1).then(function (data) {
                    var resultados = data.data;
                    if(resultados.valido){
                        $scope.establecimiento = resultados.result;
                    }
                    else{
                        
                    }

                }, function (err) {

                });



            }]);