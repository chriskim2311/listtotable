import axios from 'axios';

export async function getRestaurantData(places, latLng, location) {

    // console.log("PROPSSSS:", location)
    const resp = await axios.post('http://place.kim-chris.com/busy-hours', { place_id: places });
    var date = new Date()
    var day = date.getDay();
    var time = (date.getHours()) - 6;
    var restaurantData = {
        distance: "",
        busyHour: ""
    }

    var nav = function(input, path){
        var curr = input;

        if (!(path instanceof Array))
            path = Array.prototype.slice.call(arguments, 1);

        for (var i = 0; i < path.length; i++)
        {
            curr = curr[path[i]];
            if (typeof curr != "object")
            {
                if (i == path.length - 1)
                    return curr;
                return null;
            }
        }

        return curr;
    }

    restaurantData.busyHour = nav(resp, "data", "data", "week", day, "hours", time, "percentage") || restaurantData.busyHour;

    //if (resp.data.data && resp.data.data.week && resp.data.data.week[day] && resp.data.data.week[day].hours[time] && resp.data.data.week[day].hours[time].percentage) {
    //    restaurantData.busyHour = resp.data.data.week[day].hours[time].percentage;
   // }
    const currentLocation = location
    const lat1 = currentLocation.lat();
    const long1 = currentLocation.lng();
    const lat2 = latLng.lat();
    const long2 = latLng.lng();

    var origin1 = { lat: lat1, lng: long1 };
    // console.log("ORIGIN:", origin1)
    var destination1 = { lat: lat2, lng: long2 }
    var service = new google.maps.DistanceMatrixService();

    var promise = new Promise((resolve, reject) => {
        service.getDistanceMatrix(
            {
                origins: [origin1],
                destinations: [destination1],
                travelMode: 'DRIVING',
                drivingOptions: {
                    departureTime: new Date(Date.now()),  // for the time N milliseconds from now.
                    trafficModel: 'bestguess'
                },
                unitSystem: google.maps.UnitSystem.IMPERIAL,
                avoidHighways: false,
                avoidTolls: true,
            }, callback2);

        function callback2(response, status) {

            var distance = response.rows[0].elements[0].distance.text
            restaurantData.distance = distance
            // console.log("DISTANCEEEEE:", distance)
            resolve()

        }
    })
    await promise;

    return restaurantData
};