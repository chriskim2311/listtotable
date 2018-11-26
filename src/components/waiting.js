import React, { Component } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';
import CustometInfo from './customer_info';

class Waiting extends Component {
    render(){
        return(
            <div>
                <RTopMenu/>
                <ListMenu/>
                <CustometInfo/>
            </div>
        )
    }
}
export default Waiting;
