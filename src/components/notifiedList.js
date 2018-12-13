import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getNotifiedListData, deleteListItem, changeSeatedStatus } from '../actions';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import "../assets/css/customer_info.css"


class NotifiedCustomerInfo extends Component {
    componentDidMount() {

        const notifiedObj = {
            restaurant_id: 'ChIJleVgXPnn3IARUGDd-mGJHYw',
            status: 2
        }
        // console.log('data after componentdid mount', this.props)
        this.props.notifiedListData(notifiedObj);
    }

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

    renderNotifiedListOnDom() {
        // console.log('+++++++++ props:', this.props)
        const notified = this.props.notified_list;

        // console.log('partys from server on customerinfo page',notified)

        if (!notified) {
            return
        }

        const notifiedList = notified.map((current, index) => {
            const name = current.client_name;

            const partyOf = current.table_size
            const phone = current.phone_number;
            const ID = current.ID;
            const timeWhenNotified = current.wait_notify;
            const waitTimeSinceNotified = this.convertTime(timeWhenNotified);
            console.log("TIME SINCE NOTIFIED:", waitTimeSinceNotified);


            return (

                <div key={index}>
                    <div className="row blue">
                        <div className="col s1">
                            <p>{index + 1}</p>
                        </div>
                        <div className="col s4">
                            <ul>
                                <li>{name}</li>
                                <li>{partyOf}</li>
                                <li>{phone}</li>
                            </ul>
                        </div>
                        {/* <div className="col s2 "> */}
                        {/* <p>
                            <button
                                onClick={this.handleNotifyssss}>notify</button>
                        </p> */}

                        {/* </div> */}
                        <div className=" col s2 center" >

                            <button className="btn-small orange  waves-effect  waves" onClick={() => this.props.updatedSeated(ID)}> SEAT</button>
                            {/* <img src={seat} /> */}
                            {/* <button onClick={() => this.props.updatedSeated(ID)} >seat</button> */}

                        </div>

                        <div className="offset-s1 col s2 " >
                        <button className="btn-small red  waves-effect  waves" onClick={() => this.props.deleteListItem(ID)}>DELETE</button>
                            {/* <i className=" medium  material-icons">delete</i> */}


                        </div>

                        <div className="col s12">
                            Notified {waitTimeSinceNotified} minutes ago
                        </div>
                    </div>
                </div>

            )
        })
        return notifiedList;
    }


    render() {

        return (
            <Fragment>
                <div>
                    {this.renderNotifiedListOnDom()}
                </div>

            </Fragment>
        )
    }
}



function mapStateToProps(state) {
    // console.log('Redux State:', state);

    return {
        // waiting_list: state.waitingList.waitingList,
        notified_list: state.waitingList.notifiedList
    }
}

export default connect(mapStateToProps, {
    deleteListItem: deleteListItem,
    notifiedListData: getNotifiedListData,
    updatedSeated: changeSeatedStatus

})(NotifiedCustomerInfo);