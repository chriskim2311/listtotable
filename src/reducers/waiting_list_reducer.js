import types from '../actions/types';

const DEFAULT_STATE = {
    waitingList: [
    {
        name: 'Sasha',
        partyOf: 3,
        phoneNumber: '773 773 7777',
        notifyed: false,
        seated: false,
    },
    {   name: 'Chris',
        partyOf: 2,
        phoneNumber: '773 773 8888',
        notifyed: false,
        seated: false,
    },
    {   name: 'Mike',
        partyOf: 4,
        phoneNumber: '773 773 9999',
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