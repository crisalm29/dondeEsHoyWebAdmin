'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'index/indexView.html',
    controller: 'indexCtrl'
  });
}])

.controller('indexCtrl', [function() {

}]);