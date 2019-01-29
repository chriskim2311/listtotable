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


       this.interval =  setInterval(() => {
            this.props.getSeatedListData(seatedObj)
        }, 10000
        )
    }
    componentWillUnmount() {
      clearInterval(this.interval)
    }

    renderSeatedCustomerListOnDom() {
        const partys = this.props.seated_list
        

        if (!partys) {
            return (
                <div className="center">
                    <h1>For now 'SEATED' list is empty!</h1>
                </div>
            )
        }

        const seatedCustomerList = partys.map((current, index) => {
            const name = current.client_name;
            const partyOf = current.table_size;
            const phone = current.phone_number;
            const ID = current.ID
            const comments = current.comments

            return (
                <div key={index} className= "container"  >
                    <div className="row #546e7a blue-grey darken-1">
                        <div className="col s1">
                            <p>{index + 1}</p>
                        </div>
                        <div className="col s6 ">
                            <ul>
                                <li className= "white-text name " >{name}</li>
                                <li className= "white-text table ">Table Size: {partyOf}</li>
                                <li className= "white-text phone">Phone: {phone}</li>
                                <li className= "white-text comments">Comments: {comments}</li>
                            </ul>
                        </div>
                        



                        <div className="  delete  " onClick={() => this.props.deleteListItem(ID) }>
                    
                            <button className="small btn waves-effect  waves #e57373 red lighten-2" > <i className=" small material-icons">delete</i></button>

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
    

    return {
        seated_list: state.waitingList.seatedList
    }

}

export default connect(mapStateToProps, {
    deleteListItem: deleteListItem,
    getSeatedListData: getSeatedListData
})(Seated);