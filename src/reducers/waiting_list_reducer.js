import types from '../actions/types';

const DEFAULT_STATE = {
    waitingList: [
    // {
    //     name: 'Sasha',
    //     partyOf: 3,
    //     phoneNumber: '7737422486',
    //     status: 'waiting',
        
    // },
    // {   name: 'Chris',
    //     partyOf: 2,
    //     phoneNumber: '6615474865',
    //     status: 'notifyed',
        
    // },
    // {   name: 'Andrew',
    //     partyOf: 4,
    //     phoneNumber: '7146552202',
    //     status: 'seated'
    // }   
]
}

export default (state=DEFAULT_STATE, action) =>{
    switch(action.type){
        case types.GET_WAITING_LIST_DATA:
            console.log('Waiting Action:', action);

            return {...state, waitingList: action.clients}
        default:
        return state;
    }
}