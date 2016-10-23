
angular.module('myApp')


        .controller('obtenerLocalCtrl', ['$scope','$rootScope','$location','$routeParams','AuthenticationService','localsService', function ($scope,$rootScope,$location,$routeParams,AuthenticationService,localsService) {
                $scope.Authenticated = AuthenticationService.isAuthenticated();
                if(!$scope.Authenticated){
                    $location.path('/index');
                    return;
                }
                $scope.logout = function(){
                    AuthenticationService.logout();
                    $location.path('/index');
                }
                
                $scope.key = $routeParams.key;
                if(typeof $rootScope.keyGoogle == 'undefined') $location.path('/localesMapa');
                $scope.googleKey = $rootScope.keyGoogle;
                
                $scope.obtenerLocal = function(){
                    localsService.addLocal($scope.key,$scope.zona,$scope.tel).then(function(data){
                        var result = data.data;
                        
                    },
                    function(error){
                        
                    })
                };
                
                
            }]);