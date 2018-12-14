import React, { Component } from 'react'
import { renderBusyTimes } from './helpers';


class Geolocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantType: this.props.searchTerm
        }
    }

    componentDidMount() {
        const position = null;
        const restaurantType = null;

        const config = { position, restaurantType }
        config.position = this.props.position;
        config.restaurantType = this.state.restaurantType;
        renderBusyTimes(config, this.props.retrieveRestaurantData, this.props.loadingDisplay)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.position == '' && !!this.props.position) {
            const config = {
                position: null,
                restaurantType: null
            }
            config.position = this.props.position;
            config.restaurantType = this.state.restaurantType;
            renderBusyTimes(config, this.props.retrieveRestaurantData, this.props.loadingDisplay)
        }

    }
    render() {
        return (
            <div id="map" className={`mapBottomContainer ${this.props.map ? "" : "hidden"}`}></div>
        )
    }
}
export default Geolocation





