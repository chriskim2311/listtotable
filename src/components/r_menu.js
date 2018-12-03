import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/r_menu.css';
import logo from '../assets/images/r_logo.png';
import checkIn from '../assets/images/checkin.png'
import waiting from '../assets/images/clock.png'
// import contactUs from '../assets/images/Contact-Me.jpg'
import seated from '../assets/images/table.png'
// import account from '../assets/images/account.png'
import home from '../assets/images/home.png'


export default () => {
    return (
        <Fragment>
            
            <div className="row container ">
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
                    </div>
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
                    <div className="row">
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
                    </div>
                    {/* <div className="row">
                        <div className="menuRow col">
                            <div className="container ">
                                <Link to="/">
                                    <img className="circle responsive-img" src={contactUs} alt=""/>
                                </Link> 
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="col container s2">
                    <div className="row">
                        <div className="col s2 clear">MENU</div>
                    </div>
                </div>
            </div>
            
            
        </Fragment>
    )
}