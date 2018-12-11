import React, { Component } from 'react';
import '../assets/css/confirmationModal.css';
import {connect} from 'react-redux'; 
import { managePopUp } from '../actions';
import {Link} from 'react-router-dom';

class RConfirmationModal extends Component {

    close = () => {
        this.props.managePopUp();
    };

    render(){
        if(this.props.openConfirmation){
            return (
                <div className="basic-modal" onClick={this.close}>
                    <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                        <Link to="/check-in"onClick={this.close} className="basic-modal-close">X</Link>
                        <p>Thank you, your reservation is confirmed! There are 3 tables ahead of you.</p>
                    </div>
                </div>
            )
        }

        return null;
    }

}

function mapStateToProps(state) {
    return {
        openConfirmation: state.customer.open_confirmation
    }
}

export default connect(mapStateToProps, {
    managePopUp: managePopUp
})(RConfirmationModal);
