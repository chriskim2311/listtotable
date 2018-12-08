import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/reservationInfo.css';
import addButton from "../assets/images/addbutton.svg";
import removeButton from "../assets/images/removeButton.svg";
// import Axios from '../../../frontend/to-do-list/node_modules/axios';
import axios from 'axios';

class CheckInForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            clientName: '',
            clientNumber: '',
            clientComments: '',
            clientGroupSize: 1,
            status: ''
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
        const sendData = {
            client_name: this.state.clientName,
            phone_number: this.state.clientNumber,
            restaurant_id: this.props.restaurantID,
            restaurant_name: this.props.restaurantName,
            wait_start: '2018-11-22 06:00:00',
            wait_end: '2018-11-22 06:00:00',
            table_size: this.state.clientGroupSize,
            comments:this.state.clientComments,
            // status: this.state.status
            }
        console.log('NEW CLIENT:', dataToSend);
        axios({
            url: '/api/tablefinder.php',
            method: 'POST',
            data: sendData,
            params: {
                action: 'clients',
                method: 'insert'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
 
            
        }).then(resp =>{
            console.log("SENT DATA:",resp)
        })

        this.setState({
            clientName: '',
            clientNumber: '',
            clientComments: '',
            clientGroupSize: 1
        });

        axios.post('http://place.kim-chris.com/message/confirm',{
            restaurant: this.props.restaurantName,
            phone_number: this.state.clientNumber
        }).then(resp => {
            console.log("CHECKED INNNN:", resp)})
        
    

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
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default CheckInForm;