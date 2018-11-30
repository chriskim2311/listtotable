import React, { Component } from 'react'
import axios from 'axios';

import { renderBusyTimes } from './helpers';


class Geolocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantType: this.props.searchTerm
        }
    }

    // getLocation()
    // componentDidUpdate(){
    //     const { search, clearSearch } = this.props;
    //     console.log("UPDATE")

    //     if (search) {
    //         renderBusyTimes(this.props.restaurantType, this.props.retrieveRestaurantData, clearSearch);

    //     }
    // }
    componentDidMount() {
        
        renderBusyTimes(this.state.restaurantType, this.props.retrieveRestaurantData);

    }
    render() {
        // console.log("Props:", this.props)
        return (
            <div id="map" className={`mapBottomContainer ${this.props.map ? "" : "hidden"}`}></div>
        )
    }
}
export default Geolocation





