import React, { Component } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';
import ReservationInfo from './reservationInfo';
class RCheckIn extends Component {
    render(){
        return(
            <div>
                <RTopMenu/>
                <ListMenu/>
                <ReservationInfo/>
            </div>
            
        )
    }
}
export default RCheckIn;