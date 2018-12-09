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

    close = () => this.setState({isOpen: false});

    componentDidUpdate(prevProps){
        if(!prevProps.saved && this.props.saved){
            this.open();
        }
    }

    render(){
        if(this.state.isOpen){
            return (
                <div className="basic-modal" onClick={this.close}>
                    <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                        <div onClick={this.close} className="basic-modal-close">X</div>
                        <p>Thank you, your reservation is confirmed! There are 3 tables ahead of you.</p>
                    </div>
                </div>
            )
        }

        return null;
    }

}

export default ConfirmationModal;