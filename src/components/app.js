import React, {Component} from 'react';
import Test from './test';
import LandingPage from './landingPage';
import '../assets/css/landingPage.css';
import tfLogo from '../assets/images/logo.png';
import {Route} from 'react-router-dom';
import CustomerPg from './customerPg';


class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={LandingPage} />
                <Route path="/customer-map" component={CustomerPg} />
                <Route path="/restaurant/login" />
                {/* <div className="app">
                    <Test/>
                </div> */}
            </React.Fragment>
        )
    }
} 
export default App;
