import axios from 'axios';
import addButton from '../../assets/images/plus.png';
import { NavLink, withRouter, Link } from "react-router-dom";
import Fragment from 'react'
import '../../assets/css/helper.css';


export function renderBusyTimes(config, retrieveRestaurantData, loadingDisplay) {

    var retrieveRestaurantData = retrieveRestaurantData
    var map;
    var service;
    var infowindow;
    var queryPairs = {};

    getQueryParts()
    function getQueryParts() {

        window.location.href
            .slice(window.location.href.indexOf('?') + 1)
            .split('&')
            .forEach(pair => {
                var pairData = pair.split('=');
                queryPairs[pairData[0]] = pairData[1];
            });
        
        return queryPairs

    }

    showRestaurants(config, retrieveRestaurantData, loadingDisplay, queryPairs);
    function showRestaurants(config, retrieveRestaurantData, loadingDisplay) {
        const restaurantInput = config.restaurantType
        const position = config.position
        const locations = config.locations
        var latitude = parseFloat(queryPairs.lat)
        var longitude = parseFloat(queryPairs.long)
        var centerLocation = new google.maps.LatLng(latitude, longitude);

        // console.log("1", position, "2", locations, "STUFFFF", restaurantInput)
        // console.log(window.location.href)
        // var url_string = window.location.href //window.location.href
        // var url = new URL(url_string);
        // console.log(url.searchParams)
        // var latitude = url.searchParams.get("lat");
        // var longitude = url.searchParams.get("long");
        // console.log("LAT", latitude, "long", longitude)
        // getQueryParts()

        // function getQueryParts(){
        //     var queryPairs = {};
        //     window.location.href
        //       .slice( window.location.href.indexOf('?')+1)
        //       .split('&')
        //       .forEach( pair => { 
        //             var pairData = pair.split('=');
        //             queryPairs[pairData[0]] = pairData[1];
        //       });
        //       console.log(queryPairs)

        //       var latitude = queryPairs.lat
        //       var longitude = queryPairs.long
        //       var centerLocation = new google.maps.LatLng(latitude, longitude);
        //       return latitude, longitude, centerLocation

        // }

        // var latitude = queryPairs.lat
        // var longitude = queryPairs.long
        // var centerLocation = new google.maps.LatLng(latitude, longitude);


        // if(position == 0 && locations == undefined){ 
        //         var latitude = localStorage.getItem('latitude')
        //         var longitude = localStorage.getItem('longitude')
        //         console.log(latitude,longitude)
        //         var centerLocation = new google.maps.LatLng(latitude, longitude);
        //         console.log("THE CENTER", centerLocation)
        // }

        // if (position) {
        //     var latitude = position.lat || position.coords.latitude;
        //     var longitude = position.lng || position.coords.longitude;

        //     console.log(latitude, longitude)

        //     var centerLocation = new google.maps.LatLng(latitude, longitude);


        // }

        // if (locations) {
        //     var latitude = locations.lat;
        //     var longitude = locations.lng;
        //     console.log(latitude, longitude)
        //     var centerLocation = new google.maps.LatLng(latitude, longitude);

        // }

        // else  {
        //     if (navigator.geolocation) {
        //         navigator.geolocation.getCurrentPosition((position) => {
        //             var latitude = position.lat || position.coords.latitude;
        //             var longitude = position.lng || position.coords.longitude;
        //             var centerLocation = new google.maps.LatLng(latitude, longitude);
        //         })
        //     }

        // }



        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: latitude, lng: longitude },
            zoom: 13
        });

        new google.maps.Marker({
            map: map,
            position: { lat: latitude, lng: longitude },
        });

        var request = {
            location: centerLocation,
            radius: '2000',
            type: ['restaurant'],
            keyword: restaurantInput || ""
        }
        
        infowindow = new google.maps.InfoWindow({ maxWidth: 190 });
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
            restaurantIconRender(results, status, retrieveRestaurantData, map, centerLocation, loadingDisplay);
        });
    }

    function restaurantIconRender(results, status, retrieveRestaurantData, map, centerLocation, loadingDisplay) {
      console.log("RESULTS", results)
        if(results.length == 0) {
          alert("No Results Please Try Again!")
      }
      
      
      
        var bounds = new google.maps.LatLngBounds();
        retrieveRestaurantData(results, map, centerLocation);
        results = results.filter((restaurant) => {
            return restaurant.price_level >= 2;
        });
        let loadCount = 0;

        for (var i = 0; i < results.length; i++) {

            let placeId = String(results[i].place_id);
            let photo = results[i]['photos'][0].getUrl()
            axios.post('https://place.kim-chris.com/busy-hours', {
                place_id: placeId,
            }).then((resp) => {
                loadCount++;
                var date = new Date()
                var day = date.getDay();
                var time = (date.getHours()) - 6;
                if (resp.data.data.status === 'ok') {
                    var busyHour = resp.data.data.week[day].hours[time].percentage;
                }
                var location = resp.data.data.location;

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
                    loadingDisplay();
                }
            });
            // }
        }
    }

    function createColoredMarker(config) {
        const { map, location, resp, color, placeId, photo } = config;

        var iconUrl = null;

        switch (color) {
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
        google.maps.event.addListener(marker, 'click', function () {
            var name = resp.data.data.name
            var address = resp.data.data.formatted_address
            infowindow.setContent(
                '<div class="marker">' +
                '<div class="photoCheckInBox">' +
                `<img src='${photo}' class="photoMarker" >` +
                `<div> <a href="/reservation-info/${name}/${placeId}">` +
                `<button> Check In!</button>` +
                '</div>'+
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





