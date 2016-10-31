angular.module('myApp')

        .service('promocionesService', ['$http', function ($http) {
                


                var agregarPromo = function (promo) {
                    var p = $http({
                        method: 'POST',
                        url: "http://kefon94-001-site1.etempurl.com/PromosEvents/addNewPromoEvent",
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
                    agregarPromo: agregarPromo
                };
            }]);