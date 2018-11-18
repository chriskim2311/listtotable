import React, {Component} from 'react';
import Test from './test';
import LandingPage from './landingPage';
import '../assets/css/landingPage.css';
import tfLogo from '../assets/images/logo.png';
import {Route} from 'react-router-dom';


class App extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='tfContainer'>
                    <div className="tf">Table Finder</div>
                </div>
                <div className='clientContainer'>
                    <div className= "client" id='customer'>Customer</div>
                    <img className ="tfLogo" src={tfLogo}/>
                    <div className="client" id='restaurant'>Restaurant</div>
                </div>
                {/* <div className="app">
                    <Test/>
                </div> */}
            </React.Fragment>
        )
    }
} 
export default App;
