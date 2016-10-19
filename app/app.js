'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngCookies',
    ,'ngSanitize',
])
        .config(['$httpProvider', function ($httpProvider) {
                $httpProvider.defaults.headers.common = {};
                $httpProvider.defaults.headers.post = {};
                $httpProvider.defaults.headers.put = {};
                $httpProvider.defaults.headers.patch = {};
            }
        ])

        .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');


                $routeProvider
                        .when('/index', {
                            templateUrl: 'index/indexView.html',
                            controller: 'indexCtrl'
                        })
                        .when('/adminLogin', {
                            templateUrl: 'adminLogin/adminLoginView.html',
                            controller: 'adminLoginCtrl'
                        })
                        .when('/register', {
                            templateUrl: 'register/registerView.html',
                            controller: 'registerCtrl'
                        })

                        .when('/main', {
                            templateUrl: 'main/mainView.html',
                            controller: 'mainCtrl'
                        })
                        .when('/locales', {
                            templateUrl: 'locales/localesView.html',
                            controller: 'localesCtrl'
                        })
                        .when('/localesMapa', {
                            templateUrl: 'localesMapa/localesMapaView.html',
                            controller: 'localesMapaCtrl'
                        });

                $routeProvider.otherwise({redirectTo: '/index'});
            }])



        /*.run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
         $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {
         
         if ('data' in next && 'authorizedRoles' in next.data) {
         var authorizedRoles = next.data.authorizedRoles;
         if (!AuthService.isAuthorized(authorizedRoles)) {
         event.preventDefault();
         $state.go($state.current, {}, {reload: true});
         $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
         }
         }
         var ea = AuthService.isAuthenticated();
         var otro = AuthService.getCorreo();
         if (AuthService.registrar()) {
         event.preventDefault();
         $state.go('registrar');
         } else
         if (!AuthService.isAuthenticated()) {
         if (next.name !== 'login') {
         event.preventDefault();
         $state.go('login');
         }
         }
         });
         });*/
        ;
