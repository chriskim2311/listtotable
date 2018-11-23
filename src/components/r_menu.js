import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/r_menu.css';

export default () => {
    return (
        <div>
            <div className="container">
            <div className="row container ">
                <div className="container col s10 r_menu">
                    <div className="row container">
                        <div className="col r_menuLogo">
                            <div className="container center ">LOGO</div> 
                        </div>
                    </div>
                    
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