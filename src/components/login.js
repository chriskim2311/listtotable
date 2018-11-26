import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RTopMenu from './r_arrowAndMenu';

class Login extends Component {
    render(){
        return (
            <div>
                <RTopMenu/>
                <div className="container">
                    <h1 className="center">LOGO</h1>
                    <div className="row">
                        <div className="input-field col s4 offset-s4 center-align">
                            <input type="text"/>
                            <label htmlFor="">Login</label>
                        </div>
                        
                    </div> 
                    
                   
                    <div className="row">
                        <div className="input-field col s4 offset-s4 center-align">
                            <input type="password"/>
                            <label htmlFor="">Password</label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col s4 offset-s4 center-align">
                            <button className="btn grey darken-2">Login</button>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col s4 offset-s4 center -align ">
                            <Link to="/signup" className="btn grey">Sign Up</Link>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
               
        )
       
    }
}
export default Login;
