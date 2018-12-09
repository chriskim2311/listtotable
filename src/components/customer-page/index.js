import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import CustomLocationForm from './customLocationForm'
import greenTimer from '../../assets/images/greenTime.png';
import redTimer from '../../assets/images/redTime.png';
import yellowTimer from '../../assets/images/yellowTime.png';
import { Link } from 'react-router-dom';
import Header from '../header';
// import MapView from './mapView';
import ListView from './listView';
import Geolocation from './geolocation'
import Navigation from '../hamburgerAndBack'
import { renderBusyTimes } from './helpers';
import '../../assets/css/customerPg.css';
import ReactDOM from 'react-dom'


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
            position: null
        }
    }

    currentGeolocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    geolocation: true,
                    position: position
                })
            });
        } else {
            this.setState({
                geolocation: false
            })
            x.innerHTML = "Geolocation is not supported by this browser.";

        }
    }


    componentDidUpdate() {
        console.log("State has been updated from the function passed through geolocation ", this.state.restaurantData);
    }

    retrieveRestaurantData = (results, map, centerLocation) => {
        // debugger;
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
        const config = {restaurantType}
        config.restaurantType = this.state.restaurantType
        renderBusyTimes(config, this.retrieveRestaurantData)


    }

    clearSearchItem = () => {
        this.setState({
            search: false,
            restaurantType: ''
        })
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
        const { map, list, restaurantType, search } = this.state
        return (
           


            < React.Fragment >
            <div className="topContainer">
                <Navigation />
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
                    {/* {map ? <Geolocation/>: <ListView/>} */}
                    {/* bottom half will render the map or list dependent on the true/false value */}


                </div>
            </div>
            <div id = 'map ' className="BottomContainer" >
            {this.currentGeolocation()}
                {
                    this.state.geolocation ?
                        <div>
                            <Geolocation
                                map={map}
                                search={search}
                                restaurantType={restaurantType}
                                retrieveRestaurantData={this.retrieveRestaurantData}
                                clearSearch={this.clearSearchItem}
                                position={this.state.position} />
                            <ListView 
                                list={list}
                                currentLocation={this.state.currentLocation}
                                mapRef={this.state.mapRef}
                                retrieveRestaurantData={this.state.restaurantData}
                                key={this.childKey} />
                        </div>
                        :
                        <CustomLocationForm
                        retrieveRestaurantData={this.retrieveRestaurantData}
                        geolocationAttained={this.geolocationAttained}
                        />
                }

            </div>

            </React.Fragment >
        )
    }
}

export default CustomerPg;