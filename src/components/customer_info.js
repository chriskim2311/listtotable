import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

import { getWaitingListData, getNotifiedListData, changeNotifyStatus, deleteListItem, changeSeatedStatus } from '../actions';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';


class CustomerInfo extends Component {
    componentDidMount(){
        const waitingObj = {
            restaurant_id:'ChIJleVgXPnn3IARUGDd-mGJHYw',
            status: 1
        }

        const notifiedObj = {
            restaurant_id:'ChIJleVgXPnn3IARUGDd-mGJHYw',
            status: 2
        }
        // console.log('data after componentdid mount', this.props)
        this.props.notifiedListData(notifiedObj);
        this.props.waitingListData(waitingObj);
    }

    // componentWillUpdate(){
    //     this.props.waitingListData();
    // }

    handleNotify(){

        // console.log("PHONEEEE", key)
        // const phoneNumber = this.props.waiting_list[0].phoneNumber;
        axios.post('/api/tablefinder.php?action=clients&method=updateNotified',
            phone
        
        );
        
        // console.log(' UPDATE Notified call response:', resp);
        // const restaurantID 
        // this.props.notifiedListData(phone);
        // const restaurantName = null;
        axios.post('http://place.kim-chris.com/message/notify',{
            restaurant: "RESTAURANT_NAME",
            phone_number: phone 
        }).then(resp => {
            // console.log("CHECKED INNNN:", resp)
        })
    }

    renderNotifiedListOnDom(){
        // console.log('+++++++++ props:', this.props)
        const notified = this.props.notified_list;

        // console.log('partys from server on customerinfo page',notified)

        if(!notified){
            return
        }

        const notifiedList = notified.map((current, index) => {
            const name = current.client_name;
            const partyOf = current.table_size
            const phone = current.phone_number;
            const ID = current.ID;
        
            return(
                <div key={index}>
                    <div className="row yellow">
                        <div className="col s1">
                            <p>{index +1}</p>
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
                                 onClick={this.handleNotifyssss}>notify</button>
                            </p>
                            
                        </div>
                        <div className="col s2">
                            <p>
                                <button onClick={()=>this.props.updatedSeated(ID)} >seat</button>
                            </p>
                        </div>
                        <div className="col s1" onClick={()=> this.props.deleteListItem(phone)}>
                            <p>del</p>
                        </div>
                    </div>
                </div>
            )
        })
        return notifiedList;
    }
    renderCustomerListOnDom(){
       

        const partys = this.props.waiting_list;
        // console.log('partys on customerinfo page',partys)

        if(!partys){
            return
        }

        const customerList = partys.map((current, index) => {
            const name = current.client_name;
            const partyOf = current.table_size
            const phone = current.phone_number
            const restaurantName = current.restaurant_name;
            const ID = current.ID;
        
            return(
                <div key={index}>
                    <div className="row blue">
                        <div className="col s1">
                            <p>{index +1}</p>
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
                                 onClick={()=>this.props.updateNotified(restaurantName, ID, phone)}>notify</button>
                            </p>
                            
                        </div>
                        <div className="col s2">
                            <p>
                                <button onClick={()=>this.props.updatedSeated(ID)}  >seat</button>
                            </p>
                        </div>
                        <div className="col s1" onClick={()=> this.props.deleteListItem(phone)}>
                            <p>del</p>
                        </div>
                    </div>
                </div>
            )
        })
        return customerList;
    
        }
    
    render(){
        
        return(
            <Fragment>
                <div>
                    {this.renderNotifiedListOnDom()}
                </div>
                <div>
                    {this.renderCustomerListOnDom()}
                </div>
                
            </Fragment>
        )
    }
}


function mapStateToProps(state){
    // console.log('Redux State:', state);

    return {
        waiting_list: state.waitingList.waitingList,
        notified_list: state.waitingList.notifiedList
    }
}

export default connect(mapStateToProps,{
    deleteListItem: deleteListItem,
    waitingListData: getWaitingListData,
    notifiedListData: getNotifiedListData,
    updateNotified: changeNotifyStatus,
    updatedSeated: changeSeatedStatus
    
})(CustomerInfo);