import React, {Component} from 'react'
import axios from 'axios';

// navigator.geolocation.getCurrentPosition(success.bind(this), error);



class Geolocation extends Component{
// getLocation()
 componentDidMount() {
    // function getLocation() {
    var map;
    var service;
    var infowindow; 
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showRestaurants);
        } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    // }
    
    function showRestaurants(position) {
        var latitude= position.coords.latitude; 
        var longitude= position.coords.longitude;
        console.log(latitude,longitude)

        var centerLocation = new google.maps.LatLng(latitude, longitude);


        map = new google.maps.Map({
            // document.getElementById('map'), add this before the bracket 
            center: centerLocation,
            zoom: 12
        });
        var request= {
            location: centerLocation,
            radius: '1500',
            type: ['restaurant'],
            keyword: 'steak'
        }
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
      }
      
      function callback(results, status) {
          console.log(results)
          initMap()
        // if (status == google.maps.places.PlacesServiceStatus.OK) {
        //   for (var i = 0; i < results.length; i++) {
        //     var place = results[i];
        //     createMarker(results[i]);
        //   }
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
          // See Parsing the Results for
          // the basics of a callback function.
        }
    }








      }
    


    //     var type= 'american'
    //     console.log(latitude, longitude)
    //     const resp= await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=2000&type=restaurant&keyword=${type}&key=AIzaSyD7hQZInXf3Y5U9UMI_K5bmxfNiUro1cls`)
    //     console.log('item response:', resp)


    //     }
    // }

      


        render(){
            return (
                <div>
                    <h1 className="center">View To Do Item</h1>
                </div>
            )
        }
    }
    export default Geolocation
   



//     if (navigator.geolocation){
   
//      function success(position) {
//        var latitude  = position.coords.latitude;
//        var longitude = position.coords.longitude;
//        this.serverRequest =
//          axios.get(`https://api.darksky.net/forecast/APIKEY/`+latitude+`,`+longitude+`?units=auto`)
//            .then(result => {
//              this.setState({
//                daily: result.data.daily.data,
//                loading: false,
//                error: null
//              });
//            })
//          .catch(err => {
//            // Something went wrong. Save the error in state and re-render.
//            this.setState({
//              loading: false,
//              error: err
//            });
//          });
//      };
//      function error() {
//        console.log( 'geolocation error' )
//      };
//      navigator.geolocation.getCurrentPosition(success, error);
//     }
//    }
// }



