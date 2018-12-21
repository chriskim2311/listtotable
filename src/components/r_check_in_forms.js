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
import Input from './forms_input';

class RestaurantCheckInForm extends Component {

    completeCheckIn = (values) =>{
        const restId= localStorage.getItem('restId');
        const restName= localStorage.getItem('restName');
        
        const { enterName, phone, comments } = values 
        const sendData = { 
            client_name: enterName,
            phone_number: phone,
            restaurant_id: restId,
            restaurant_name: restName,
            table_size: this.props.tableSize,
            comments: comments,
            status: 1
        }
        
        this.props.submitCheckIn(sendData)
        this.props.managePopUp()
        this.props.sendCustomerText(sendData)
    }




    render(){
        const { handleSubmit, error } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit(this.completeCheckIn)} >
                    <div className="row">
                        <Field name="enterName" size="s10" label="Enter Name" component={Input} />
                    </div>
                    <div className="row">
                        <Field name="phone" size="s10" label="Phone Number" component={Input} />
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
                        <button type="submit" className="btn waves-effect waves-light blue darken-3">Submit</button>
                        <RConfirmationModal/>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(values){
    const {enterName, phone} = values;
    const error =[];

    const phoneRegex =/^(1*)[ -]*([0-9]{3})([ -]*)([0-9]{3})([ -]*)([0-9]{4})$|^[(]([0-9]{3})[)]([ -]*)([0-9]{3})([ -]*)([0-9]{4})$/;

    if(!enterName){
        error.enterName = 'Please enter your name';
    }

    if(!phone){
        error.phone = 'Please enter Phone number';
    } else if(!phoneRegex.test(phone)){
        error.phone = 'Please enter 10 digits phone number starting with area cod';
    }
    return error;
}

RestaurantCheckInForm = reduxForm({
    form: 'check-in',
    validate: validate
})
(RestaurantCheckInForm); 

function mapStateToProps(state) {
    console.log('state from mapstateto props:', state)
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