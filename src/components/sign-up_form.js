import React, { Component, Fragment } from 'react';
import {Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import Input from './forms_input';
import '../assets/css/sign_up.css';
import { userSignUp } from '../actions';
import Autocomplete from './auto_complete';


class SignUpForm extends Component {
    state = {
        restaurant_id: null
    }


    componentDidMount(){
        // var address = null;
        var input = document.getElementById('address');
        var autocomplete = new google.maps.places.Autocomplete(input);
        var address= null
        autocomplete.addListener('place_changed', () => {
        var place = autocomplete.getPlace();
        address = place.place_id
        this.setState({
            restaurant_id: address
        })
    })
        
       
    }
    handleSignUp = (values) =>{



        const obj = {
            restaurant_ID: this.state.restaurant_id,
            username: "yardhouse",
            email: values.email,
            password: values.password,
            status: 'waiting',
            comments: 'hello',
        }

        console.log('Sign up', obj);
        this.props.signUp(obj);
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
                  



                    {/* <input id= "address" className="input-field" placeholder="Business Address" size="s12"/> */}
                    {/* <label>Business Address</label> */}
                        <Field  name="businessAddress" label="Business Address" id = "address" size="s12" component={Autocomplete}/>
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