import React, { Component } from 'react'; 
import { Field, reduxForm } from 'redux-form'; 
import {connect} from 'react-redux'; 
import '../assets/css/r_check_in.css';
import addButton from "../assets/images/addbutton.svg";
import removeButton from "../assets/images/removeButton.svg";
import {customerCheckInIncrement} from '../actions';
import {customerCheckInDecrement} from '../actions';
import {customerCheckIn} from '../actions';
import {sendCustomerText} from '../actions';
import {managePopUp} from '../actions'
import RConfirmationModal from "./r_confirmationModal"


class RestaurantCheckInForm extends Component {
    renderInput = (props) => {
        // console.log('render', props)
        const {input, label, size} = props
        return (
            <div className={`input-field col ${size} center-align offset-s1`}>
                <input {...input} type="text"/>
                <label htmlFor="">{label}</label>
            </div>
        )
    }

    completeCheckIn = (values) =>{
        const { enterName, phoneNumber, comments } = values 
        const sendData = { 
            client_name: enterName,
            phone_number: phoneNumber,
            restaurant_id: 'ChIJleVgXPnn3IARUGDd-mGJHYw',
            restaurant_name: 'Yard House',
            wait_start: '2018-11-22 06:00:00',
            wait_end: '2018-11-22 06:00:00',
            table_size: this.props.tableSize,
            comments: comments,
            status: 'waiting'
        }
        this.props.submitCheckIn(sendData)
        this.props.managePopUp()
        this.props.sendCustomerText(sendData)
    }
    render(){
        const { handleSubmit } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit(this.completeCheckIn)} >
                    <div className="row">
                        <Field name="enterName" size="s10" label="Enter Name" component={this.renderInput} />
                    </div>
                    <div className="row">
                        <Field name="phoneNumber" size="s10" label="Phone Number" component={this.renderInput} />
                    </div>
                    <div className="tableSizeTitle">Table Size</div>
                    <div className="tableInfoContainer">
                        <button
                            type="button"
                            className="decrementButton"
                            onClick={this.props.Decrement}>
                            <img src={removeButton}/>
                        </button>

                        <div className="tableInputBox">{this.props.tableSize}</div>
                        <button 
                            type ="button"
                            className="incrementButton"
                            onClick={this.props.Increment}>
                            <img src={addButton}/>
                        </button>
                    </div>
                    <div className="row text-align center">
                        <div className="col s10 center-align offset-s1">
                            <Field className="text-align center" name="comments" label="Comments" placeholder="Comments" component="textarea" />
                        </div>
                    </div>
                    <div className="col s6 center">
                        <button onClick={handleSubmit(this.completeCheckIn)}className="btn blue">Submit</button>
                        <RConfirmationModal/>
                    </div>
                </form>
            </div>
        )
    }
}



RestaurantCheckInForm = reduxForm({
    form: 'check-in'
})
(RestaurantCheckInForm); 

function mapStateToProps(state) {
    return {
        tableSize: state.customer.table_size,
    }
}

export default connect(mapStateToProps, {
    Increment: customerCheckInIncrement,
    Decrement: customerCheckInDecrement,
    submitCheckIn: customerCheckIn, 
    sendCustomerText: sendCustomerText,
    managePopUp: managePopUp
})(RestaurantCheckInForm)