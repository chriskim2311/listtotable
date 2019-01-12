import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/landingPage.css';
import logo from '../assets/images/list-to-table-logo-white.png';
import { Link } from 'react-router-dom';
import { checkCurrentPosition, setCurrentPosition } from '../actions';
import Media from 'react-media';
import guestStack from '../assets/images/guestStack.png'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: '',
            loadSpinner: false,
            lat: null,
            long: null
        }
    }
    componentDidMount() {
        // this.props.checkCurrentPosition();
        this.geolocation();
    }

    geolocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)

                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                })
                this.props.setCurrentPosition(position)
            })
        }
        else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
        if (this.props.set == true) {
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
        var lat = this.state.lat;
        var long = this.state.long
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
                                                        <Link to={`/customer-map/?lat=${lat}&long=${long}`}>Map</Link>
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
                                    </div>
                                    <div className="detailContainer">
                                        <div className="appInfo">
                                            <div className="appTitle">
                                                List To Table
                                            </div>
                                            <div className="appDetailsCont">
                                                <div className="appDetails">
                                                    An Application that is built for those who no longer want to wait in line and check-in remotely! 
                                                </div>
                                                <div className="video">
                                                    <iframe src="https://www.youtube.com/embed/ACRca4GOY3o?autoplay=1&loop=1&playlist=ACRca4GOY3o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>                                                
                                                </div>                                   
                                            </div>
                                        </div>
                                        <div className="appImg">
                                            <img src={guestStack} alt=""/>
                                        </div>
                                    </div>
                                    <div className="startCont">Let's Get Started</div>
                                    <div className="guestRestButton">
                                        <div className="buttonsBox">
                                        <button id="restaurants-button" className="btn btn-large waves-effect waves-light">
                                            <Link className ="restaurants" to="/login">
                                                    <div>
                                                        restaurants
                                                    </div>
                                            </Link>
                                        </button>
                                        <button id="guests-button" className="btn btn-large waves-effect waves-light">
                                            <div className={ loadSpinner ? "hideSpinner" : "spinner"}>
                                                <div className={ loadSpinner ? "hideSpinner" : "bounce1"}></div>
                                                <div className={ loadSpinner ? "hideSpinner" : "bounce2"}></div>
                                                <div className={ loadSpinner ? "hideSpinner" : "bounce3"}></div>
                                            </div>
                                            <Link className ="guests" to={set ? `/customer-map/?lat=${lat}&long=${long}` : "/custom-location"}>
                                                <div>
                                                    guests
                                                </div>
                                            </Link>
                                        </button>
                                        </div>
                                    </div>
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
                                                <Link className ="restaurants" to="/login">
                                                <div>
                                                    restaurants
                                                </div>
                                                </Link>
                                            </button>
                                            <button id="guests-button" className="btn btn-large waves-effect waves-light">
                                                <div className={ loadSpinner ? "hideSpinner" : "spinner"}>
                                                    <div className={ loadSpinner ? "hideSpinner" : "bounce1"}></div>
                                                    <div className={ loadSpinner ? "hideSpinner" : "bounce2"}></div>
                                                    <div className={ loadSpinner ? "hideSpinner" : "bounce3"}></div>
                                                </div>
                                                <Link className ="guests" to={set ? `/customer-map/?lat=${lat}&long=${long}` : "/custom-location"}>
                                                    <div>
                                                        guests
                                                    </div>
                                                </Link>
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