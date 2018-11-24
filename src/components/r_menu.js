import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/r_menu.css';
import logo from '../assets/images/r_logo.png';
import checkIn from '../assets/images/checkin.png'
import waiting from '../assets/images/clock.png'
import contactUs from '../assets/images/Contact-Me.jpg'
import seated from '../assets/images/table.png'
import account from '../assets/images/account.png'
import home from '../assets/images/home.png'


export default () => {
    return (
        <div>
            <div className="container">
            <div className="row container ">
                <div className=" col s10 r_menu">
                    <div className="center">
                        <img className="logoImg circle responsive-img" src={logo} alt="" />
                    </div>
                    <div className="row">
                        <div className="menuRow col">
                            <div className="container ">
                                <Link to="/">
                                    <img className="circle responsive-img" src={home} alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="menuRow col">
                            <div className="container ">
                                <Link to="/">
                                <img className="circle responsive-img" src={account} alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="menuRow col">
                            <div className="container ">
                                <Link to="/check-in">
                                    <img className="circle responsive-img" src={checkIn} alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="menuRow col">
                            <div className="container ">
                                <Link to="/waiting">
                                    <img className="circle responsive-img" src={waiting} alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="menuRow col">
                            <div className="container ">
                                <Link to="/seated">
                                    <img className="circle responsive-img" src={seated} alt=""/>
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
            </div>
            
        </div>
    )
}