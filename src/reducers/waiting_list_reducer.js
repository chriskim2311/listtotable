import types from '../actions/types';

const DEFAULT_STATE = {
    waitingList: [],
    seatedList: [],
    notifiedList: []
}

export default (state=DEFAULT_STATE, action) =>{
    switch(action.type){
        case types.GET_WAITING_LIST_DATA:
            return {...state, waitingList: action.clients}
        case types.GET_NOTIFIED_LIST_DATA:
            console.log('Notified Action:', action);
            return {...state, notifiedList: action.clients}
        case types.GET_SEATED_LIST_DATA:
            console.log('Seated Action:', action);
            return {...state, seatedList: action.clients}
        case types.UPDATE_NOTIFIED_LIST_DATA:
            console.log('Updated Notified Action:', action);
            return {...state, updateNotifiedList: action.clients}
        default:
        return state;
    }
}