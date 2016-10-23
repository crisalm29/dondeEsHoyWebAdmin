
angular.module('myApp')


        .controller('localesMapaCtrl', ['$scope', '$location', '$rootScope', 'googlePlacesService', 'AuthenticationService', 'localsService', function ($scope, $location, $rootScope, googlePlacesService, AuthenticationService, localsService) {


                $scope.Authenticated = AuthenticationService.isAuthenticated();
                if (!$scope.Authenticated) {
                    $location.path('/index');
                    return;
                }

                $scope.logout = function () {
                    AuthenticationService.logout();
                    $location.path('/index');
                }

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
                                        var modal = $('#myModal');
                                        $scope.local = this.local.name;
                                        var placeId = this.local.place_id;
                                        localsService.localByGoogleKey(this.local.place_id).then(function (data) {
                                            var result = data.data;
                                            var divBotones = $('#botonObtener');
                                            if (!result.valido) {
                                                var boton = angular.element('<a href="#!/obtenerLocal/' + placeId + '" type="button" class="btn btn-primary" >Obtener local</a>');
                                                boton.bind('click', function () {
                                                    $rootScope.keyGoogle = placeId;
                                                    modal.modal('hide');
                                                });
                                                divBotones.append(boton);
                                            } else {
                                                var localMsg1 = angular.element('<h4>Este local ya ha sido seleccionado</h4>');
                                                divBotones.append(localMsg1);
                                            }
                                        },
                                                function (error) {

                                                });
                                        var img = $('#modalImg');
                                        if (typeof this.local.photos != 'undefined') {
                                            var photos;
                                            if (this.local.photos.length >= 1) {
                                                photos = this.local.photos[0];
                                                if (typeof photos.html_attributions != 'undefined' && photos.html_attributions.length >= 1) {
                                                    var imgSrc = photos.html_attributions[0];
                                                    var svg = angular.element(imgSrc);
                                                    svg.text('Informacion de Google');
                                                    svg.attr('target', '_blank')
                                                    img.append(svg);
                                                }
                                            }

                                        }
                                        img.append()
                                        modal.css("margin-top", Math.max(0, ($(window).height() - modal.height())));
                                        modal.find('#myModalLabel').text(this.local.name);
                                        $('#myModal').modal('show');



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