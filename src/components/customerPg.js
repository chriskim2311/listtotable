import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

import greenTimer from '../assets/images/greenTime.png';
import redTimer from '../assets/images/redTime.png';
import yellowTimer from '../assets/images/yellowTime.png';
import { Link } from 'react-router-dom';
import Header from './header';
// import MapView from './mapView';
import ListView from './listView';
import Geolocation from './geolocation'
import '../assets/css/customerPg.css';

class CustomerPg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurantName: '',
            map: true,
            list: false,
            restaurantData: null
        }

    }

    componentDidUpdate() {
        console.log("State has been updated from the function passed through geolocation ", this.state.restaurantData);
    }

    retrieveRestaurantData = (results) => {
        // debugger;
        this.setState({
            restaurantData: [...results]
        })
    }

    handleSearchItem = () => {
        event.preventDefault();
        console.log('info has been submitted', this.state)
        this.setState({
            restaurantName: ''
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
        // document.getElementById('hide').className('mapBottomContainer')
        // document.getElementById('list').ClassName('hide')
    }


    render() {
        console.log('info being changed', this.props)
        console.log("Current state: ", this.state)
        const { map, list } = this.state
        return (
            <React.Fragment>
                <div className="topContainer">
                    <Header />
                    <div className="foodSearchHeader">
                        <div className="foodSearchBar">
                            <form onSubmit={this.handleSearchItem}>
                                <input
                                    className="inputFood"
                                    type="text"
                                    value={this.state.restaurantName}
                                    onChange={(e) => { this.setState({ restaurantName: e.target.value }) }}
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
                                <div className="clockInfo">0-30</div>
                                <div className="clockInfo">30-60</div>
                                <div className="clockInfo">60+</div>
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
                <div className="BottomContainer">
                    <Geolocation map={map} retrieveRestaurantData={this.retrieveRestaurantData} />
                    <ListView list={list} retrieveRestaurantData={this.state.restaurantData} />
                </div>



            </React.Fragment>
        )
    }
}

export default CustomerPg;