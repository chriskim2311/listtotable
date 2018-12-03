import React, { Component, Fragment } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';

class Seated extends Component {
    render(){
        return(
            <Fragment>
                <RTopMenu/>
                <ListMenu/>
                <h1>Seated List</h1>
            </Fragment>
            
        )
    }
}
export default Seated;