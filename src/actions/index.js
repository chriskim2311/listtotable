import types from './types';
import axios from 'axios';

export function userPutNameOnWaitingList(){
    return {
        type: types.PUT_NAME_ON_WAITING_LIST
    }
}