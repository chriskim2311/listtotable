import types from '../actions/types';

const DEFAULT_STATE = {
    waitingList: [
    {
        name: 'Sasha',
        partyOf: 3,
        phoneNumber: '7737422486',
        notifyed: false,
        seated: false,
    },
    {   name: 'Chris',
        partyOf: 2,
        phoneNumber: '6615474865',
        notifyed: false,
        seated: false,
    },
    {   name: 'Andrew',
        partyOf: 4,
        phoneNumber: '7146552202',
        notifyed: false,
        seated: false,
    }   
]
}

export default (state=DEFAULT_STATE, action) =>{
    switch(action.type){
        case types.PUT_NAME_ON_WAITING_LIST:
            return
        default:
        return state;
    }
}