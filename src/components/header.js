import React from 'react';
import '../assets/css/header.css';
import menu from "../assets/images/headermenu.svg";

function Header(props){
    return (
        <React.Fragment>
            <div className="header">
                <div className="header-logo-container">
                    <div className="header-text">TF</div>
                </div>
                <div className="header-menu-container">
                    <div className="header-menu-image">
                        <img src = {menu} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;