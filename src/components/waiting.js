import React, { Component, Fragment } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';
import CustometInfo from './customer_info';

class Waiting extends Component {
    render(){
        return(
            <Fragment>
                <RTopMenu/>
                <ListMenu/>
                <CustometInfo/>
            </Fragment>
        )
    }
}
export default Waiting;
