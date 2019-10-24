import React, { Component } from "react";
import "../assets/css/confirmationModal.css";
import { connect } from "react-redux";
import { managePopUp } from "../actions";
import { Link } from "react-router-dom";

class RConfirmationModal extends Component {
  close = () => {
    this.props.managePopUp();
  };
  render() {
    const restId = localStorage.getItem("restId");
    if (this.props.openConfirmation) {
      return (
        <div className="basic-modal">
          <div
            onClick={e => e.stopPropagation()}
            className="basic-modal-content"
          >
            <Link
              to={`/check-in/${restId}`}
              onClick={this.close}
              className="basic-modal-close"
            >
              X
            </Link>
            <p>Thank you, your reservation is confirmed!</p>
          </div>
        </div>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    openConfirmation: state.customer.open_confirmation
  };
}

export default connect(
  mapStateToProps,
  {
    managePopUp: managePopUp
  }
)(RConfirmationModal);
