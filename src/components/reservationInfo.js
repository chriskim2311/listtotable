import React, { Component } from 'react';
import Header from './header';
import CheckInForm from './check-in-form';

class ReservationInfo extends Component{
    render (){
        return (
            <React.Fragment>
                <Header/>
                    <div className="restaurantTitleBox">
                        <div className="restaurantTitle">Taco Sinaloa</div>
                    </div>
                <CheckInForm/>
            </React.Fragment>
        )
    }
}

export default ReservationInfo;

