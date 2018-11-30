import React, { Component } from 'react';
import '../../assets/css/listView.css'
import greenTimer from '../../assets/images/greenTime.png';
import redTimer from '../../assets/images/redTime.png';
import yellowTimer from '../../assets/images/yellowTime.png';
import addButton from '../../assets/images/plus.png';
import { Link } from 'react-router-dom';


class ListView extends Component {
    // constructor(props) {
    //     super(props)

    //     console.log('propsss:', props)
    // }


    getGooglePhotos = (mapRef, placeID) => {
        var service;
        var request = {
            placeId: placeID
        }
        service = new google.maps.places.PlacesService(mapRef);
        service.getDetails(request, (results, status) => {
            retrieveRestaurantPhoto(results, status)
        });
        function retrieveRestaurantPhoto(results, status) {
            console.log('Photos', results.photos);
        }
        
    }




    restaurantListRender() {
        //     if(coords == null) {
        //         return
        //     }

        //     var coords = this.props.retrieveRestaurantData
        //     var locations = coords.map((current) => {
        //         const latLng= current.geometry.location;

        //         navigator.geolocation.getCurrentPosition((position) => {
        //             success(position);
        //          });
        //          function success(position, latLng){
        //          var latitude = position.coords.latitude;
        //          var longitude = position.coords.longitude;

        //          var origin1 = new google.maps.LatLng(latitude,longitude);
        //          var destination1 = new google.maps.LatLng(destination);

        //          var service = new google.maps.DistanceMatrixService();
        //          service.getDistanceMatrix(
        //              {
        //                  origins: [origin1],
        //                  destinations: [destination1],
        //                  travelMode: 'DRIVING',
        //                  drivingOptions: {
        //                      departureTime: new Date(Date.now()),  // for the time N milliseconds from now.
        //                      trafficModel: 'bestguess'
        //                  },
        //                  unitSystem: google.maps.UnitSystem.IMPERIAL,
        //                  avoidHighways: false,
        //                  avoidTolls: true,
        //              }, callback2);

        //          function callback2(response, status) {
        //              return response

        //          }
        //      }
        //  }  











        // debugger;
        var results = this.props.retrieveRestaurantData
        console.log('RESULTS:', results)
        if (results == null) {
            return
        }



        
        const restaurants = results.map((current) => {
            const price = current.price_level;
            const address = current.vicinity;
            const name = current.name;
            const rating = current.rating;
            const places = current.place_id;

            // const destination = current.geometry.location

            if (price >= 2) {
                this.getGooglePhotos(this.props.mapRef, places);
                return (
                    <div className="restaurantBubble">
                        <div className="headerTitle">{name}</div>
                        <div className="bottomInfo">
                            <div className="timeInfo"><img src={greenTimer} /></div>
                            <div className="restaurantInfoContainer">
                                <div className="restaurantInfo">
                                    <div className="starsDistanceInfo">
                                        <div className="stars"><span className="boldText">Stars: </span> {rating}</div>
                                        <div className="distance"><span className="boldText">Distance: </span> </div>
                                    </div>
                                    <div className="icons">
                                        <div className="dollarSigns">{price}$</div>
                                        <Link to="/reservation-info" className="addButton">
                                            <img src={addButton} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="address"><span className="boldText">Address: </span> {address}</div>
                            </div>
                        </div>
                    </div>
                )


            }
        });

        return restaurants
    }



    render() {

        return (
            <div className={`listBottomContainer ${this.props.list ? "" : "hidden"}`}>
                {this.restaurantListRender()}
            </div>

        )
    }
}


export default ListView; 