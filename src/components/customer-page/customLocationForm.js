import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';


class CustomLocationForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            cityLocation: '',
            location: null
        };

        this.autocomplete = null;
    }

    componentDidMount(){
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),
            { types: ['(cities)'], componentRestrictions: {country: "us"}});

        this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
    }

    handlePlaceSelect = () => {
        let addressObject = this.autocomplete.getPlace();
        let address = addressObject.address_components;
        this.setState({
            cityLocation: `${address[0].long_name}${","} ${address[2].short_name}`
        });
    };

    handleSubmit= (event) =>{
        var config= {}
        // console.log("custom location props",this.props);
        // console.log("STATE:", this.state)
        // debugger;
        event.preventDefault();
        const geocoder = new google.maps.Geocoder();
        const address = this.state.cityLocation;
        const {retrieveRestaurantData, geolocationAttained} = this.props;
        // const location = {};
        geocoder.geocode({'address': address}, function(results, status) {
            const locations = {};
            if (status === 'OK') {

                // console.log("RESULTS", results)
                var lat = results[0].geometry.location.lat();
                var long = results[0].geometry.location.lng();
                locations.lat = lat;
                locations.lng = long;
                // console.log(lat, long);
                config= {locations}
                config.locations = locations
                // console.log(locations)
                // console.log(config)

            geolocationAttained(locations);
            }
        });
        this.setState({
            cityLocation: '',
        });
    };

    render(){
        
        // console.log("custom location props",this.props);
        // console.log('info being changed', this.state);
        return (
            <Fragment>
                <div className="customLocationContainer container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">

                            <div className="input-field col s10 center-align offset-s1">
                                <input
                                    id="autocomplete"
                                    type="text"
                                    value={this.state.cityLocation}
                                    onChange={event => this.setState({cityLocation: event.target.value})}
                                />
                            </div>
                        </div>
                    </form>
                    <div className="customLocationButton">
                        <button
                            onClick= {this.handleSubmit}
                            className=" btn btn-large"
                            type="submit"
                            name="action"
                        >SUBMIT</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CustomLocationForm;