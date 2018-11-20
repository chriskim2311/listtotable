import React from 'react';
import { withRouter } from 'react-router-dom';

const noShow = ['/'];

function Header(props){
    console.log('Header Props:', props);
    const { pathname } = props.location;

    if(noShow.includes(pathname)) return null;

    return (
        <React.Fragment>
            <h1>I'm the header</h1>
            {console.log("Did it work")}
        </React.Fragment>
    )
}

export default withRouter(Header);