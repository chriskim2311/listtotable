import React, { Component } from 'react';
import '../assets/css/landingPage.css';
import tfLogo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

class LandingPage extends Component{
    render() {  
        debugger
        return (
            <React.Fragment> 
                <div className='tfContainer'>
                    <div className="tf">Table Finder</div>
                </div>
                <div className='clientContainer'>
                    <Link className ="client" id="customer" to="/customer-map">Customer</Link>
                    <img className ="tfLogo" src={tfLogo}/>
                    <Link className ="client" id="restaurant" to="/login">Restaurant</Link>

                </div>
            </React.Fragment>
        )
    }
}

export default LandingPage;  