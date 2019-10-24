/* eslint-disable no-undef */
import axios from "axios";
import "../../assets/css/helper.css";

export function renderBusyTimes(
  config,
  retrieveRestaurantData,
  loadingDisplay
) {
  var retrieveRestaurantData = retrieveRestaurantData;
  var map;
  var service;
  var infowindow;
  var queryPairs = {};

  getQueryParts();
  function getQueryParts() {
    window.location.href
      .slice(window.location.href.indexOf("?") + 1)
      .split("&")
      .forEach(pair => {
        var pairData = pair.split("=");
        queryPairs[pairData[0]] = pairData[1];
      });

    return queryPairs;
  }

  showRestaurants(config, retrieveRestaurantData, loadingDisplay, queryPairs);
  function showRestaurants(config, retrieveRestaurantData, loadingDisplay) {
    const restaurantInput = config.restaurantType;
    var latitude = parseFloat(queryPairs.lat);
    var longitude = parseFloat(queryPairs.long);
    var centerLocation = new google.maps.LatLng(latitude, longitude);
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude },
      zoom: 13
    });

    new google.maps.Marker({
      map: map,
      position: { lat: latitude, lng: longitude }
    });

    var request = {
      location: centerLocation,
      radius: "2000",
      type: ["restaurant"],
      keyword: restaurantInput || ""
    };

    infowindow = new google.maps.InfoWindow({ maxWidth: 190 });
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      restaurantIconRender(
        results,
        status,
        retrieveRestaurantData,
        map,
        centerLocation,
        loadingDisplay
      );
    });
  }

  function restaurantIconRender(
    results,
    status,
    retrieveRestaurantData,
    map,
    centerLocation,
    loadingDisplay
  ) {
    var bounds = new google.maps.LatLngBounds();
    retrieveRestaurantData(results, map, centerLocation);
    results = results.filter(restaurant => {
      return restaurant.price_level >= 2;
    });
    let loadCount = 0;

    for (var i = 0; i < results.length; i++) {
      let config = { map };
      config.placeId = String(results[i].place_id);
      config.photo = results[i]["photos"][0].getUrl();
      config.name = results[i].name;
      config.location = {
        lat: results[i].geometry.location.lat(),
        lng: results[i].geometry.location.lng()
      };
      config.address = results[i].vicinity;
      const placeId = String(results[i].place_id);

      axios
        .post("https://place.kim-chris.com/busy-hours", {
          place_id: placeId
        })
        .then(resp => {
          loadCount++;
          var date = new Date();
          var day = date.getDay();
          var time = date.getHours() - 6;
          // if(!resp.data.success){
          //     return
          // }

          if (resp.data === "ok") {
            var busyHour = resp.data.data.week[day].hours[time].percentage;

            var location = resp.data.data.location;

            if (busyHour < 30) {
              config.color = "green";
            } else if (busyHour > 31 && busyHour < 59) {
              config.color = "yellow";
            } else if (busyHour > 60) {
              config.color = "red";
            } else {
              config.color = "none";
            }
          }
          createColoredMarker(config);
          if (loadCount === results.length) {
            loadingDisplay();
          }
        });
    }
  }

  function createColoredMarker(config) {
    const {
      map,
      location,
      resp,
      color,
      placeId,
      photo,
      name,
      address
    } = config;

    var iconUrl = null;

    switch (color) {
      case "green":
        iconUrl = "https://i.imgur.com/nnUcYpC.png";
        break;
      case "yellow":
        iconUrl = "https://i.imgur.com/LkWlV0u.png";
        break;
      case "red":
        iconUrl = "https://i.imgur.com/i9AQAax.png";
        break;
      default:
        iconUrl = "https://i.imgur.com/LkWlV0u.png";
        break;
    }

    var icon = {
      url: iconUrl,
      scaledSize: new google.maps.Size(25, 25)
    };
    var marker = new google.maps.Marker({
      map: map,
      icon: icon,
      position: location
    });
    google.maps.event.addListener(marker, "click", function() {
      // var name = resp.data.data.name
      // var address = resp.data.data.formatted_address
      infowindow.setContent(
        '<div class="marker">' +
          '<div class="photoCheckInBox">' +
          `<img src='${photo}' class="photoMarker" >` +
          `<div> <a href="/reservation-info/${name}/${placeId}">` +
          `<button> Check In!</button>` +
          "</div>" +
          "</div>" +
          '<div class="infoBorder">' +
          '<div class="infoContainer">' +
          '<span class="bold"> Name: ' +
          "</span>" +
          "<span>" +
          name +
          "</span>" +
          '<p> <span class="bold"> Address: </span>' +
          address +
          "</p>" +
          "</div>" +
          "</div>" +
          "</div>"
      );
      infowindow.open(map, this);
    });
  }
}
