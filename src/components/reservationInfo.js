import React, { Component } from 'react';
import CheckInForm from './check-in-form';
import CheckInRestaurantName from "./check-in-restaurant-name";
import Navigation from "./hamburgerAndBack"

class ReservationInfo extends Component{
    render (){
        console.log("Props from the linked component ", this.props);
        const { name, id } = this.props.match.params;

        console.log('Place ID:', id);

        return (
            <React.Fragment>
                <Navigation/>
                <CheckInRestaurantName restaurantName={name}/>
                <CheckInForm restaurantName={name} restaurantID={id}/>
            </React.Fragment>
        )
    }
}

export default ReservationInfo;

