'use strict';

angular.module('myApp.adminLogin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/adminLogin', {
    templateUrl: 'adminLogin/adminLoginView.html',
    controller: 'adminLoginCtrl'
  });
}])

.controller('adminLoginCtrl', [function() {

}]);