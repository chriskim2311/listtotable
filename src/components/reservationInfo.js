import React, { Component } from 'react';
import Header from './header';
import CheckInForm from './check-in-form';
import CheckInRestaurantName from "./check-in-restaurant-name";

class ReservationInfo extends Component{
    render (){
        return (
            <React.Fragment>
                <Header/>
                <CheckInRestaurantName/>
                <CheckInForm/>
            </React.Fragment>
        )
    }
}

export default ReservationInfo;

