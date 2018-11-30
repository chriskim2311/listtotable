import React, { Component } from 'react';
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
            <div>
                {this.renderCustomerListOnDom()}
                {/* <div className="row blue">
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
                </div> */}
                {/* <div className="row blue">
                    <div className="col s1">
                        <p>2</p>
                    </div>
                    <div className="col s4">
                        <ul>
                            <li>Name</li>
                            <li>party of 5</li>
                            <li>773-777-7777</li>
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
                <div className="row blue">
                    <div className="col s1">
                        <p>3</p>
                    </div>
                    <div className="col s4">
                        <ul>
                            <li>Name</li>
                            <li>party of 5</li>
                            <li>773-777-7777</li>
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
                <div className="row blue">
                    <div className="col s1">
                        <p>4</p>
                    </div>
                    <div className="col s4">
                        <ul>
                            <li>Name</li>
                            <li>party of 5</li>
                            <li>773-777-7777</li>
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
                <div className="row blue">
                    <div className="col s1">
                        <p>5</p>
                    </div>
                    <div className="col s4">
                        <ul>
                            <li>Name</li>
                            <li>party of 5</li>
                            <li>773-777-7777</li>
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
                </div> */}
            </div>
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