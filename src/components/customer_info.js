import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import { getWaitingListData, changeSeatedStatus, changeNotifyStatus, deleteListItem, userLogIn } from '../actions';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import "../assets/css/customer_info.css"
// import seat from "../assets/images/seated.png"


class CustomerInfo extends Component {
    // constructor({match, ...props}) {
    //     super(props);
    //     console.log(match.params)
    // }
    componentDidMount() {
        const restId= localStorage.getItem('restId')
        const waitingObj = {
            restaurant_id: restId,
            status: 1
        }
        this.props.waitingListData(waitingObj)
       

        
        // setInterval(()=>{
        //     this.props.waitingListData(waitingObj)}, 10000
        // )



      

      
    }

    // componentWillUpdate(){
    //     this.props.waitingListData();
    // }



    convertTime(inputString) {
        //GET NEW DATE AND TIME IN MILLISECONDS
        var newDate = new Date();
        var newTime = newDate.getTime();

        //CONVERT OLD TIME TO MILLISECONDS
        var timeStamp = inputString + " UTC";
        console.log(timeStamp);
        var oldTime = new Date(timeStamp).getTime();

        //DIFFERENCE
        var difference = newTime - oldTime;


        //CONVERT MILLISECONDS TO SECONDS TO MINUTES
        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);

        //RESULT
        return minutes;
    }

    // renderNotifiedListOnDom() {
    //     // console.log('+++++++++ props:', this.props)
    //     const notified = this.props.notified_list;

    //     // console.log('partys from server on customerinfo page',notified)

    //     if (!notified) {
    //         return
    //     }

    //     const notifiedList = notified.map((current, index) => {
    //         const name = current.client_name;

    //         const partyOf = current.table_size
    //         const phone = current.phone_number;
    //         const ID = current.ID;
    //         const timeWhenNotified = current.wait_notify;
    //         const waitTimeSinceNotified = this.convertTime(timeWhenNotified);
    //         console.log("TIME SINCE NOTIFIED:", waitTimeSinceNotified);


    //         return (

    //             <div key={index}>
    //                 <div className="row yellow">
    //                     <div className="col s1">
    //                         <p>{index + 1}</p>
    //                     </div>
    //                     <div className="col s4">
    //                         <ul>
    //                             <li>{name}</li>
    //                             <li>{partyOf}</li>
    //                             <li>{phone}</li>
    //                         </ul>
    //                     </div>
    //                     <div className="col s2 ">
    //                         <p>
    //                             <button
    //                                 onClick={this.handleNotifyssss}>notify</button>
    //                         </p>

    //                     </div>
    //                     <div className="col s2">
    //                         <p>
    //                             <button onClick={() => this.props.updatedSeated(ID)} >seat</button>
    //                         </p>
    //                     </div>

    //                     <div className="col s1" onClick={()=> this.props.deleteListItem(ID)}>



    //                         <p>del</p>
    //                     </div>

    //                     <div className="col s12">
    //                         Notified {waitTimeSinceNotified} minutes ago
    //                         </div>
    //                 </div>
    //             </div>

    //         )
    // })
    //     return notifiedList;
    // }
    renderCustomerListOnDom() {


        const partys = this.props.waiting_list;
        // console.log('partys on customerinfo page',partys)


        if (!partys) {
            return
        }

        const customerList = partys.map((current, index) => {
            const name = current.client_name;
            const partyOf = current.table_size
            const phone = current.phone_number
            const restaurantName = current.restaurant_name;
            const ID = current.ID;
            const timeWhenAdded = current.wait_start;
            const waitTimeSinceAdded = this.convertTime(timeWhenAdded);
            const comments = current.comments
            console.log("TIME SINCE ADDED:", waitTimeSinceAdded);


            return (
                <div key={index} >
                    <div className="row #b0bec5 blue-grey lighten-3">
                    <div className="col s12">
                    <button className="small btn waves-effect  waves offset-s1 col s3 center #a5d6a7 green lighten-3"
                                onClick={() => this.props.updateNotified(restaurantName, ID, phone)}>notify</button>

                     <button className="small btn orange waves-effect  waves offset-s1 col s3 center" onClick={() => this.props.updatedSeated(ID) }  >seat</button>
                    <button className="small btn red waves-effect  waves offset-s1 col s3 center" onClick={() => this.props.deleteListItem(ID) } > <i className=" small material-icons">delete</i></button>

                    
                    
                    </div>

                    <div className="row">
                        <div className="col s1">
                            <p>{index + 1}</p>
                        </div>
                        <div className="col s8">
                            <ul>
                            <li className= "white-text name " >{name}</li>
                                <li className= "white-text table ">Table Size: {partyOf}</li>
                                <li className= "white-text phone">Phone: {phone}</li>
                                {/* <li className= "white-text comments">Comments: {comments}</li> */}
                            </ul>
                        </div>
                        {/* <div className= "offset-s3 col s4 white-text comments">Comments: {comments}</div> */}

                        </div>
                        {/* <div className=" col s3 ">

                            {/* <i className=" material-icons">send</i> */}
                            {/* <button className="small btn waves-effect  waves" */}
                                {/* // onClick={() => this.props.updateNotified(restaurantName, ID, phone)}>notify</button> */}


                        {/* </div> */}
                        {/* <div className=" col s2"> */}


                            {/* <button className="small btn orange waves-effect  waves" onClick={() => this.props.updatedSeated(ID) }  >seat</button> */}
                           

                        {/* </div> */}
                        {/* <div className="  col s3 right-align  " onClick={() => this.props.deleteListItem(ID) }> */}
                            {/* <i className=" medium material-icons">delete</i> */}
                            {/* <button className="small btn red waves-effect  waves" > <i className=" small material-icons">delete</i></button> */}

                        {/* </div>  */}
                        <div className="">
                            <div className="col s12 white-text">
                            <div className= "white-text comments">Comments: {comments}</div>
                                Added {waitTimeSinceAdded} minutes ago
                            </div>

                        </div>
                    </div>
                </div>
            )
        })
        return customerList;

    }

    render() {

        return (
            <Fragment>
                {/* <div>
                {this.renderNotifiedListOnDom()}
            </div> */}
                <div className="container">
                    {this.renderCustomerListOnDom()}
                </div>

            </Fragment>
        )
    }
}


function mapStateToProps(state) {
    console.log('Redux State:', state);

    return {
        waiting_list: state.waitingList.waitingList,
        // notified_list: state.waitingList.notifiedList
        restaurant_ID: state.partner.restaurant_ID
    }
}

export default connect(mapStateToProps, {
    deleteListItem: deleteListItem,
    waitingListData: getWaitingListData,
    // notifiedListData: getNotifiedListData,
    updateNotified: changeNotifyStatus,
    updatedSeated: changeSeatedStatus
    


})(CustomerInfo);