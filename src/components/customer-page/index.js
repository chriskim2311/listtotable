import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import CustomLocationForm from './customLocationForm'
import greenTimer from '../../assets/images/greenTime.png';
import redTimer from '../../assets/images/redTime.png';
import yellowTimer from '../../assets/images/yellowTime.png';
// import { Link } from 'react-router-dom';
// import Header from '../header';
// import MapView from './mapView';
import ListView from './listView';
import Geolocation from './geolocation'
import Navigation from '../hamburgerAndBack'
import { renderBusyTimes } from './helpers';
import '../../assets/css/customerPg.css';
import ConfirmationModal from '../confirmationModal';
import loadingGif from '../../assets/images/loadingFood.gif';
// import ReactDOM from 'react-dom'

import { getCurrentPosition } from '../../actions';

class CustomerPg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurantType: '',
            map: true,
            list: false,
            restaurantData: null,
            search: false,
            searchTerm: '',
            mapRef: null,
            currentLocation: null,
            geolocation: null,
            position: null,
            loading: true
        }
    }

    componentDidMount() {
        this.props.getCurrentPosition();
    }

    // currentGeolocation() {
    //     console.log('did it hit this?', this.state.geolocation)
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition((position) => {
    //             this.setState({
    //                 geolocation: true,
    //                 position: position
    //             })
    //         });
    //     } else {
    //         this.setState({
    //             geolocation: false
    //         })
    //         x.innerHTML = "Geolocation is not supported by this browser.";

    //     }
    //     console.log('if it did hit what the state?', this.state.geolocation)
    // }



    componentDidUpdate() {
        console.log("State has been updated from the function passed through geolocation ", this.state.restaurantData);
    }

    retrieveRestaurantData = (results, map, centerLocation) => {
        this.setState({
            restaurantData: [...results],
            mapRef: map,
            currentLocation: centerLocation
        })
    }

    handleSearchItem = () => {
        event.preventDefault();
        console.log('info has been submitted', this.state)
        var restaurantType = null;
        var position = null
        const config = {restaurantType, position}
        config.position = this.state.position
        config.restaurantType = this.state.restaurantType
        renderBusyTimes(config, this.retrieveRestaurantData)


    }

    clearSearchItem = () => {
        this.setState({
            search: false,
            restaurantType: ''
        })
    }

    loadingDisplay = () => {
        this.setState({
            loading: false
        });
        console.warn("WE DID THE THING");
    }

    toggleMap = () => {
        this.setState({
            map: true,
            list: false
        })


    }

    toggleList = () => {
        this.setState({
            map: false,
            list: true
        })

    }

    geolocationAttained = (location) => {
        this.setState({
            geolocation: true,
            position: location,
        })
    }


    render() {
        debugger;
        console.log('after component did mount', this.props.position)
        const { map, list, loading, restaurantType, search } = this.state
        return (
            
            <Fragment>
            {/* {this.currentGeolocation()} */}
                <div className='customerPage'>
                    <Navigation />
                    <div className="topContainer">
                        <div className="foodSearchHeader">
                            <div className="foodSearchBar">
                                <form onSubmit={this.handleSearchItem}>
                                    <input
                                        className="inputFood"
                                        type="text"
                                        value={this.state.restaurantType}
                                        onChange={(e) => { this.setState({ restaurantType: e.target.value }) }}
                                        placeholder="Search for Restaurants"
                                    />
                                </form>
                            </div>
                            <div className="searchButton">
                                <button onClick={this.handleSearchItem} className="search btn-small">Search</button>
                            </div>

                        </div>
                        <div className="legendHeader">
                            <div className="legendTimeContainer">
                                <div className="legendTime">
                                    <img className="greenTime" src={greenTimer} />
                                    <img className="yellowTime" src={yellowTimer} />
                                    <img className="redTime" src={redTimer} />
                                </div>
                                <div className="legendDetails">
                                    <div className="clockInfo">Not Busy</div>
                                    <div className="clockInfo">Busy</div>
                                    <div className="clockInfo">Very Busy</div>
                                </div>
                            </div>
                            <div className="toggleDisplayContainer">
                                <div className="toggleDisplay">
                                    <div onClick={this.toggleMap} className={map ? 'mapButton' : 'mapButton1'}>MAP</div>
                                    <div onClick={this.toggleList} className={list ? 'listButton1' : 'listButton'}>LIST</div>
                                </div>
                            </div>
                        </div>

                        </div>
                        <div id = 'map ' className={ loading ? "hidden" : "BottomContainer" }>
                                {
                                    <div className="borderContainer">
                                            <Geolocation
                                                map={map}
                                                search={search}
                                                restaurantType={restaurantType}
                                                retrieveRestaurantData={this.retrieveRestaurantData}
                                                loadingDisplay={this.loadingDisplay}
                                                clearSearch={this.clearSearchItem}
                                                // position={this.state.position} />
                                                position={this.props.position} />
                                            <ListView 
                                                list={list}
                                                currentLocation={this.state.currentLocation}
                                                mapRef={this.state.mapRef}
                                                retrieveRestaurantData={this.state.restaurantData}
                                                key={this.childKey} />
                                    </div>
                                }
                            </div>
                            <div className={loading ? "loading-spinner" : "hidden"}>
                                <img src={loadingGif}/>
                            </div>

                    </div >

            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        position: state.position.position
    }
}

export default connect(mapStateToProps, {
    getCurrentPosition
})(CustomerPg);
