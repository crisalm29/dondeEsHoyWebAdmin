
angular
        .module('myApp')
        .service('googlePlacesService', ['$http',function ($http) {
            var obtenerLocales = function (lat, long) {
                var p = $http({
                    method: 'POST',
                    url: "http://kefon94-001-site1.etempurl.com/googlePlaces",
                    //url: "http://localhost:49986/googlePlaces",
                    data: {
                        lat: lat,
                        lng: long
                    }

                });
                return p.success(function (data) {
                    return data;
                }).error(function (e) {

                });
            };


            return {
                obtenerLocales: obtenerLocales
            };
        }]);