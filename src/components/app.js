import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, {Component} from 'react';
import Test from './test';
import LandingPage from './landingPage';
import '../assets/css/landingPage.css';
import tfLogo from '../assets/images/logo.png';
import {Route} from 'react-router-dom';
import BusyHours from "./busy_hours"
import Geolocation from "./geolocation"
import CustomerMapPg from './customerMapPg';
import RTopMenu from './r_arrowAndMenu';



class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='tfContainer'>
                    <div className="tf">Table Finder</div>
                </div>
                <div className='clientContainer'>
                    <div className= "client" id='customer' >Customer</div>
                    <img className ="tfLogo" src={tfLogo}/>
                    <div className="client" id='restaurant'>Restaurant</div>
                    {/* <Geolocation/>
                    <BusyHours/> */}
                </div>
                <Route exact path="/" component={LandingPage} />
                <Route path="/customer-map" component={CustomerMapPg} />

                <Route path="/login" component={RTopMenu}/>
                
                


                {/* <div className="app">
                    <Test/>
                </div> */}
            </React.Fragment>

        )
    }
} 
export default App;
