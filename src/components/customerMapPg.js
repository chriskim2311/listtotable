import React, { Component } from 'react'; 
import '../assets/css/customerMapPg.css';
import map from '../assets/images/Map.png';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import greenTimer from '../assets/images/greenTime.png';
import redTimer from '../assets/images/redTime.png';
import yellowTimer from '../assets/images/yellowTime.png';
import Header from './header';

class CustomerMapPg extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="topContainer">
                    <Header/>
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
                                <img className="greenTime" src={greenTimer}/>
                                <img className="yellowTime" src={redTimer}/>
                                <img className="redTime" src={yellowTimer}/>
                            </div>  
                            <div className="legendDetails">
                                <div className="clockInfo">0-30</div>
                                <div className="clockInfo">30-60</div>
                                <div className="clockInfo">60+</div>
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