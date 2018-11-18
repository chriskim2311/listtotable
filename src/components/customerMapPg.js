import React, { Component } from 'react'; 
import '../assets/css/CustomerMapPg.css';
import map from '../assets/images/Map.png';

class CustomerMapPg extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="topContainer">
                    <div className="logoHeader">Table Finder</div>
                    <div className="foodSearchHeader">
                        <div className="foodSearchBar">
                            <form><input className="inputFood" type="text" value="" placeholder="Search for Food"/></form>
                        </div>
                        <div className="searchButton">
                            <button className="search btn-small">Search</button>
                        </div>
                        
                    </div>
                    <div className="legendHeader">
                        <div className="legendTimeContainer">
                            <div className="legendTime">
                                <div className="greenTime"></div>
                                <div className="yellowTime"></div>
                                <div className="redTime"></div>
                            </div>  
                        </div>
                        <div className="toggleDisplayContainer">
                            <div className="toggleDisplay">
                                <div className="mapButton">MAP</div>
                                <div className="listButton">LIST</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomContainer">
                    <img src={map}/>
                    </div>
            </React.Fragment>
        )
    }
}

export default CustomerMapPg;