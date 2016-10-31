
angular.module('myApp')


        .controller('promocionesAgregarCtrl', ['$scope', '$location','Upload', 'AuthenticationService', 'localsService','promocionesService', function ($scope, $location,Upload, AuthenticationService, localsService,promocionesService) {
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
                $scope.promociones = [];
                $scope.misLocales = [];

                localsService.localsByEstab(1).then(
                        function (data) {
                            var result = data.data;
                            $scope.misLocales = result.result;
                        },
                        function (err) {

                        });

                $scope.todas = false;
                
                $scope.agregarPromo = function(){
                    var promo = $scope.promo;
                    var foto = $scope.file;
                    promocionesService.agregarPromo(promo).then(function(data){
                        
                    },
                    function(err){
                        
                    })
                }
                
                
                $scope.uploadFiles = function(img){
                    var img = img;
                }
            }]);