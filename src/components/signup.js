import React, { Component, Fragment } from 'react';
import RTopMenu from './r_arrowAndMenu';
import SignUpForm from './sign-up_form';



class SignUp extends Component {
    submit = values =>{
        console.log('values:', values );
    }
    render(){
        return(
            <Fragment>
                <RTopMenu/>       
                <SignUpForm onSubmit={this.submit} />
            </Fragment>
            
        );
    }
}
export default SignUp;