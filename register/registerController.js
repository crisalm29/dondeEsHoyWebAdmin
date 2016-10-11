'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/registerView.html',
    controller: 'registerCtrl'
  });
}])

.controller('registerCtrl', [function() {

}]);