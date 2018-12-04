import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut, userLogOut } from '../actions';
// import '../assets/css/r_menu.css';
// import logo from '../assets/images/r_logo.png';
// import checkIn from '../assets/images/checkin.png'
// import waiting from '../assets/images/clock.png'
// import contactUs from '../assets/images/Contact-Me.jpg'
// import seated from '../assets/images/table.png'
// import account from '../assets/images/account.png'
// import home from '../assets/images/home.png'



class RNavMenu extends Component{
    renderLinks = () => {
        const {auth, logOut} = this.props;
        if(auth){
            return(
                <Fragment>
                    <li>
                        <Link to="/waiting">Waiting</Link>
                    </li>
                    <li>
                        <Link to="/seated">Seated</Link>
                    </li>
                    <li>
                        <Link to="/check-in">Check-In</Link>
                    </li>
                    <li>
                        <button onClick={logOut} className="green btn">Log Out</button>
                    </li>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </Fragment>
        )
    }
    render(){
        console.log('user auth:', this.props.auth)
        return (
            <Fragment>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {this.renderLinks()}
    
                {/* <div className="row container ">
                    <div className=" col s10 r_menu">
                        <div className="center">
                            <img className="logoImg circle responsive-img" src={logo} alt="" />
                        </div>
                        <div className="row">
                            <div className="menuRow col">
                                <div className="container s12">
                                    <Link to="/">
                                        <img className="s2 circle responsive-img" src={home} alt=""/>
                                        <h3 className="s8"> homepage</h3>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="row">
                            <div className="menuRow col">
                                <div className="container ">
                                    <Link to="/">
                                    <img className="s2 circle responsive-img" src={account} alt=""/>
                                    <h3 className="s8">account</h3>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="row">
                            <div className="menuRow col">
                                <div className="container ">
                                    <Link to="/check-in">
                                        <img className="s2 circle responsive-img" src={checkIn} alt=""/>
                                        <h3 className="s8">check-in</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="menuRow col">
                                <div className="container ">
                                    <Link to="/waiting">
                                        <img className="s2 circle responsive-img" src={waiting} alt=""/>
                                        <h3 className="s8">waiting</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="menuRow col">
                                <div className="container ">
                                    <Link to="/seated">
                                        <img className="s2 circle responsive-img" src={seated} alt=""/>
                                        <h3 className="s8">seated</h3>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="row">
                            <div className="menuRow col">
                                <div className="container ">
                                    <Link to="/">
                                        <img className="circle responsive-img" src={contactUs} alt=""/>
                                    </Link> 
                                </div>
                            </div>
                        </div> */}
                    {/* </div>
                    <div className="col container s2">
                        <div className="row">
                            <div className="col s2 clear">MENU</div>
                        </div>
                    </div>
                </div> */}
                
                
            </Fragment>
    )}
}

function mapStateToProps(state){
    return{
        auth: state.partner.auth
    }
}

export default connect(mapStateToProps, {
    logOut: userLogOut,
}) (RNavMenu);