import React, { Component, Fragment } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';
import NotifiedCustomerInfo from './notifiedList';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

class Notified extends Component {
    render() {
        return (
            <Fragment>
                <div className="TopContainer">
                    <RTopMenu />
                    <ListMenu />
                </div>
                <div className="bottomContainer">
                    <NotifiedCustomerInfo />
                </div>
            </Fragment>
        )
    }
}
export default Notified;