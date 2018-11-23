import React, { Component } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';

class RCheckIn extends Component {
    render(){
        return(
            <div>
                <RTopMenu/>
                <ListMenu/>
                <h1>Check In Form</h1>
            </div>
            
        )
    }
}
export default RCheckIn;