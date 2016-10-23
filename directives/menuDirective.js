angular.module('myApp')

        .directive('menuDirective', ['$cookies', function ($cookies) {
                return {
                    templateUrl: 'shareTemplates/authMenu.html'
                };

            }]);