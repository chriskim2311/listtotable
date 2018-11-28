import React, { Component } from "react";
import "../assets/css/navigation.css";
import { NavLink, withRouter, Link } from "react-router-dom";



class Navigation extends Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            showNavMenu: false
        };
    }

    goBack() {
        if (this.props.history.length < 3) {
            this.props.history.replace("/");
        } else {
            this.props.history.goBack();
        }
    }

    toggleMenu() {
        this.setState({ showNavMenu: !this.state.showNavMenu });
    }

    render() {
        return (
            <nav className={this.props.location.pathname === "/" ? "navbar is-primary is-text-darker landing-burger" : "navbar is-primary is-text-darker"}>
                <i className="large material-icons back-button" onClick={this.goBack}>
                    arrow_back
					</i>


                {this.props.location.pathname === "/" ? null : (<NavLink to="/">
                    <h1 className="small-nav-title">TF</h1>
                    <h1 className="large-nav-title">Table Finder</h1>
                </NavLink>)}

                <div
                    className={this.state.showNavMenu ? "burger-menu close" : "burger-menu"}
                    onClick={this.toggleMenu}
                >
                    <span />
                    <span />
                    <span />
                </div>

                <ul className={this.state.showNavMenu ? "show" : ""} onClick={this.toggleMenu}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/customer-map">Map</Link>
                    </li>
                    <li>
                        <Link to="/reservation-info">Check-In</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/team">Team</Link>
                    </li>
                </ul>

                <div className={this.state.showNavMenu ? "invisible-nav-show" : "invisible-nav-close"}
                    onClick={this.toggleMenu}
                >

                </div>
            </nav>
        );
    }
}

export default withRouter(Navigation); //withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.