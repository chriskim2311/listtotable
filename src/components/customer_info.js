import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'


class CustomerInfo extends Component {


    handleNotify(){
        // const phoneNumber = this.props.waiting_list[0].phoneNumber;
        // const restaurantName = null;
        axios.post('http://place.kim-chris.com/message/notify',{
            restaurant: "RESTAURANT_NAME",
            phone_number: "6615474865"
        }).then(resp => {
            console.log("CHECKED INNNN:", resp)})
    }
    
    renderCustomerListOnDom(){
        const partys = this.props.waiting_list;
        console.log(partys)
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
                                <button
                                 onClick={this.handleNotify}>notify</button>
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