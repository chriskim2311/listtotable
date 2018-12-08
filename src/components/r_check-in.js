import React, { Component, Fragment } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';
import rCheckInForm from './r_check_in_forms';

class RCheckIn extends Component {
    render(){
        return(
            <Fragment>
                <RTopMenu/>
                <ListMenu/>
                <rCheckInForm/>
            </Fragment>
        )
    }
}
export default RCheckIn;