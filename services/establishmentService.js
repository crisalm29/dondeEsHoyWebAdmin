angular.module('myApp')
        .service('establishmentService', ['$http', function ($http) {
                var obtenerLocales = function (lat, long) {
                    var p = $http({
                        method: 'POST',
                        url: "http://kefon94-001-site1.etempurl.com/api/Establishments",
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


                var establismentInfoById = function (id) {
                    var p = $http({
                        method: 'POST',
                        url: "http://kefon94-001-site1.etempurl.com/Establishments/infoById",
                        data: {
                            id: id
                        }

                    });
                    return p.success(function (data) {
                        return data;
                    }).error(function (e) {

                    });
                }


                return {
                    obtenerLocales: obtenerLocales,
                    establismentInfoById: establismentInfoById
                };
            }]);