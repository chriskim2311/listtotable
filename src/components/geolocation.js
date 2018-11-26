import React, {Component} from 'react'
import axios from 'axios';


class Geolocation extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         inputValue: '' 
    //     }
    // }
    
// getLocation()
 componentDidMount() {
    // function getLocation() {
        // console.log(inputValue)
    var map;
    var service;
    var infowindow; 
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showRestaurants);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    
}
    function showRestaurants(position) {
        var latitude= position.coords.latitude; 
        var longitude= position.coords.longitude;
        console.log(latitude,longitude)
        

        var centerLocation = new google.maps.LatLng(latitude, longitude);
        console.log(centerLocation)
        map = new google.maps.Map(document.getElementById('map'),  {
            center: {lat:latitude, lng: longitude},
            zoom: 14
        });
    
        new google.maps.Marker({
            map: map,
            position: {lat:latitude, lng: longitude},
        });

        // var keyword = {this.props.inputValue}
        var request= {
            location: centerLocation,
            radius: '1500',
            type: ['restaurant'],
            keyword: ''
        }
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, restaurantIconRender);
      }
      
      function restaurantIconRender(results, status) {
        var bounds = new google.maps.LatLngBounds();
          console.log(results)
          initMap()
        // if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
              var placeId = String(results[i].place_id);
                console.log(placeId)


            axios.post('http://place.kim-chris.com/busy-hours', {
                
                place_id: placeId,
            }).then(resp => {
                console.log(resp)
                var date = new Date()
                var day  = date.getDay();
                var time = (date.getHours())-6;
                // debugger
                var busyHour = resp.data.data.week[day].hours[time].percentage
                var location = resp.data.data.location
                console.log(location)
                console.log(busyHour)
                    
                if(busyHour < 40) {
                    createMarkerGreen(location)

                }
                else if(busyHour > 41 && busyHour <75) {
                    createMarkerYellow(location)
                }
                else if(busyHour >76) {
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
                    var icon = {url: 'https://i.imgur.com/i9AQAax.png',
                    scaledSize: new google.maps.Size(25,25)};
                    // var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                      map: map,
                      icon :icon,
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
                    var icon = {url: "https://i.imgur.com/LkWlV0u.png",
                    scaledSize: new google.maps.Size(25,25)};
                    // var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                      map: map,
                      icon :icon,
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
                    var icon = {url: 'https://i.imgur.com/nnUcYpC.png',
                    scaledSize: new google.maps.Size(25,25)};
                    // var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                      map: map,
                      icon :icon,
                      position: place
                    });
            
                }


               
            })
          }

          
    }

        function initMap(){
        var origin1 = new google.maps.LatLng(33.634908, -117.74050670000001);
        // var origin2 = 'Greenwich, England';
        // var destinationA = 'Stockholm, Sweden';
        var destinationB = new google.maps.LatLng(33.826150,-117.911420);
        
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
          {
            origins: [origin1],
            destinations: [destinationB],
            travelMode: 'DRIVING',
            drivingOptions: {
                departureTime: new Date(Date.now()),  // for the time N milliseconds from now.
                trafficModel: 'bestguess'
              },
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            avoidHighways: false,
            avoidTolls: true,
          }, callback2);
        
        function callback2(response, status) {
            console.log(response)

        }
    }
      }
        render(){
            return (
                <div>
                    <div id="map"></div>
                  
                </div>
            )
        }
    }
    export default Geolocation
   




