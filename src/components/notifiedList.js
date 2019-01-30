import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getNotifiedListData, deleteListItem, changeSeatedStatus } from '../actions';
import "../assets/css/customer_info.css"


class NotifiedCustomerInfo extends Component {
    componentDidMount() {
        const restId = localStorage.getItem('restId')
        const notifiedObj = {
            restaurant_id: restId,
            status: 2
        }
        this.props.notifiedListData(notifiedObj)

        // this.interval = setInterval(() => {
        //     this.props.notifiedListData(notifiedObj)
        // }, 10000
        // )

    }
    // componentWillUnmount() {
    //     clearInterval(this.interval)
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

    handleSeated(ID){
        this.props.updatedSeated(ID)
        window.location.reload();
    }
    handleDelete(ID){
        this.props.deleteListItem(ID)
        window.location.reload();
    }



    renderNotifiedListOnDom() {
        
        const notified = this.props.notified_list;
        

        if (!notified) {
            return (
                <div className="center">
                    <h4>For now 'NOTIFIED' list is empty!</h4>
                </div>
            )
        }

        const notifiedList = notified.map((current, index) => {
            const name = current.client_name;

            const partyOf = current.table_size
            const phone = current.phone_number;
            const ID = current.ID;
            const timeWhenNotified = current.wait_notify;
            const waitTimeSinceNotified = this.convertTime(timeWhenNotified);
            const comments = current.comments
            


            return (

                <div key={index} className="container">
 
                    <div className="row #78909c blue-grey lighten-1">
                    <div className="col s12">
                <button className="btn-small waves-effect  waves offset-s5 col s3 #ffcc80 orange lighten-3" onClick={() => this.handleSeated(ID)}> SEAT</button>
                <button className="btn-small waves-effect  waves offset-s1 col s3 #e57373 red lighten-2" onClick={() => this.handleDelete(ID)}><i className=" small material-icons">delete</i></button>
                
                
                
                </div>
                        <div className="col s1">
                            <p>{index + 1}</p>
                        </div>
                        <div className="col s8">
                            <ul>
                                <li className="white-text name " >{name}</li>
                                <li className="white-text table ">Table Size: {partyOf}</li>
                                <li className="white-text phone">Phone: {phone}</li>
                                <li className="white-text comments">Comments: {comments}</li>
                            </ul>
                        </div>
                       

                        <div className="col s12 white-text">
                            <div className="white-text comments">Comments: {comments}</div>
                            Added {waitTimeSinceNotified} minutes ago
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
    

    return {
        
        notified_list: state.waitingList.notifiedList,
        restId: state.partner.restaurant_ID
    }
}

export default connect(mapStateToProps, {
    deleteListItem: deleteListItem,
    notifiedListData: getNotifiedListData,
    updatedSeated: changeSeatedStatus,


})(NotifiedCustomerInfo);