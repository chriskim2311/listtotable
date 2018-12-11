
import React, { Component } from 'react';
import Navigation from './hamburgerAndBack'

export default class About extends Component {

    
    render() {
        return(
            <React.Fragment>
            <Navigation/>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium culpa ducimus, eligendi error eveniet, impedit odit officia quia
                    recusandae sapiente velit, voluptas. Delectus eaque eos in laboriosam natus,
                    neque quibusdam?
                </p>

            </React.Fragment>
        )
    }
}