import React, { Component } from 'react';
import '../assets/css/check-in-restaurant-name-style.css';

class CheckInRestaurantName extends Component{
        render(){
            

            return (
                    <div className="restaurantTitle">{this.props.restaurantName}</div>
            )
        }

}

export default CheckInRestaurantName;