import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/reservationInfo.css';
import addButton from "../assets/images/addbutton.svg";
import removeButton from "../assets/images/removeButton.svg";
import ConfirmationModal from "./confirmationModal";
import axios from 'axios';

class CheckInForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            clientName: '',
            clientNumber: '',
            clientComments: '',
            clientGroupSize: 1,
            dataSaved: false
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        //CLIENT AND RESTAURANT DATA OBJECT
        const dataToSend = {
            ...this.state,
            restaurantName: this.props.restaurantName,
            restaurantID: this.props.restaurantID
        };
        const sendData = {
            first_name: this.state.clientName,
            last_name: this.state.clientName,
            phone_number: this.state.clientNumber,
            table_size: "5",
            wait_end: '2018-11-22 06:00:00',
            wait_start: '2018-11-22 06:00:00'
            };
        console.log('NEW CLIENT:', dataToSend);

        const tableResp = await axios({
            url: 'http://table.michaeljchu.com/api/tablefinder.php',
            method: 'POST',
            data: sendData,
            params: {
                actions: 'clients',
                method: 'insert'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
 
            
        });

        console.log("SENT DATA:",tableResp);

        this.setState({
            clientName: '',
            clientNumber: '',
            clientComments: '',
            clientGroupSize: 1,
            dataSaved: true
        });
        

        const placeResp = await axios.post('http://place.kim-chris.com/message/confirm',{
            restaurant: this.props.restaurantName,
            phone_number: this.state.clientNumber
        });

        console.log("CHECKED INNNN:", placeResp);
    };
//     handleSendData(dataToSend){

// }


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
        const { dataSaved } = this.state;

        return (
            <Fragment>
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
                        <ConfirmationModal  saved={dataSaved}/>
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default CheckInForm;


