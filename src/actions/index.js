import types from './types';
import axios from 'axios';

export function userPutNameOnWaitingList(){
    return {
        type: types.PUT_NAME_ON_WAITING_LIST
    }
}

export function signUp(){

}

export function userLogIn(partner){
    console.log("user log in called:");
    return async function(dispatch){
        try{
            // const resp =await axios.get('./server_login_resp', partner);
            // console.log('Sign in Response', resp);
            const resp = true;

            // localStorage.setItem('token', resp.data.token);
            
            if (resp) {
                dispatch({
                    type: types.LOG_IN
                })
            } else {
                dispatch({
                    type: types.LOG_IN_ERROR,
                    error: 'Invalid email and/or password'
               })
            }
        } catch(err){
            console.log("Server error");
        }   
    }
}

export function userLogOut(){
    localStorage.removeItem('token');

    return {
        type: types.LOG_OUT
    }
}