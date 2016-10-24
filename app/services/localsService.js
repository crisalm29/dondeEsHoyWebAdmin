angular.module('myApp')
        .service('localsService', ['$http', function ($http) {
                var localByGoogleKey = function (key) {
                    var p = $http({
                        method: 'POST',
                        url: "http://kefon94-001-site1.etempurl.com/Locals/infoByGoogleKey",
                        data: {
                            google_key: key
                        }

                    });
                    return p.success(function (data) {
                        return data;
                    }).error(function (e) {

                    });
                };


                var addLocal = function (key,zone,tel) {
                    var p = $http({
                        method: 'POST',
                        url: "http://kefon94-001-site1.etempurl.com/Locals/addLocal",
                        data: {
                            "establishment": 1,
                            "google_key": key,
                            "zone": zone,
                            "telefono": tel
                        }

                    });
                    return p.success(function (data) {
                        return data;
                    }).error(function (e) {

                    });
                }
                
                var localsByEstab = function (id){
                    var p = $http({
                        method: 'POST',
                        url: "http://kefon94-001-site1.etempurl.com/Locals/infoByEstablishment",
                        data: {
                            establishment: id
                        }

                    });
                    return p.success(function (data) {
                        return data;
                    }).error(function (e) {

                    });
                };


                return {
                    localByGoogleKey: localByGoogleKey,
                    addLocal: addLocal,
                    localsByEstab: localsByEstab
                };
            }]);