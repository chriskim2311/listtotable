import React from 'react';
import {Field, reduxForm } from 'redux-form';

let LogInForm = props => {
    const { handleSubmit } = props
    return(
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="input-field col s4 offset-s4 center-align ">
                    <Field name="loginName" component="input" type="text" placeholder=" xl@example.com"/>  
                    <label htmlFor="loginName">Login</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s4 offset-s4 center-align">
                    <Field name="password" component="input" type="password" placeholder=" ********"/>
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div className="row center-align">
                <button className="btn waves-effect waves-light" type="submit"> Submit </button>
            </div>
            
        </form>
    )
}
LogInForm = reduxForm({
    form: 'log-in'
})(LogInForm);

export default LogInForm;