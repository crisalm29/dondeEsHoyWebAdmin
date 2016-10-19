
angular.module('myApp')


        .controller('localesMapaCtrl', ['$scope', '$route', 'googlePlacesService', function ($scope, $route, googlePlacesService) {

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {


                        var resultados = {};
                        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        var mapOptions = {
                            center: latLng,
                            zoom: 15,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
                        var mapElement = document.getElementById("map");
                        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

                        google.maps.event.addListenerOnce($scope.map, 'idle', function () {

                            var marker = new google.maps.Marker({
                                map: $scope.map,
                                animation: google.maps.Animation.DROP,
                                position: latLng
                            });
                            
                            googlePlacesService.obtenerLocales(position.coords.latitude, position.coords.longitude).then(function (data) {
                                resultados = data.data.result;
                                for (var i = 0; i < resultados.length; i++) {
                                    var lat = parseFloat(resultados[i].geometry.location.lat);
                                    var lon = parseFloat(resultados[i].geometry.location.lng);
                                    var coord = {lat: lat, lng: lon};
                                    var m4 = new google.maps.Marker({
                                        position: coord,
                                        flat: true,
                                        map: $scope.map
                                    });
                                    m4.local = resultados[i];
                                    m4.map = $scope.map;
                                    m4.addListener('click', function () {
                                        
                                        var infowindow = new google.maps.InfoWindow({
                                            content: this.local.name
                                        });
                                        infowindow.open(this.map, this);

                                    });
                                    m4.setMap($scope.map);
                                }


                            }, function (err) {

                            });
                            ;
                            $scope.$apply(function () {
                                $scope.position = position;
                            });
                        });
                    })
                }


            }]);