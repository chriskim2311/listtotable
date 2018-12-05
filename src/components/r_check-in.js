import React, { Component, Fragment } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';
import CheckInForm from './check-in-form';
class RCheckIn extends Component {
    render(){
        return(
            <Fragment>
                <RTopMenu/>
                <ListMenu/>
                <CheckInForm/>
            </Fragment>
            
        )
    }
}
export default RCheckIn;