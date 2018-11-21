import React, { Component } from 'react'; 
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/customerMapPg.css';
import greenTimer from '../assets/images/greenTime.png';
import redTimer from '../assets/images/redTime.png';
import yellowTimer from '../assets/images/yellowTime.png';
import { Link } from 'react-router-dom';
import Header from './header';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state={
            restaurantName: '' 
        }

    }   
    handleSearchItem = () => {
        event.preventDefault();
        console.log('info has been submitted',this.state)
        this.setState({
            restaurantName:''
        })
    }
    render() {
        console.log('info being changed', this.state)
        return (
            <React.Fragment>
                <div className="topContainer">

                    <Header/>
                    <div className="foodSearchHeader">
                        <div className="foodSearchBar">
                            <form onSubmit={this.handleSearchItem}>
                                <input 
                                    className="inputFood" 
                                    type="text" 
                                    value={this.state.restaurantName} 
                                    onChange={(e)=> {this.setState({restaurantName: e.target.value})}} 
                                    placeholder="Search for Restaurants"
                                />
                            </form>
                        </div>
                        <div className="searchButton">
                            <button onClick={this.handleSearchItem} className="search btn-small">Search</button>
                        </div>
                        
                    </div>
                    <div className="legendHeader">
                        <div className="legendTimeContainer">
                            <div className="legendTime">
                                <img className="greenTime" src={greenTimer}/>
                                <img className="yellowTime" src={yellowTimer}/>
                                <img className="redTime" src={redTimer}/>
                            </div>  
                            <div className="legendDetails">
                                <div className="clockInfo">0-30</div>
                                <div className="clockInfo">30-60</div>
                                <div className="clockInfo">60+</div>
                            </div>
                        </div>
                        <div className="toggleDisplayContainer">
                            <div className="toggleDisplay">
                                <div className="mapButton">MAP</div>
                                <Link to="/customer/List" className="listButton">LIST</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SearchBar;