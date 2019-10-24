import React, { Component, Fragment } from "react";
import RTopMenu from "./r_arrowAndMenu";
import ListMenu from "./list_menu";
import NotifiedCustomerInfo from "./notifiedList";

class Notified extends Component {
  render() {
    return (
      <Fragment>
        <RTopMenu />
        <div className="TopContainer">
          <ListMenu />
        </div>
        <div className="bottomContainer">
          <NotifiedCustomerInfo />
        </div>
      </Fragment>
    );
  }
}
export default Notified;
