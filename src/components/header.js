import React from 'react';
import { withRouter } from 'react-router-dom';

const noShow = ['/'];

function Header(props){
    console.log('Header Props:', props);
    const { pathname } = props.location;
    if(noShow.includes(pathname)) return null;
    if(pathname.indexOf('restaurant')) return null;

    return (
        <React.Fragment>
            <h1>I'm the header</h1>
        </React.Fragment>
    )
}

export default withRouter(Header);