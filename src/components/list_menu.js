import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/r_list_menu.css';




export default props => {
    const restId= localStorage.getItem('restId')
            
    return (
        <Fragment>
            
            <div className="row rListMenu">
           
                <div className="col s4 center  ">
                    <Link to={`/waiting/${restId}`} className="btn-small #b0bec5 blue-grey lighten-3">WAITING</Link>
                </div>
                <div className="col s4 center ">
                    <Link to={`/notified/${restId}`} className="btn-small #78909c blue-grey lighten-1">NOTIFIED</Link>
                </div>
                <div className="col s4 center ">
                    <Link  to={`/seated/${restId}`} className="btn-small #546e7a blue-grey darken-1">SEATED</Link>
                </div>
                {/* <div className="col s4 center ">
                    <Link to="/check-in" className="btn-small blue">CHECK-IN</Link>
                </div> */}
            </div>
        </Fragment>
    )
}
