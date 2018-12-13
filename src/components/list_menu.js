import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/r_list_menu.css';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';


export default props => {
    const restId= localStorage.getItem('restId')
            
    return (
        <Fragment>
            
            <div className="row rListMenu">
           
                <div className="col s4 center  ">
                    <Link to={`/waiting/${restId}`} className="btn-small blue  ">WAITING</Link>
                </div>
                <div className="col s4 center ">
                    <Link to={`/notified/${restId}`} className="btn-small blue">NOTIFIED</Link>
                </div>
                <div className="col s4 center ">
                    <Link  to={`/seated/${restId}`} className="btn-small blue">SEATED</Link>
                </div>
                {/* <div className="col s4 center ">
                    <Link to="/check-in" className="btn-small blue">CHECK-IN</Link>
                </div> */}
            </div>
        </Fragment>
    )
}
