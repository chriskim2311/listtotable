import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/landingPage.css';
import logo from '../assets/images/list-to-table-logo-white.png';
import { Link } from 'react-router-dom';
import { checkCurrentPosition, setCurrentPosition } from '../actions';

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