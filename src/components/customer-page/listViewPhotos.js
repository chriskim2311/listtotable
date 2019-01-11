import React, { Component, Fragment } from 'react';

class ListViewPhotos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: null
        }
    }

    componentDidMount() {
        const { mapRef, placeId } = this.props;
        this.getGooglePhotos(mapRef, placeId);
    }

    componentDidUpdate(prevProps, prevState) {
        const { mapRef, placeId } = this.props;
        const prevPlaceId = prevProps.placeId;
        if (placeId !== prevPlaceId) {
            this.getGooglePhotos(mapRef, placeId);
        }
    }

    getGooglePhotos = (mapRef, placeID) => {
        var service;
        var request = {
            placeId: placeID
        };
        service = new google.maps.places.PlacesService(mapRef);
        service.getDetails(request, (results, status) => {

            this.savePhotosFromGoogle(results, status);
        });
    }

    savePhotosFromGoogle = (results, status) => {
        var photosArray = results['photos']
        this.setState({
            photos: [...photosArray]
        });
    }

    displayPhotosFromGoogle() {
        const { photos } = this.state;
        debugger
        return photos.map((photo, index) => {
            let photoUrl = photo.getUrl();
            return <img src={photoUrl} key={index} />
        });
    }

    render() {
        ++this.childKey;
        const { photos } = this.state;
        if (!photos) {
            return (
                <div>Loading photo data...</div>
            )
        }
        return (
            <Fragment>
                {this.displayPhotosFromGoogle()}
            </Fragment>
        )
    }
}

export default ListViewPhotos;
