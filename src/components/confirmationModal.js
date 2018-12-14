import React, { Component } from 'react';
import '../assets/css/confirmationModal.css';

class ConfirmationModal extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        };

    }

    open = () => this.setState({isOpen: true});

    close = () => {
        this.setState({isOpen: false,});
        this.props.modalReset();
    };

    componentDidUpdate(prevProps){
        console.log("previous props", prevProps);
        if(!prevProps.saved && this.props.saved){
            this.open();
        }
    }

    render(){
        console.log('confirmation modal: ', this.props);
        if(this.state.isOpen){
            return (
                <div className="basic-modal" onClick={this.close}>
                    <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                        <div onClick={this.close} className="basic-modal-close">X</div>
                        <p>Thank you, your reservation is confirmed! There are {this.props.tablesAhead} tables ahead of you.</p>
                    </div>
                </div>
            )
        }

        return null;
    }

}

export default ConfirmationModal;