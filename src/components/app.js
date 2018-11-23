import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, {Component} from 'react';
import Test from './test';
import LandingPage from './landingPage';
import '../assets/css/landingPage.css';
import tfLogo from '../assets/images/logo.png';
import {Route} from 'react-router-dom';
import Login from './login';
import ListMenu from './list_menu';
import Waiting from './waiting';
import RCheckIn from './r_check-in';
import Seated from './seated';
import SignUp from './signup';
import RMenu from './r_menu';
import CustomerPg from './customerPg';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={LandingPage} />

                

            
                <Route path="/login" component={Login}/>
                <Route path="/waiting" component={Waiting}/>
                <Route path="/check-in" component={RCheckIn}/>
                <Route path="/seated" component={Seated}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/r_menu" component={RMenu}/>
                


                <Route path="/customer-map" component={CustomerPg} />

                {/* <div className="app">
                    <Test/>
                </div> */}
            </React.Fragment>

        )
    }
} 
export default App;
