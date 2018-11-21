import React, {Component} from 'react'
import axios from 'axios'
import cors from 'cors'

import googleMapsClient from '@google/maps'
// import    from 'busy_hours'




var place_id = 'ChIJgwI5fePn3IARVqvUoCtf2D0'
var key = 'AIzaSyD7hQZInXf3Y5U9UMI_K5bmxfNiUro1cls'



class BusyHours extends Component {
    // constructor(props) {
    //     super(props);
    //     this.google = googleMapsClient.createClient({key: key})
    // }
   componentDidMount() {
            axios.post('http://place.kim-chris.com/busy-hours', {
                place_id: 'ChIJgwI5fePn3IARVqvUoCtf2D0',
            }).then(resp => {
                console.log(resp)
            })
            

        }
        
    
    
    render() {
        return (
            <div>
                Hi
            </div>
        )
    }
}

export default BusyHours;
