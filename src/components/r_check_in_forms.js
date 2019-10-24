import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import "../assets/css/r_check_in.css";
import { customerCheckInIncrement } from "../actions";
import { customerCheckInDecrement } from "../actions";
import { customerCheckIn } from "../actions";
import { sendCustomerText } from "../actions";
import { managePopUp } from "../actions";
import RConfirmationModal from "./r_confirmationModal";
import Input from "./forms_input";
import { reset } from "redux-form";

class RestaurantCheckInForm extends Component {
  completeCheckIn = values => {
    const restId = localStorage.getItem("restId");
    const restName = localStorage.getItem("restName");
    const { enterName, phone, comments } = values;
    const sendData = {
      client_name: enterName,
      phone_number: phone,
      restaurant_id: restId,
      restaurant_name: restName,
      table_size: this.props.tableSize,
      comments: comments,
      status: 1
    };

    reset("myForm");
    this.props.submitCheckIn(sendData);
    this.props.managePopUp();
    this.props.sendCustomerText(sendData);
  };

  render() {
    const { handleSubmit, error, resetForm } = this.props;
    return (
      <div className="r_checking container">
        <form name="myForm" onSubmit={handleSubmit(this.completeCheckIn)}>
          <div className="row center">
            <Field
              name="enterName"
              size="s8 offset-s2"
              label="Enter Name"
              component={Input}
            />
          </div>
          <div className="row center">
            <Field
              name="phone"
              size="s8 offset-s2"
              label="Phone Number"
              component={Input}
            />
          </div>
          <div className="tableSizeTitle row">Table Size</div>
          <div className="tableInfoContainer center row">
            <button
              type="button"
              className="decrementButton btn btn-floating btn-large waves-effect waves-light blue-grey darken-3"
              onClick={this.props.Decrement}
            >
              <i className="material-icons">remove_circle_outline</i>
            </button>

            <div className="tableInputBox">{this.props.tableSize}</div>
            <button
              type="button"
              className=" btn btn-floating btn-large waves-effect waves-light blue-grey darken-3"
              onClick={this.props.Increment}
            >
              <i className="material-icons">add_circle_outline</i>
            </button>
          </div>
          <div className="row text-align center">
            <div className="col s10 center-align offset-s1">
              <Field
                className="text-align center"
                name="comments"
                label="Comments"
                placeholder="Comments"
                component="textarea"
              />
            </div>
          </div>
          <div className="col s6 center">
            <button
              type="submit"
              className="btn waves-effect waves-light blue-grey darken-3"
            >
              Submit
            </button>
            <RConfirmationModal />
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const { enterName, phone } = values;
  const error = [];

  const phoneRegex = /^(1*)[ -]*([0-9]{3})([ -]*)([0-9]{3})([ -]*)([0-9]{4})$|^[(]([0-9]{3})[)]([ -]*)([0-9]{3})([ -]*)([0-9]{4})$/;

  if (!enterName) {
    error.enterName = "Please enter your name";
  }

  if (!phone) {
    error.phone = "Please enter Phone number";
  } else if (!phoneRegex.test(phone)) {
    error.phone = "Please enter 10 digits phone number starting with area cod";
  }
  return error;
}

RestaurantCheckInForm = reduxForm({
  form: "check-in",
  validate: validate
})(RestaurantCheckInForm);

function mapStateToProps(state) {
  return {
    tableSize: state.customer.table_size
  };
}

export default connect(
  mapStateToProps,
  {
    Increment: customerCheckInIncrement,
    Decrement: customerCheckInDecrement,
    submitCheckIn: customerCheckIn,
    sendCustomerText: sendCustomerText,
    managePopUp: managePopUp
  }
)(RestaurantCheckInForm);
