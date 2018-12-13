import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, {Component} from 'react';
import Test from './test';
import LandingPage from './landingPage';
import '../assets/css/landingPage.css';
import tfLogo from '../assets/images/logo.png';
import {Route} from 'react-router-dom';
import ReservationInfo from "./reservationInfo";
import Login from './login';
import ListMenu from './list_menu';
import Waiting from './waiting';
import RCheckIn from './r_check-in';
import Seated from './seated';
import SignUp from './signup';
import RMenu from './r_menu';
import CustomerPg from './customer-page';
import Team from './team';
import About from './about';
import auth from '../hoc/auth';
import CustomLocationForm from './customer-page/customLocationForm';
import Notified from './notified'





class App extends Component {
    render() {
        return (
            <React.Fragment>

                <Route exact path="/" component={LandingPage} />
                <Route path="/reservation-info/:name/:id" component={ReservationInfo}/>
                <Route path="/login" component={Login}/>
                <Route path="/waiting/:rest_id" component={auth(Waiting)}/>
                <Route path="/check-in/:rest_id" component={auth(RCheckIn)}/>
                <Route path="/seated/:rest_id" component={auth(Seated)}/>
                <Route path="/signup" component={auth(SignUp, '/waiting', false)}/>
                <Route path="/notified/:rest_id" component={auth(Notified)}/>
                <Route path="/r_menu" component={RMenu}/>
                <Route path="/about" component={About}/>
                <Route path="/team" component={Team}/>
                <Route path="/customer-map" component={CustomerPg} />
                <Route path ="/custom-location" component={CustomLocationForm}/> 

            </React.Fragment>

        )
    }
} 
export default App;
