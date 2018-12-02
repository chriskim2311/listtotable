import React, { Component } from 'react';
import '../assets/css/landingPage.css';
import tfLogo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';


class LandingPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: ''
            
        }
    }



   geolocation= () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState= {
                currentLocation: position
            
         } })
        }
     else {
        x.innerHTML = "Geolocation is not supported by this browser.";

    }
    console.log("current",this.state.currentLocation)
}
    render() {  
        this.geolocation()
    
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