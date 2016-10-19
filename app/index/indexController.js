

angular.module('myApp')

        .controller('indexCtrl', ['$scope', '$rootScope', '$templateRequest', function ($scope, $rootScope, $templateRequest) {
                $scope.Authenticated = ($rootScope.isAuthenticated == 'undefined') ? false : $rootScope.isAuthenticated;
                $templateRequest('shareTemplates/nonAuthMenu.html').then(function(html){
                   console.log(html); 
                   $scope.menu = html;
                }).fail(function(data){
                    console.log(data);
                });

            }]);

