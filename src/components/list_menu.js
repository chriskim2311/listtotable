import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/r_list_menu.css';


export default props => {
    return (
        <Fragment>
            
            <div className="row rListMenu">
                <div className="col s4 left-align ">
                    <Link to="/waiting" className="btn blue">WAITING</Link>
                </div>
                <div className="col s4 center">
                    <Link to="/seated" className="btn blue">SEATED</Link>
                </div>
                <div className="col s4 right-align ">
                    <Link to="/check-in" className="btn blue">CHECK-IN</Link>
                </div>
            </div>
        </Fragment>
    )
}
