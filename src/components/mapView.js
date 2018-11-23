import React from 'react';
import map from '../assets/images/Map.png';

function MapView(){

    return (
        <React.Fragment>
            <div className="mapBottomContainer">
                <img src={map}/>
            </div>
                  
        </React.Fragment>
    )
}

export default MapView;