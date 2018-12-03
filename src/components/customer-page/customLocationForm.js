import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

class CustomLocationForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            customLocation: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const dataToSend = {
            ...this.state,
        };
        console.log('CUSTOM LOCATION:', dataToSend);

        this.setState({
            customLocation: ''
        })

    };

    getLatLong = () => {
        const geocoder = new google.maps.Geocoder();
        const address = this.state.customLocation;
        const location = {};
        console.log(address);

        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                var lat = results[0].geometry.location.lat();
                var long = results[0].geometry.location.lng();
                console.log(lat, long);
            }

            location.lat = lat;
            location.long = long;

            console.log(location);

        });
    };

    render(){
        console.log('info being changed', this.state);
        return (
            <Fragment>
                <div className="container">
                    <h3 className="center-align">enter a location</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">

                            <div className="input-field col s10 center-align offset-s1">
                                <input
                                    type="text"
                                    value={this.state.customLocation}
                                    onChange={event => this.setState({customLocation: event.target.value})}
                                />
                                <label>city</label>
                            </div>

                        </div>
                    </form>
                    <div>
                        <button
                            onClick={this.handleSubmit, this.getLatLong}
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