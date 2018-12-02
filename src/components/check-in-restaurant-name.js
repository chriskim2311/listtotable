import React, { Component } from 'react';
import '../assets/css/check-in-restaurant-name-style.css';

class CheckInRestaurantName extends Component{
        render(){
            console.log("Props sent from reservation info ", this.props.restaurantName);

            return (
                    <div className="restaurantTitle">{this.props.restaurantName}</div>
            )
        }

}

export default CheckInRestaurantName;