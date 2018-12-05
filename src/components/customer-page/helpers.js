import axios from 'axios';
import addButton from '../../assets/images/plus.png';
import { Link } from 'react-router-dom';

export function renderBusyTimes(restaurantType, retrieveRestaurantData, clearSearch) {
    const restaurantInput = restaurantType;
    console.log('PROPS:',restaurantType)
    var map;
    var service;
    var infowindow;
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // console.log("FIRSTPOSITION:", position)
            // retrieveRestaurantData(position),
            showRestaurants(position, retrieveRestaurantData,clearSearch)
            
        });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";

    }

    // function searchFlag(clearSearch) {
    //     this.setState= {
    //         search:true
    //     }
    //     console.log("FLAG:", this.state)
    // }
    function showRestaurants(position, retrieveRestaurantData,clearSearch) {
        
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
            keyword: restaurantInput
        }
        infowindow = new google.maps.InfoWindow();
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
            restaurantIconRender(results, status, retrieveRestaurantData, map, centerLocation);
        });
    }

    function restaurantIconRender(results, status, retrieveRestaurantData, map, centerLocation) {
        var bounds = new google.maps.LatLngBounds();
        retrieveRestaurantData(results, map, centerLocation);

        // console.log(results)

        for (var i = 0; i < results.length; i++) {
            var priceLevel = results[i].price_level

            if (priceLevel >= 2) {
                var placeId = String(results[i].place_id);
                var place = results[i]
                console.log("PLACEEEE:",place)


                axios.post('http://place.kim-chris.com/busy-hours', {

                    place_id: placeId,
                }).then(resp => {
                    console.log("placeeeee:", resp)
                    
                    var date = new Date()
                    var day = date.getDay();
                    var time = (date.getHours()) - 6;
                    var results = resp
                    // debugger
                    var busyHour = resp.data.data.week[day].hours[time].percentage
                    var location = resp.data.data.location
                    console.log(location)
                    console.log(busyHour)
                    var config = {
                        map, location, results, placeId
                    }

                    if (busyHour < 30) {
                        config.color = 'green';
                    } else if (busyHour > 31 && busyHour < 59) {
                        config.color = 'yellow';
                    } else if (busyHour > 60) {
                        config.color = 'red';
                    } else {
                        config.color = 'red';
                    }
                    createColoredMarker(config);
                });
            }
        }
    }

    function createColoredMarker(config) {
        const { map,location, results, color, placeId } = config;

        var iconUrl = null;

        switch(color) {
            case 'green':
                iconUrl = 'https://i.imgur.com/nnUcYpC.png';
                break;
            case 'yellow':
                iconUrl = 'https://i.imgur.com/LkWlV0u.png';
                break;
            case 'red':
                iconUrl = 'https://i.imgur.com/i9AQAax.png';
                break;
        }

        var icon = {
            url: iconUrl,
            scaledSize: new google.maps.Size(25, 25)
        };
        var marker = new google.maps.Marker({
            map: map,
            icon: icon,
            position: location
        });
        google.maps.event.addListener(marker, 'click', function() {
            var name = results.data.data.name
            var address = results.data.data.formatted_address

            infowindow.setContent(
       
      '<p>Name: ' + name + '</p>' +
      '<p>Address: ' + address + '</p>' +
      "<button>"+`<a href="/reservation-info/${name}/${placeId}">Check In!</button>`
      );
      infowindow.open(map, this);
        })
       
    }
}





