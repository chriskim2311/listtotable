import React, { Component } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';
import CheckInForm from './check-in-form';
class RCheckIn extends Component {
    render(){
        return(
            <div>
                <RTopMenu/>
                <ListMenu/>
                <CheckInForm/>
            </div>
            
        )
    }
}
export default RCheckIn;