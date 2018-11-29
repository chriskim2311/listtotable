import React, { Component } from 'react';
import RTopMenu from './r_arrowAndMenu';
import SignUpForm from './sign-up_form';



class SignUp extends Component {
    submit = values =>{
        console.log('values:', values );
    }
    render(){
        return(
            <div className="container">
                <RTopMenu/>
                
                
                <SignUpForm onSubmit={this.submit} />
            </div>
            
        );
    }
}
export default SignUp;