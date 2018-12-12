import axios from 'axios';
import addButton from '../../assets/images/plus.png';
import { Link } from 'react-router-dom';
import '../../assets/css/helper.css';

export function renderBusyTimes(config, retrieveRestaurantData, loadingDisplay) {
   
//    const restaurantInput = config.restaurantType
//    const position = config.position
//    const locations = config.locations

    // const restaurantInput = restaurantType;
    // console.log('PROPS:',this.state.location)
    // console.log("RESULTS", locations)
    var retrieveRestaurantData = retrieveRestaurantData


    // console.log(config)
    var map;
    var service;
    var infowindow;
    
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         // console.log("FIRSTPOSITION:", position)
    //         // retrieveRestaurantData(position),
    //         showRestaurants(position, retrieveRestaurantData,clearSearch)
            
    //     });
    // } else {
    //     x.innerHTML = "Geolocation is not supported by this browser.";

    // }

    // function searchFlag(clearSearch) {
    //     this.setState= {
    //         search:true
    //     }
    //     console.log("FLAG:", this.state)
    // }
    showRestaurants(config, retrieveRestaurantData, loadingDisplay);
    function showRestaurants(config, retrieveRestaurantData, loadingDisplay){
        const restaurantInput = config.restaurantType
        const position = config.position
        const locations = config.locations
     
        if(position){
        var latitude = position.lat || position.coords.latitude;
        var longitude = position.lng || position.coords.longitude;
        var centerLocation = new google.maps.LatLng(latitude, longitude);
        // console.log(latitude, longitude)
        }
        if(locations){
            // var lat = results[0].geometry.location.lat();
            // var long = results[0].geometry.location.lng();
            // locations.lat = lat;
            // locations.lng = long;
            // console.log("LOCATIONS", locations)
            var latitude = locations.lat;
            var longitude = locations.lng;
            var centerLocation = new google.maps.LatLng(latitude, longitude);
            // console.log("COOORRDSSSS", latitude, longitude)
        }
        // var centerLocation = new google.maps.LatLng(latitude, longitude);
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
            keyword: restaurantInput || ""
        }
        infowindow = new google.maps.InfoWindow();
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
            restaurantIconRender(results, status, retrieveRestaurantData, map, centerLocation, loadingDisplay);
        });
    }
    function restaurantIconRender(results, status, retrieveRestaurantData, map, centerLocation, loadingDisplay) {
        var bounds = new google.maps.LatLngBounds();
        retrieveRestaurantData(results, map, centerLocation);

        console.log('RESUlTS', results)

        results = results.filter((restaurant) => {
            return restaurant.price_level >= 2;
        });

        let loadCount = 0;

        for (var i = 0; i < results.length; i++) {
            // var priceLevel = results[i].price_level

            // if (priceLevel >= 2) {
                var placeId = String(results[i].place_id);
                var place = results[i]
                
                // console.log("PLACEEEE:",place)
                let photo = results[i]['photos'][0].getUrl()
                
                
                axios.post('http://place.kim-chris.com/busy-hours', {

                    place_id: placeId,
                }).then( (resp) => {
                    loadCount++;
     
                    // console.log("placeeeee:", resp)
                    // console.log('Phootooooooos:', photo)
                    var date = new Date()
                    var day = date.getDay();
                    var time = (date.getHours()) - 6;
                    if (resp.data.data.status === 'ok') {
                        var busyHour = resp.data.data.week[day].hours[time].percentage;
                    }
                    var location = resp.data.data.location;
                    // console.log(location)
                    // console.log(busyHour)
                    var config = {
                        map, location, resp, placeId, photo
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

                    console.warn("This is our current loadCount ", loadCount);
                    if (loadCount === results.length) {
                        console.warn("We have all of our markers loaded ");
                        loadingDisplay();
                    }
                });
            // }
        }
    }

    function createColoredMarker(config) {
        const { map,location, resp, color, placeId, photo } = config;

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
            // var photo = photo
            // console.log('photo', photo)
            var name = resp.data.data.name
            var address = resp.data.data.formatted_address

            infowindow.setContent(
                '<div class="marker">' + 
                    '<div class="photoCheckInBox">' +
                        `<img src='${photo}' class="photoMarker" >` + 
                        `<button> <a href="/reservation-info/${name}/${placeId}">Check In!</button>` + 
                    '</div>' +
                    '<div class="infoBorder">' +
                        '<div class="infoContainer">' + 
                            '<span class="bold"> Name: ' + '</span>' + '<span>' + name + '</span>' +
                            '<p> <span class="bold"> Address: </span>' + address + '</p>' +
                        '</div>' +
                    '</div>' + 
                '</div>'       
      );
      infowindow.open(map, this);
        })
       
    }
}





