import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/r_list_menu.css';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';


export default props => {
    return (
        <Fragment>
            
            <div className="row rListMenu">
           
                <div className="col s4 center hoverable  ">
                    <Link to="/waiting" className="btn-small blue hoverable ">WAITING</Link>
                </div>
                <div className="col s4 center ">
                    <Link to="/notified" className="btn-small blue">NOTIFIED</Link>
                </div>
                <div className="col s4 center ">
                    <Link to="/seated" className="btn-small blue">SEATED</Link>
                </div>
                {/* <div className="col s4 center ">
                    <Link to="/check-in" className="btn-small blue">CHECK-IN</Link>
                </div> */}
            </div>
        </Fragment>
    )
}
