import React from 'react';
import {Link} from 'react-router-dom'
import RTopMenu from '../r_arrowAndMenu';
import './404.css';

export default props => (
    <div>
        <RTopMenu/>
        <div className="not-found-container">
            <div className="not-found-body">
                <h4>404 - Page Not Found</h4>
                <Link to="/">
                    <i className="material-icons">home</i> 
                </Link>
            </div>

        </div>
    </div>
   
)