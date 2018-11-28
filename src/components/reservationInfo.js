import React, { Component } from 'react';
import CheckInForm from './check-in-form';
import CheckInRestaurantName from "./check-in-restaurant-name";
import Navigation from "./hamburgerAndBack"

class ReservationInfo extends Component{
    render (){
        return (
            <React.Fragment>
               <Navigation/>
                <CheckInRestaurantName/> 
                <CheckInForm/>
            </React.Fragment>
        )
    }
}

export default ReservationInfo;

