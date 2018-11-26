import React, {Component} from 'react';
import Test from './test';
import LandingPage from './landingPage';
import '../assets/css/landingPage.css';
import tfLogo from '../assets/images/logo.png';
import {Route} from 'react-router-dom';
import CustomerMapPg from './customerMapPg';
import ReservationInfo from "./reservationInfo";

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={LandingPage} />
                <Route path="/customer-map" component={CustomerMapPg} />
                <Route path="/restaurant/login"/>
                <Route path="/reservation-info" component={ReservationInfo}/>
                {/* <div className="app">
                    <Test/>
                </div> */}
            </React.Fragment>
        )
    }
} 
export default App;
