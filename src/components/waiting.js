import React, { Component } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';

class Waiting extends Component {
    render(){
        return(
            <div>
                <RTopMenu/>
                <ListMenu/>
                <h1>Waiting List</h1>
            </div>
        )
    }
}
export default Waiting;
