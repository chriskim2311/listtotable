import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/reservationInfo.css';
import addButton from "../assets/images/addbutton.svg";
import removeButton from "../assets/images/removeButton.svg";
import ConfirmationModal from "./confirmationModal";
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
            dataSaved: false,
            tablesAhead: null
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
            client_name: this.state.clientName,
            phone_number: this.state.clientNumber,
            restaurant_id: this.props.restaurantID,
            restaurant_name: this.props.restaurantName,
            table_size: this.state.clientGroupSize,
            comments:this.state.clientComments,
            // wait_start: "",
            status: 1
        };

        const tableResp = await axios({
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
 
            
        });
        
        const placeResp =  axios.post('https://place.kim-chris.com/message/confirm',{
            restaurant: this.props.restaurantName,
            phone_number: this.state.clientNumber
        });
        console.log("SENT DATA:",tableResp);


        const response = await axios.post('/api/tablefinder.php?action=clients&method=getWaiting',
        {restaurant_id: this.props.restaurantID,
        status: 1
        });

        console.log(response);
        if(response.data.success){
        const peopleAhead = response.data.clients.length;
        


        this.setState({
            clientName: '',
            clientNumber: '',
            clientComments: '',
            clientGroupSize: 1,
            dataSaved: true,
            tablesAhead: peopleAhead
        });
    }
    else{
        const peopleAhead = 0;
        this.setState({
            clientName: '',
            clientNumber: '',
            clientComments: '',
            clientGroupSize: 1,
            dataSaved: true,
            tablesAhead: peopleAhead
        });
    }
        console.log("CHECKED INNNN:", placeResp);

    
    
    };
//     handleSendData(dataToSend){

// }

    modalReset = () =>{
        this.setState({
            clientName: '',
            clientNumber: '',
            clientComments: '',
            clientGroupSize: 1,
            dataSaved: false,
            tablesAhead: null
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
                        <ConfirmationModal
                            saved={dataSaved}
                            tablesAhead={this.state.tablesAhead}
                            modalReset={this.modalReset}
                        />
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default CheckInForm;


