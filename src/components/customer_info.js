import
    React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import { getWaitingListData, getNotifiedListData } from '../actions';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';


class CustomerInfo extends Component {
    componentDidMount(){
        // console.log('data after componentdid mount', this.props)
        this.props.notifiedListData();
        this.props.waitingListData();
    }

    // componentWillUpdate(){
    //     this.props.waitingListData();
    // }

    handleNotify(){
        // const phoneNumber = this.props.waiting_list[0].phoneNumber;
        // const restaurantName = null;
        axios.post('http://place.kim-chris.com/message/notify',{
            restaurant: "RESTAURANT_NAME",
            phone_number: "6615474865"
        }).then(resp => {
            // console.log("CHECKED INNNN:", resp)
        })
    }


    convertTime(inputString){
        //GET NEW DATE AND TIME IN MILLISECONDS
        var newDate = new Date();
        var newTime = newDate.getTime();

        //CONVERT OLD TIME TO MILLISECONDS
        var timeStamp = inputString;
        var oldTime = new Date(timeStamp).getTime();

        //DIFFERENCE
        var difference = newTime - oldTime;

        //CONVERT MILLISECONDS TO SECONDS TO MINUTES
        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);

        //RESULT
        return minutes;
    }

    renderNotifiedListOnDom(){
        console.log('+++++++++ props:', this.props)
        const notified = this.props.notified_list;
        console.log('partys from server on customerinfo page',notified)
        if(!notified){
            return
        }

        const notifiedList = notified.map((current, index) => {
            const name = current.client_name;
            const partyOf = current.table_size;
            const phone = current.phone_number;
            const timeWhenNotified = current.wait_notify;
            const waitTimeSinceNotified = this.convertTime(timeWhenNotified);
            console.log("TIME SINCE NOTIFIED:", waitTimeSinceNotified);
        
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
                        <div className="">
                            <div className="col s12">
                                Notified {waitTimeSinceNotified} minutes ago
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return notifiedList;
    }
    renderCustomerListOnDom(){
       

        const partys = this.props.waiting_list;
        // console.log('partys from server on customerinfo page',partys)
        if(!partys){
            return
        }

        const customerList = partys.map((current, index) => {
            const name = current.client_name;
            const partyOf = current.table_size;
            const phone = current.phone_number;
            const timeWhenAdded = current.wait_start;
            const waitTimeSinceAdded = this.convertTime(timeWhenAdded);
            console.log("TIME SINCE ADDED:", waitTimeSinceAdded);

            return(
                <div className="blue" key={index}>
                    <div className="row ">
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
                        <div className="col s7">
                            <div className="">
                                <div className="col s4">
                                    <p>
                                        <button
                                            onClick={this.handleNotify}>notify</button>
                                    </p>

                                </div>
                                <div className="col s4">
                                    <p>
                                        <button>seat</button>
                                    </p>
                                </div>
                                <div className="col s4">
                                    <p>del</p>
                                </div>
                            </div>
                            <div className="">
                                <div className="col s12">
                                    Added {waitTimeSinceAdded} minutes ago
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
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
    console.log('Redux State:', state);

    return {
        waiting_list: state.waitingList.waitingList,
        notified_list: state.waitingList.notifiedList
    }
}

export default connect(mapStateToProps,{
    
    waitingListData: getWaitingListData,
    notifiedListData: getNotifiedListData
})(CustomerInfo);