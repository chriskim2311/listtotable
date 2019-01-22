import React, {Component} from 'react';
import {connect} from 'react-redux';


export default function(WrappedComponent, to = '/login', requireAuth = true){
    class Auth extends Component {
        componentDidMount(){
            console.log('Auth Hoc', this.props)
            this.checkAuth();
        }
        componentDidUpdate(){
            this.checkAuth();
        }
    
        checkAuth(){
            if(this.props.auth !==requireAuth){
                this.props.history.push(to);
            }
        }
        render(){
            return <WrappedComponent {...this.props}/>
            }
        }
        function mapStateToProps(state){
            return{
                auth:state.partner.auth
            }
        }
    return connect(mapStateToProps)(Auth);
}