import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/landingPage.css';
import logo from '../assets/images/list-to-table-logo-white.png';
import { Link } from 'react-router-dom';
import { checkCurrentPosition, setCurrentPosition } from '../actions';
import Media from 'react-media';

class LandingPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: '',
            loadSpinner: false
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
        if ( this.props.set == true ) {
            this.loadSpinner(); 
        }
        else {
            this.loadSpinner(); 
        }
    }
    loadSpinner = () => {
        setTimeout(() => {
            this.setState({
                loadSpinner: true
            })
        }, 4000);
    }

    render() {  
        // this.geolocation()
        const { set } = this.props;
        const { loadSpinner } = this.state; 
        console.warn(set)
        return (
            <Fragment> 
                
                <div className="landingPageContainer">
                    <Media query={{ minWidth: 545 }}>
                        {matches => 
                            matches ? (
                                <Fragment>
                                    <div className="headContainer">
                                        <div className="divLogo">
                                            <img src={logo} />
                                        </div>
                                        <nav className="navigationHeader">
                                            <div className="nav-wrapper">
                                                <ul className="navHead right">
                                                    <li>
                                                        <Link to="/">Home</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/customer-map">Map</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/about">About</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/team">Team</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                        <div className="titleLogo"></div>    
                                    </div>
                                    <div className="detailContainer"></div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <div className='logoContainer'>
                                        <img src={logo}/>
                                    </div>
                                    <div className='titleContainer'>
                                        <div className="title">List To Table</div>
                                    </div>
                                    <div className="buttonsContainer">
                                        <div className='buttonsBox'>
                                            <button id="restaurants-button" className="btn btn-large waves-effect waves-light">
                                                <Link className ="restaurants" to="/login">restaurants</Link>
                                            </button>
                                            <button id="guests-button" className="btn btn-large waves-effect waves-light">
                                                <div className={ loadSpinner ? "hideSpinner" : "spinner"}>
                                                    <div className={ loadSpinner ? "hideSpinner" : "bounce1"}></div>
                                                    <div className={ loadSpinner ? "hideSpinner" : "bounce2"}></div>
                                                    <div className={ loadSpinner ? "hideSpinner" : "bounce3"}></div>
                                                </div>
                                                <Link className ="guests" to={set ? "/customer-map" : "/custom-location"}>guests</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bottomSpacer">
                                    </div>
                                </Fragment>
                            )
                        }
                    </Media>
                    
                </div>
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