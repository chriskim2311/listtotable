import React, { Component } from "react";
import CheckInForm from "./check-in-form";
import CheckInRestaurantName from "./check-in-restaurant-name";
import Navigation from "./hamburgerAndBack";

class ReservationInfo extends Component {
  render() {
    const { name, id } = this.props.match.params;

    return (
      <React.Fragment>
        <Navigation />
        <CheckInRestaurantName restaurantName={name} />
        <CheckInForm restaurantName={name} restaurantID={id} />
      </React.Fragment>
    );
  }
}

export default ReservationInfo;
