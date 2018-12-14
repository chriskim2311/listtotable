import React, { Component } from 'react';
import '../../assets/css/listView.css'
import addButton from '../../assets/images/plus.png';
import { Link } from 'react-router-dom';
import { getRestaurantData } from './busyHours'
import ListViewPhotos from './listViewPhotos';


class ListView extends Component {
    state = {
        restaurants: null
    }
    async componentDidUpdate(prevProps) {
        const prevData = prevProps.retrieveRestaurantData;
        const data = this.props.retrieveRestaurantData;
        if ((!prevData && data) || ((prevData && data) && prevData.length !== data.length)) {
            const list = await this.buildRestaurantsList(data);
        }
    }

    async buildRestaurantsList(results) {
        const list = await Promise.all(results.map(async (current, index) => {
            let price = current.price_level;
            const address = current.vicinity;
            const name = current.name;
            const rating = current.rating;
            const places = current.place_id;
            const location = this.props.currentLocation
            const latLng = current.geometry.location;

            if (price >= 2) {
                if (price == 2) {
                    price = '$$'
                }
                else if (price == 3) {
                    price = '$$$'
                }
                else {
                    price = '$$$$'
                }
                const restaurantData = await getRestaurantData(places, latLng, location)
                const busyHour = restaurantData.busyHour
                const distance = restaurantData.distance
                var color = ''
                var iconUrl = null;

                if (busyHour < 30) {
                    color = 'green';
                } else if (busyHour > 31 && busyHour < 59) {
                    color = 'yellow';
                } else if (busyHour > 60) {
                    color = 'red';
                } else {
                    color = 'red';
                }
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
                return (
                    <div key={index} className="restaurantBubble">
                        <div className="headerTitle">{name}</div>
                        <div className="bottomInfo">
                            <div className="timeInfo"><img src={iconUrl} /></div>
                            <div className="restaurantInfoContainer">
                                <div className="restaurantInfo">
                                    <div className="starsDistanceInfo">
                                        <div className="stars"><span className="boldText">Stars: </span> {rating}</div>
                                        <div className="distance"><span className="boldText">Distance: </span>{distance} </div>
                                    </div>
                                    <div className="icons">
                                        <div className="dollarSigns">{price}</div>
                                        <Link to={`/reservation-info/${name}/${current.place_id}`} className="addButton">
                                            <img src={addButton} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="address"><span className="boldText">Address: </span> {address}</div>
                            </div>
                        </div>
                        <div className="bottomPicInfo carousel carousel-slider">
                            <ListViewPhotos mapRef={this.props.mapRef} placeId={places} />
                        </div>
                    </div>
                )
            }

            return null;
        }));

        this.setState({
            restaurants: list
        });
    }

    restaurantListRender() {
        const { restaurants } = this.state;
        var distanceCoords = []
        if (!restaurants) {
            return null;
        }
        if (distanceCoords == null) {
            return null;
        }

        return restaurants;
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
