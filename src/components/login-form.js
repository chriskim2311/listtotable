import React, { Component, Fragment } from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Input from './forms_input';
import { userLogIn } from '../actions'

class LogInForm extends Component {
    handleLogIn = (values) => {
        
        
        this.props.logIn(values);
    }

    componentDidUpdate(){
        const { history, restId } = this.props;

        if(restId){
            
            history.push(`/waiting/${restId}`);
        }
    }

    render(){

    
    const { handleSubmit, logInError } = this.props
        return(
            <Fragment>  
                <form onSubmit={handleSubmit(this.handleLogIn)}>
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <Field name="email" label="Email" component={Input}/>  
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6 offset-s3">
                            <Field label="Password" name="password" type="password" component={Input}/>
                        </div>
                    </div>
                    <div className="row center-align">
                        <button className="btn waves-effect waves-light light-blue">Log In</button>
                        <p className="red-text text-darken-2">{logInError}</p>
                    </div>
                    
                </form>
            </Fragment>
        )
    }
}
function validate(values){
    const { email, password } = values;
    const error = {};

    if(!email){
        error.email ='Please enter your email'
    }
    
    if(!password){
        error.password ='Please enter your password'
    }
    
    return error;
}

LogInForm = reduxForm({
    form: 'log-in',
    validate: validate
})(LogInForm);

function mapStateToProps(state){
    console.log('Login State:', state);
    return{
        logInError: state.partner.logInError,
        restId: state.partner.restaurant_ID
    }
}

export default connect(mapStateToProps, {
    logIn: userLogIn
})(LogInForm);