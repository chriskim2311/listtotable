import React, { Component, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Input from "./forms_input";
import "../assets/css/sign_up.css";
import { userSignUp } from "../actions";

class SignUpForm extends Component {
  state = {
    restaurant_id: null,
    restaurant_address: null
  };

  componentDidMount() {
    var input = document.getElementById("address");
    var autocomplete = new google.maps.places.Autocomplete(input);
    var address = null;
    var restaurant_address = null;
    autocomplete.addListener("place_changed", () => {
      var place = autocomplete.getPlace();

      address = place.place_id;
      restaurant_address = place.formatted_address;
      this.setState({
        restaurant_id: address,
        restaurant_address: restaurant_address
      });
    });
  }

  handleSignUp = async values => {
    const obj = {
      restaurant_ID: this.state.restaurant_id,
      email: values.email,
      password: values.password,
      restaurant_name: values.businessName,
      restaurant_address: this.state.restaurant_address
    };

    const restId = await this.props.signUp(obj);

    this.props.history.push(`/waiting/${restId}`);
  };
  render() {
    const { handleSubmit, signUpError } = this.props;
    return (
      <Fragment>
        <form onSubmit={handleSubmit(this.handleSignUp)}>
          <div className="row sign_up_row">
            <Field name="address" label="" size="s12" component={Input} />
          </div>
          <div className="row sign_up_row">
            <Field
              name="businessName"
              size="s8 offset-s2"
              label="Business Name"
              component={Input}
            />
          </div>
          <div className="row sign_up_row">
            <Field
              type="email"
              name="email"
              label="Business Email"
              size="s6 offset-s3"
              component={Input}
            />
          </div>
          <div className="row sign_up_row">
            <Field
              name="password"
              label="Create Password"
              type="password"
              size="s6"
              component={Input}
            />
            <Field
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              size="s6"
              component={Input}
            />
          </div>
          <div className="row center sign_up_row">
            <button
              className="btn waves-effect waves-light blue darken-3"
              type="submit"
            >
              Submit
            </button>
            <p className="red-text text-darken-2">{signUpError}</p>
          </div>
        </form>
      </Fragment>
    );
  }
}

function validate(values) {
  const { confirmPassword, email, password, businessName, address } = values;
  const error = {};

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email) {
    error.email = "Please enter Your email";
  } else if (!emailRegex.test(email)) {
    error.email = "Please enter a valid email";
  }

  if (!businessName) {
    error.businessName = "Please enter Business Name";
  }

  if (!address) {
    error.address = "Please input Restaurant Name and choose correct address";
  }

  if (!password) {
    error.password = "Please enter Your password";
  }

  if (password !== confirmPassword) {
    error.confirmPassword = "Password not match";
  }

  return error;
}

function mapStateToProps(state) {
  return {
    signUpError: state.partner.signUpError
  };
}

SignUpForm = reduxForm({
  form: "sign-up",
  validate: validate
})(SignUpForm);

export default connect(
  mapStateToProps,
  {
    signUp: userSignUp
  }
)(SignUpForm);
