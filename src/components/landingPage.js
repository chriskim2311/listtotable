import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import '../assets/css/landingPage.css';
import tfLogo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

import { checkCurrentPosition, setCurrentPosition } from '../actions';

class LandingPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: '',
        }
    }

    componentDidMount() {
        // this.props.checkCurrentPosition();
        this.geolocation();
    }

   geolocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.props.setCurrentPosition(position)     
        })
    }
     else {
        x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    render() {  
        // this.geolocation()
        const { set } = this.props;
        console.warn(set)
        return (
            <Fragment> 
                <div className='tfContainer'>
                    <div className="tf">List To Table</div>
                </div>
                <div className='clientContainer'>
                    <Link className ="client" id="customer" to={set ? "/customer-map" : "/custom-location"}>Customer</Link>
                    <img className ="tfLogo" src={tfLogo}/>
                    <Link className ="client" id="restaurant" to="/login">Restaurant</Link>
                </div>
                }
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        set: state.position.set
    }
}

export default connect(mapStateToProps, {
    checkCurrentPosition,
    setCurrentPosition
})(LandingPage);  