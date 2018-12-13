import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/landingPage.css';
import logo from '../assets/images/list-to-table-logo-white.png';
import { Link } from 'react-router-dom';


class LandingPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: ''
            
        }
    }

//    geolocation= () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position) => {
//             this.setState= {
//                 currentLocation: position
            
//          } })
//         }
//      else {
//         x.innerHTML = "Geolocation is not supported by this browser.";

//     }
//     console.log("current",this.state.currentLocation)
// }

    render() {  
        // this.geolocation()
    
        return (
            <React.Fragment>
                <div className="landingPageContainer">
                    <div className='logoContainer'>
                        <img src={logo}/>
                    </div>
                    <div className='titleContainer'>
                        <div className="title">List To Table</div>
                    </div>
                    <div className="buttonsContainer">
                        <div className='buttonsBox'>
                            <button className="restaurants-button btn btn-large waves-effect waves-light">
                                <Link className ="restaurants" to="/login">restaurants</Link>
                            </button>
                            <button className="guests-button btn btn-large waves-effect waves-light">
                                <Link className ="guests" to="/customer-map">guests</Link>
                            </button>
                        </div>
                    </div>
                    <div className="bottomSpacer">

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LandingPage;  