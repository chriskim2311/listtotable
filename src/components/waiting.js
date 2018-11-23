import React, { Component } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';

class Waiting extends Component {
    render(){
        return(
            <div>
                <RTopMenu/>
                <ListMenu/>
            </div>
        )
    }
}
export default Waiting;
