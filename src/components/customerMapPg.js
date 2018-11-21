import React from 'react';
import SearchBar from './searchBar'; 
import map from '../assets/images/Map.png';

function CustomerMapPg() {
    return (
        <React.Fragment>
            <SearchBar/>
            <div className="bottomContainer">
                  <img src={map}/>
            </div>
        </React.Fragment>
    )
}

export default CustomerMapPg;