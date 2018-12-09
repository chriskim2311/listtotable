import React, { Component, Fragment } from 'react';
import {Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import Input from './forms_input';
import '../assets/css/sign_up.css';
import { userSignUp } from '../actions';


class SignUpForm extends Component {
    handleSignUp = (values) =>{
        console.log('Sign up', values);
        this.props.signUp(values);
    }
    render(){

     
    const { handleSubmit, signUpError } = this.props
        return(
            <Fragment>
                <form onSubmit={handleSubmit(this.handleSignUp)}>
                    <div className="row sign_up_row">
                        <Field name="businessName" size="s8 offset-s2" label="Business Name" component={Input}/>
                    </div>
                    <div className="row sign_up_row">
                        
                        <Field name="businessAddress" label="Business Address" size="s12" component={Input}/>
                    </div>
                    <div className="row sign_up_row">
                        <Field name="email" label="Business Email" size="s6 offset-s3" component={Input} />  
                    </div> 
                    <div className="row sign_up_row">
                        <Field name="password" label="Create Password" type="password" size="s6" component={Input}/>
                        <Field name="confirmPassword" label="Confirm Password" type="password" size="s6" component={Input}/>
                    </div>
                    <div className="row center sign_up_row">
                        <button className="btn waves-effect waves-light blue darken-3" type="submit">Submit</button>
                        <p className="red-text text-darken-2">{signUpError}</p>
                    </div>
                
                </form>
            </Fragment>
        )
    }

}

function validate(values){
    const { confirmPassword, email, password, phone, businessName, businessAddress} = values;
    const error = {};
    
    if(!email){
        error.email = 'Please enter Your email'
    }
   
    if(!businessName){
        error.businessName = 'Please enter Business Name'
    }

    if(!businessAddress){
        error.businessAddress = 'Please enter Business address'
    }

    if(!password){
        error.password = 'Please enter Your password'
    }

    if(password !== confirmPassword){
        error.confirmPassword = 'Password not match'
    }

    return error;
}

function mapStateToProps(state){
    return {
        signUpError:state.partner.signUpError
    }
}

SignUpForm = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUpForm);

export default connect(mapStateToProps, {
    signUp: userSignUp
})(SignUpForm);