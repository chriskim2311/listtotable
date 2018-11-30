import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/reservationInfo.css';
import addButton from "../assets/images/addbutton.svg";
import removeButton from "../assets/images/removeButton.svg";

class CheckInForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            clientName: '',
            clientNumber: '',
            clientComments: '',
            clientGroupSize: 1
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        //CLIENT AND RESTAURANT DATA OBJECT
        const dataToSend = {
            ...this.state,
            restaurantName: this.props.restaurantName,
            restaurantID: this.props.restaurantID
        };
        console.log('NEW CLIENT:', dataToSend);

        this.setState({
            clientName: '',
            clientNumber: '',
            clientComments: '',
            clientGroupSize: 1
        });

    };

    handleIncrement(){
        this.setState({
            clientGroupSize: this.state.clientGroupSize +1
        })
    }

    handleDecrement(){
        if(this.state.clientGroupSize === 1){
            this.setState({
                clientGroupSize: 1
            })
        }
        else{
            this.setState({
                clientGroupSize: this.state.clientGroupSize -1
            })
        }

    }

    render (){
        console.log('info being changed', this.state);
        return (
            <React.Fragment>
                <div className="container">

                    <form onSubmit={this.handleSubmit}>
                         <div className="row">
                             <div className="input-field col s10 center-align offset-s1">
                                 <input
                                     type="text"
                                     value={this.state.clientName}
                                     onChange={event => this.setState({clientName: event.target.value})}
                                 />
                                 <label>Enter Name</label>
                             </div>
                         </div>

                        <div className="row">
                            <div className="input-field col s10 center-align offset-s1">
                                <input
                                    type="text"
                                    value={this.state.clientNumber}
                                    onChange={event => this.setState({clientNumber: event.target.value})}
                                />
                                <label>Enter Number</label>
                            </div>
                        </div>
                    </form>

                    <div className="tableSizeTitle">Table Size</div>

                    <div className="tableInfoContainer">
                        <button
                            className="decrementButton"
                            onClick={() => this.handleDecrement()}
                        >
                            <img src={removeButton}/>
                        </button>

                        <div className="tableInputBox">{this.state.clientGroupSize}</div>

                        <button
                            className="incrementButton"
                            value={this.state.clientGroupSize}
                            onClick={() => this.handleIncrement()}
                        >
                            <img src={addButton}/>
                        </button>
                    </div>

                    <div className="commentsContainer">
                        <textarea
                            className="commentsBox"
                            placeholder="Comments"
                            value={this.state.clientComments}
                            onChange={event => this.setState({clientComments: event.target.value})}
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

export default CheckInForm;