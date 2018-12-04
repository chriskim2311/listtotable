import React, { Component, Fragment } from 'react';
import RTopMenu from './r_arrowAndMenu';
import SignUpForm from './sign-up_form';



class SignUp extends Component {
   
    render(){
        return(
            <Fragment>
                <RTopMenu/>       
                <SignUpForm />
            </Fragment>
            
        );
    }
}
export default SignUp;