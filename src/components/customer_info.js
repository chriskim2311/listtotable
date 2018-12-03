import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class CustomerInfo extends Component {
    
    renderCustomerListOnDom(){
        const partys = this.props.waiting_list;
        if(!partys){
            return
        }

        const customerList = partys.map((current, index) => {
            const name = current.name;
            const partyOf = current.partyOf
            const phone = current.phoneNumber
        
            return(
                <div key={index}>
                    <div className="row blue">
                        <div className="col s1">
                            <p>1</p>
                        </div>
                        <div className="col s4">
                            <ul>
                                <li>{name}</li>
                                <li>{partyOf}</li>
                                <li>{phone}</li>
                            </ul>
                        </div>
                        <div className="col s2 ">
                            <p>
                                <button>notify</button>
                            </p>
                            
                        </div>
                        <div className="col s2">
                            <p>
                                <button>seat</button>
                            </p>
                        </div>
                        <div className="col s1">
                            <p>del</p>
                        </div>
                    </div>
                </div>
            )
        })
        return customerList;
    }
   
    render(){
        console.log(this.props.waiting_list)
        


        return(
            <Fragment>
                {this.renderCustomerListOnDom()}
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    console.log('Redux State:', state);

    return {
        waiting_list: state.waitingList.waitingList
    }
}

export default connect(mapStateToProps)(CustomerInfo);