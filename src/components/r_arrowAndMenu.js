import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/images/hamburgerm.png';
import arrow from '../assets/images/arrowLeft.png';
import '../assets/css/r_header.css';

export default () => (
    <div>
         <div className="row container headArrowAndMenu">
            <div className="col s6 left-align">
                <img src={arrow} alt=""/>
            </div>
            <div className="col s6 right-align">
                <Link to="/r_menu">
                    <img className="  responsive-img" src={menu} alt=""/>
                </Link>
            </div>
        </div>
    </div>
  
        
    
)


