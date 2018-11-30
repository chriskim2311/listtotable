import axios from 'axios';

export function renderBusyTimes(restaurantType, retrieveRestaurantData, clearSearch) {
    const restaurantInput = restaurantType;
    console.log('PROPS:',restaurantType)
    var map;
    var service;
    var infowindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
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
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
            restaurantIconRender(results, status, retrieveRestaurantData, map);
        });
    }

    function restaurantIconRender(results, status, retrieveRestaurantData, map) {
        var bounds = new google.maps.LatLngBounds();
        console.log('is it doing the thing?', map)
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
                        createColoredMarker(map, location,'green')

                    }
                    else if (busyHour > 31 && busyHour < 59) {
                        createColoredMarker(map, location, 'yellow');
                    }
                    else if (busyHour > 60) {
                        createColoredMarker(map, location, 'red');
                    }

                    else {
                        createColoredMarker(map, location, 'red');
                    }
                    



                })
            }

        }
    }


    function createColoredMarker(map, place, color) {
        var image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };
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
        // var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            icon: icon,
            position: place
        });

    }

}
