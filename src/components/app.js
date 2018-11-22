import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, {Component} from 'react';
import Test from './test';
import LandingPage from './landingPage';
import '../assets/css/landingPage.css';
import tfLogo from '../assets/images/logo.png';
import {Route} from 'react-router-dom';



import Login from './login';
import CustomerPg from './customerPg';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={LandingPage} />

                

            
                <Route path="/login" component={Login}/>
                
                


                <Route path="/customer-map" component={CustomerPg} />

                {/* <div className="app">
                    <Test/>
                </div> */}
            </React.Fragment>

        )
    }
} 
export default App;
