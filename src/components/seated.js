import React, { Component } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';

class Seated extends Component {
    render(){
        return(
            <div>
                <RTopMenu/>
                <ListMenu/>
                <h1>Seated List</h1>
            </div>
            
        )
    }
}
export default Seated;