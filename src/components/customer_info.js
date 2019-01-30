import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getWaitingListData, changeSeatedStatus, changeNotifyStatus, deleteListItem, userLogIn } from '../actions';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import "../assets/css/customer_info.css"



class CustomerInfo extends Component {
    state= {
        preventButtonClick: false

    }
    
    componentDidMount() {
        const restId= localStorage.getItem('restId')
        const waitingObj = {
            restaurant_id: restId,
            status: 1
        }
        this.props.waitingListData(waitingObj)

        // this.interval =  setInterval(() => {
        //     this.props.waitingListData(waitingObj)
        // }, 10000
        // )
    }
    componentWillUnmount() {
      clearInterval(this.interval)
    }
           
    

    // componentWillUpdate(){
    //     this.props.waitingListData();
    // }

   async handleSubmit(restaurantName, ID, phone) {
       this.setState({
           preventButtonClick: true
       })
        await this.props.updateNotified(restaurantName, ID, phone)
        // const restId= localStorage.getItem('restId')
        // const waitingObj = {
        //     restaurant_id: restId,
        //     status: 1
        // }
        // this.renderCustomerListOnDom();
        this.setState({
            preventButtonClick: false
        })
        window.location.reload();
    }
    handleSeated(){
        this.props.updatedSeated(ID)
        window.location.reload();
    }
    handleDelete(){
        this.props.deleteListItem(ID)
        window.location.reload();
    }



    convertTime(inputString) {
        //GET NEW DATE AND TIME IN MILLISECONDS
        var newDate = new Date();
        var newTime = newDate.getTime();

        //CONVERT OLD TIME TO MILLISECONDS
        var timeStamp = inputString + " UTC";
        
        var oldTime = new Date(timeStamp).getTime();

        //DIFFERENCE
        var difference = newTime - oldTime;


        //CONVERT MILLISECONDS TO SECONDS TO MINUTES
        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);

        //RESULT
        return minutes;
    }

 
    renderCustomerListOnDom() {


        const partys = this.props.waiting_list;
        


        if (!partys) {
            return (
                <div className="center">
                    <h4>For now 'NEW CUSTOMERS' list is empty!</h4>
                </div>
            )
        }
        const {preventButtonClick}= this.state

        const customerList = partys.map((current, index) => {
            const name = current.client_name;
            const partyOf = current.table_size
            const phone = current.phone_number
            const restaurantName = current.restaurant_name;
            const ID = current.ID;
            const timeWhenAdded = current.wait_start;
            const waitTimeSinceAdded = this.convertTime(timeWhenAdded);
            const comments = current.comments
            

            


            return (
                <div key={index} >
                    <div className="row #b0bec5 blue-grey lighten-3">
                        <div className="col s12">
                            <button disabled={preventButtonClick} className="small btn waves-effect  waves offset-s1 col s3 center #a5d6a7 green lighten-3"
                                onClick={() => this.handleSubmit(restaurantName, ID, phone)}
            
                                >notify</button>
                            <button className="small btn orange waves-effect  waves offset-s1 col s3 center" onClick={() => this.handleSeated(ID) }  >seat</button>
                            <button className="small btn red waves-effect  waves offset-s1 col s3 center" onClick={() => this.handleDelete(ID) } > <i className=" small material-icons">delete</i></button>                   
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
                            </ul>
                        </div>
                        
                        </div>
                                              
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
    

    return {
        waiting_list: state.waitingList.waitingList,
        
        restaurant_ID: state.partner.restaurant_ID
    }
}

export default connect(mapStateToProps, {
    deleteListItem: deleteListItem,
    waitingListData: getWaitingListData,
   
    updateNotified: changeNotifyStatus,
    updatedSeated: changeSeatedStatus
    


})(CustomerInfo);