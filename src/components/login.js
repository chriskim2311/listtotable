import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RTopMenu from './r_arrowAndMenu';
import LogInForm from './login-form';


class Login extends Component {
    submit = values =>{
        console.log('values:', values );
    }
    render(){
        return (
            <div>
                <RTopMenu/>
                <h1 className="text center">LOGO</h1>
                <LogInForm onSubmit={this.submit}/>
                <div className="row">
                    <div className="col s4 offset-s4 center -align ">
                        <Link to="/signup" className="btn grey">Sign Up</Link>
                    </div>
                </div>
                    
             
            </div>
            
               
        )
       
    }
}
export default Login;
