import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

class CustomLocationForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            cityLocation: '',
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

    handleSubmit = (event) => {
        event.preventDefault();
        this.getLatLong();

        const dataToSend = {
            ...this.state,
        };

        this.setState({
            cityLocation: '',
        });

        console.log(dataToSend);
    };

    getLatLong = () => {
        const geocoder = new google.maps.Geocoder();
        const address = this.state.cityLocation;
        const location = {};

        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                var lat = results[0].geometry.location.lat();
                var long = results[0].geometry.location.lng();
                location.lat = lat;
                location.long = long;
                console.log(lat, long);
                console.log(location);
            }
        });
    };

    render(){
        console.log('info being changed', this.state);
        return (
            <Fragment>
                <div className="container">
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
                    <div>
                        <button
                            onClick= {this.handleSubmit}
                            className="submitButton btn btn-large"
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