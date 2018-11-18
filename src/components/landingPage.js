import React, { Component } from 'react';
import '../assets/css/landingPage.css';
import tfLogo from '../assets/images/logo.png';

class LandingPage extends Component{
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
            </React.Fragment>
        )
    }
}

export default LandingPage;  