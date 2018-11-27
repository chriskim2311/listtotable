import React from 'react';
import {Field, reduxForm } from 'redux-form';

let SignUpForm = props => {
    const { handleSubmit } = props
    return(
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="input-field col s8 offset-s2 center-align plase">
                    <Field name="businessName" component="input" type="text" placeholder=" Best Restaurant"/>  
                    <label htmlFor="businessName">Enter Your Business Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s8 offset-s2 center-align">
                    <Field name="businessEmail" component="input" type="text" placeholder=" bestreatorant@exemple.com"/>
                    <label htmlFor="businessEmail">Enter Business Email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s8 offset-s2 center-align">
                    <Field name="businessPhone" component="input" type="text"/>
                    <label htmlFor="businessPhone">Enter Business Phone Number</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12 center-align">
                    <Field name="businessAddress" component="input" type="text"/>
                    <label htmlFor="businessAddress">Enter Business Address</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s4 offset-s4 center-align">
                    <Field name="login" type="text" component="input"/>
                    <label htmlFor="login">Create Login Name</label>
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
            <button type="submit center-align">Submit</button>
        </form>
    )
}
SignUpForm = reduxForm({
    form: 'sing-up'
})(SignUpForm);

export default SignUpForm;