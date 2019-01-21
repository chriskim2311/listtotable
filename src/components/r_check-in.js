import React, { Component, Fragment } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';
import RestaurantCheckInForm from './r_check_in_forms';


class RCheckIn extends Component {
    render(){
        return(
            <Fragment>
                <RTopMenu/>
                <ListMenu/>
                <RestaurantCheckInForm/>
            </Fragment>
            
        )
    }
}
export default RCheckIn;