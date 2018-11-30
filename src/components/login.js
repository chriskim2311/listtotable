import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import LogInForm from './login-form';
import RTopMenu from './r_arrowAndMenu';




class Login extends Component {
    submit = values =>{
        console.log('values:', values );
    }
    render(){
        return (
            <div>
                <RTopMenu/>
                <LogInForm onSubmit={this.submit}/>
                <div className="row center">
                    <div className="col s4 offset-s4 ">
                        <Link to="/signup" className="btn grey ">Sign Up</Link>
                    </div>
                </div>
                    
             
            </div>
            
               
        )
       
    }
}
export default Login;
