import React, { Component, Fragment } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';
import CustomerInfo from './customer_info';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import "../assets/css/customer_info.css"

class Waiting extends Component {
    render(){
        return(


            <Fragment>
            <RTopMenu />
            <div className="TopContainer">
                <ListMenu />
            </div>
            <div className="bottomContainer">
                <CustomerInfo/>
            </div>
            </Fragment>
        )
    }
}
export default Waiting;
