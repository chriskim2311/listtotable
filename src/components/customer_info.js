import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import { getWaitingListData } from '../actions';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';


class CustomerInfo extends Component {
    componentDidMount(){
        // console.log('data after componentdid mount', this.props)
        this.props.waitingListData();
    }


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

    
    renderCustomerListOnDom(){
       

        const partys = this.props.waiting_list;
        // console.log('partys from server on customerinfo page',partys)
        if(!partys){
            return
        }

        const customerList = partys.map((current, index) => {
            const name = current.client_name;
            const partyOf = current.table_size
            const phone = current.phone_number
        
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
        
        return(
            <Fragment>
                {this.renderCustomerListOnDom()}
            </Fragment>
        )
    }
}


function mapStateToProps(state){
    // console.log('Redux State:', state);

    return {
        waiting_list: state.waitingList.waitingList
    }
}

export default connect(mapStateToProps,{
    
    waitingListData: getWaitingListData
})(CustomerInfo);