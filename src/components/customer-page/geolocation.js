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
        // const position = this.props.postion;
        // const restaurantType = this.state.restaurantType;
        const position = null;
        const restaurantType = null;

        const config = {position, restaurantType}
        config.position = this.props.position;
        config.restaurantType = this.state.restaurantType;
        // config[this.props.retrieveRestaurantData] = this.props.retrieveRestaurantData
        
        // renderBusyTimes(restaurantType, this.props.retrieveRestaurantData, position);
        renderBusyTimes(config, this.props.retrieveRestaurantData)


    }
    render() {
        console.log("map props:", this.props)
        return (
            <div id = "map" className={`mapBottomContainer ${this.props.map ? "" : "hidden"}`}></div>
        )
    }
}
export default Geolocation





