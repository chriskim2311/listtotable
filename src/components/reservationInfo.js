import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/reservationInfo.css';
import addButton from "../assets/images/addbutton.svg";
import removeButton from "../assets/images/removebutton.svg";
import Header from './header';

class ReservationInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            number: '',
            comments: '',
            count: 1
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            name: '',
            number: '',
            comments: ''
        });
        console.log('New Customer:', this.state);
    };

    handleIncrement(){
        this.setState({
            count: this.state.count +1
        })
    }

    handleDecrement(){
        this.setState({
            count: this.state.count -1
        })
    }

    render (){
        console.log('info being changed', this.state);
        return (
            <React.Fragment>
                <Header/>
                <div className="mainContainer">

                    <div className="restaurantTitleBox">
                        <div className="restaurantTitle">Taco Sinaloa</div>
                    </div>

                    <form className="formBox" onSubmit={this.handleSubmit}>
                        <div className="input-field enterNameSearchBox">
                            <input
                                className="enterNameSearchField"
                                type="text"
                                value={this.state.name}
                                onChange={event => this.setState({name: event.target.value})}
                            />
                            <label>Enter Name</label>
                        </div>

                        <div className="input-field enterNumberSearchBox">
                            <input
                                className="enterNumberSearchField"
                                type="text"
                                value={this.state.number}
                                onChange={event => this.setState({number: event.target.value})}
                            />
                            <label>Enter Number</label>
                        </div>
                    </form>

                    <div className="tableSizeBox">
                        <div className="tableSizeTitle">Table Size</div>
                    </div>

                    <div className="tableInfoContainer">
                        <button
                            className="decrementButton"
                            onClick={() => this.handleDecrement()}
                        >
                            <img src={removeButton}/>
                        </button>

                        <div className="tableInputBox">{this.state.count}</div>

                        <button
                            className="incrementButton"
                            value={this.state.count}
                            onClick={() => this.handleIncrement()}
                        >
                            <img src={addButton}/>
                        </button>
                    </div>

                    <div className="commentsContainer">
                        <textarea
                            className="commentsBox"
                            placeholder="Comments"
                            value={this.state.comments}
                            onChange={event => this.setState({comments: event.target.value})}
                        >
                        </textarea>
                    </div>

                    <div className="submitButtonBox">
                        <button
                            onClick={this.handleSubmit}
                            className="submitButton btn btn-large"
                            type="submit"
                            name="action"
                        >SUBMIT</button>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default ReservationInfo;

