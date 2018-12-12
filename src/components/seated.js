import React, { Component, Fragment } from 'react';
import RTopMenu from './r_arrowAndMenu';
import ListMenu from './list_menu';
import { connect } from 'react-redux';
import { getSeatedListData, deleteListItem } from '../actions';
import "../assets/css/customer_info.css"

class Seated extends Component {

    componentDidMount() {
        const seatedObj = {
            restaurant_id: 'ChIJleVgXPnn3IARUGDd-mGJHYw',
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

            return (
                <div key={index}>
                    <div className="row green">
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
                        <div className="offset-s4 col s1 " onClick={() => this.props.deleteListItem(ID)}>
                            <i className=" small material-icons">delete</i>
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
                 <div className="TopContainer">
                <RTopMenu />
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