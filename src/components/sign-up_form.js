import React, { Component, Fragment } from 'react';
import {Field, reduxForm } from 'redux-form';
import connect from 'react-redux';
import input from './forms_input';


class SignUpForm extends Component {
    handleSignup = (values) =>{
        console.log('sign up', values);
        
    }
    render(){

    
    const { handleSubmit, signUpError } = this.props
    return(
        <Fragment>
        <form onSubmit={handleSubmit(this.handleSignup)}>
            <div className="row">
                <div className="input-field col s8 offset-s2 center-align ">
                    <Field name="businessName" component="input" type="text"/>  
                    <label htmlFor="businessName">Business Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s7">
                    <Field name="businessEmail" component="input" type="text"/>
                    <label htmlFor="businessEmail">Business Email</label>
                </div>
            
            
                <div className="input-field col s5">
                    <Field name="businessPhone" component="input" type="text"/>
                    <label htmlFor="businessPhone">Phone Number</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12 center-align">
                    <Field name="businessAddress" component="input" type="text"/>
                    <label htmlFor="businessAddress">Business Address</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s4 offset-s4 center-align">
                    <Field name="login" type="text" component="input"/>
                    <label htmlFor="login">Create Login</label>
                </div>    
            </div> 
            <div className="row s12">
                <div className="input-field col s5 offset-s1 left-align">
                    <Field name="createPassword" type="password" component="input"/>
                    <label htmlFor="createPassword"> Create Password</label>
                </div>             
                <div className="input-field col s5  right-align">
                    <Field name="password" type="password" component="input"/>
                    <label htmlFor="password">Re-enter Password</label>
                </div>
            </div>
            <div className="row center">
                <button className="btn waves-effect waves-light" type="submit">Submit</button>
            </div>
           
        </form>
        </Fragment>
    )
}
}
SignUpForm = reduxForm({
    form: 'sing-up'
})(SignUpForm);

export default SignUpForm;