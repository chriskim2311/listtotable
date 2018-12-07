import React, { Component, Fragment } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';
import CustomerInfo from './customer_info';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

class Waiting extends Component {
    render(){
        return(
            <Fragment>
                <RTopMenu/>
                <ListMenu/>
                <CustomerInfo/>
            </Fragment>
        )
    }
}
export default Waiting;
