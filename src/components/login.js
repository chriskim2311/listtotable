import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import LogInForm from './login-form';
import RTopMenu from './r_arrowAndMenu';




class Login extends Component {
    
    render(){
        return (
            <Fragment>
                <RTopMenu/>
                <LogInForm history={this.props.history}/>
                <div className="row center">
                    <div className="col s4 offset-s4 ">
                        <Link to="/signup" className="btn grey ">Sign Up</Link>
                    </div>
                </div>
            </Fragment>
            
               
        )
       
    }
}
export default Login;
