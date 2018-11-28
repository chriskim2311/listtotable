import React, { Component } from 'react'
import axios from 'axios';


class Geolocation extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         inputValue: '' 
    //     }
    // }

    // getLocation()
    componentDidMount() {
        var map;
        var service;
        var infowindow;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                showRestaurants(position, this.props.retrieveRestaurantData, this.props.handleSearchItem);
            });
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";

        }
        function showRestaurants(position, retrieveRestaurantData, handleSearchItem) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            // console.log(latitude, longitude)
            var centerLocation = new google.maps.LatLng(latitude, longitude);
            // console.log(centerLocation)
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: latitude, lng: longitude },
                zoom: 13
            });

            new google.maps.Marker({
                map: map,
                position: { lat: latitude, lng: longitude },
            });
            // console.log("HANDLE:", handleSearchItem)
            // var keyword = {this.props.inputValue}
            var request = {
                location: centerLocation,
                radius: '2000',
                type: ['restaurant'],
                keyword: ""
            }
            service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, (results, status) => {
                restaurantIconRender(results, status, retrieveRestaurantData);
            });
        }

        function restaurantIconRender(results, status, retrieveRestaurantData) {
            var bounds = new google.maps.LatLngBounds();
            retrieveRestaurantData(results);

            // console.log(results)
  
            for (var i = 0; i < results.length; i++) {
                var priceLevel = results[i].price_level

                if (priceLevel >= 2) {
                    var placeId = String(results[i].place_id);
                    // console.log(placeId)


                    axios.post('http://place.kim-chris.com/busy-hours', {

                        place_id: placeId,
                    }).then(resp => {
                        console.log(resp)
                        var date = new Date()
                        var day = date.getDay();
                        var time = (date.getHours()) - 6;
                        // debugger
                        var busyHour = resp.data.data.week[day].hours[time].percentage
                        var location = resp.data.data.location
                        console.log(location)
                        console.log(busyHour)

                        if (busyHour < 30) {
                            createMarkerGreen(location)

                        }
                        else if (busyHour > 31 && busyHour < 59) {
                            createMarkerYellow(location)
                        }
                        else if (busyHour > 60) {
                            createMarkerRed(location)
                        }

                        else {
                            createMarkerGreen(location)
                        }
                        function createMarkerRed(place) {
                            var image = {
                                url: place.icon,
                                size: new google.maps.Size(71, 71),
                                origin: new google.maps.Point(0, 0),
                                anchor: new google.maps.Point(17, 34),
                                scaledSize: new google.maps.Size(25, 25)
                            };
                            //   var color = {redTimer}
                            var icon = {
                                url: 'https://i.imgur.com/i9AQAax.png',
                                scaledSize: new google.maps.Size(25, 25)
                            };
                            // var placeLoc = place.geometry.location;
                            var marker = new google.maps.Marker({
                                map: map,
                                icon: icon,
                                position: place
                            });

                        }
                        function createMarkerYellow(place) {
                            var image = {
                                url: place.icon,
                                size: new google.maps.Size(71, 71),
                                origin: new google.maps.Point(0, 0),
                                anchor: new google.maps.Point(17, 34),
                                scaledSize: new google.maps.Size(25, 25)
                            };
                            //   var color = {yellowTimer}
                            var icon = {
                                url: "https://i.imgur.com/LkWlV0u.png",
                                scaledSize: new google.maps.Size(25, 25)
                            };
                            // var placeLoc = place.geometry.location;
                            var marker = new google.maps.Marker({
                                map: map,
                                icon: icon,
                                position: place
                            });

                        }
                        function createMarkerGreen(place) {
                            var image = {
                                url: place.icon,
                                size: new google.maps.Size(71, 71),
                                origin: new google.maps.Point(0, 0),
                                anchor: new google.maps.Point(17, 34),
                                scaledSize: new google.maps.Size(25, 25)
                            };
                            //   var color= <img src= {greenTimer}/>
                            var icon = {
                                url: 'https://i.imgur.com/nnUcYpC.png',
                                scaledSize: new google.maps.Size(25, 25)
                            };
                            // var placeLoc = place.geometry.location;
                            var marker = new google.maps.Marker({
                                map: map,
                                icon: icon,
                                position: place
                            });

                        }



                    })
                }

            }
        }


    }
    render() {
        // console.log("Props:", this.props)
        return (
            <div id="map" className={`mapBottomContainer ${this.props.map ? "" : "hidden"}`}></div>
        )
    }
}
export default Geolocation





