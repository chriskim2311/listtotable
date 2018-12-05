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
                        <Field name="businessEmail" label="Business Email" size="s7" component={Input} />
                        <Field name="businessPhone" label="Phone Number" size="s5" component={Input}/>
                    </div>
                    <div className="row sign_up_row">
                        
                        <Field name="businessAddress" label="Business Address" size="s12" component={Input}/>
                    </div>
                    <div className="row sign_up_row">
                        <Field name="login" label="Create Login" size="s4 offset-s4" component={Input}/>
                    </div> 
                    <div className="row sign_up_row">
                        <Field name="password" label="Create Password" type="password" size="s6" component={Input}/>
                        <Field name="ConfirmPassword" label="Confirm Password" type="password" size="s6" component={Input}/>
                    </div>
                    <div className="row center">
                        <button className="btn waves-effect waves-light" type="submit">Submit</button>
                    </div>
                
                </form>
            </Fragment>
        )
    }

}

function validate(values){
    const { confirmPassword, email, password } = values;
    const error = {};
    
    if(!email){
        error.email = 'Please enter Your email'
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
    form: 'sing-up',
    validate: validate
})(SignUpForm);

export default connect(mapStateToProps, {
    signUp: userSignUp
})(SignUpForm);