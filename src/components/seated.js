import React, { Component, Fragment } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';
import { connect } from 'react-redux';
import { getSeatedListData, deleteListItem } from '../actions';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import "../assets/css/seated.css"

class Seated extends Component {

    componentDidMount() {
        const restId= localStorage.getItem('restId')
        const seatedObj = {
            restaurant_id: restId,
            status: 3
        }
        this.props.getSeatedListData(seatedObj);
    }

    renderSeatedCustomerListOnDom() {
        const partys = this.props.seated_list
        console.log('Seated partys:', partys)

        if (!partys) {
            return
        }

        const seatedCustomerList = partys.map((current, index) => {
            const name = current.client_name;
            const partyOf = current.table_size;
            const phone = current.phone_number;
            const ID = current.ID
            const comments = current.comments

            return (
                <div key={index} className= "container"  >
                    <div className="row #0d47a1 blue darken-2 z-depth-3">
                        <div className="col s1">
                            <p>{index + 1}</p>
                        </div>
                        <div className="col s6 ">
                            <ul>
                                <li className= "white-text name " >Name: {name}</li>
                                <li className= "white-text table ">Table Size: {partyOf}</li>
                                <li className= "white-text phone">Phone: {phone}</li>
                                <li className= "white-text comments">Comments: {comments}</li>
                            </ul>
                        </div>
                        {/* <div className="offset-s2 col s2 delete  " onClick={() => this.props.deleteListItem(ID)}>
                            <i className=" small material-icons red-text ">delete</i>
                        </div> */}



                        <div className="  delete  " onClick={() => this.props.deleteListItem(ID) }>
                    
                            <button className="small btn red waves-effect  waves" > <i className=" small material-icons">delete</i></button>

                        </div>
                    </div>

                </div>
            )
        })
        return seatedCustomerList;

    }


    render() {
        return (
            <Fragment>
                 <RTopMenu />
                 <div className="TopContainer">
               
                <ListMenu />
                </div>
                 <div className="bottomContainer">
                {this.renderSeatedCustomerListOnDom()}
                </div>
            </Fragment>

        )
    }
}



function mapStateToProps(state) {
    console.log('redux state for seated:', state)

    return {
        seated_list: state.waitingList.seatedList
    }

}

export default connect(mapStateToProps, {
    deleteListItem: deleteListItem,
    getSeatedListData: getSeatedListData
})(Seated);