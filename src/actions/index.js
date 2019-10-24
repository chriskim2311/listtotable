import types from './types';
import axios from 'axios';
import { messageComfirmUrl, messageNotifyUrl } from '../config';


export const checkAuth = () => async dispatch => {
    try {
        const resp = await axios.get('/api/auth.php');
        if(resp.data.auth){
            dispatch({
                type: types.AUTH_CONFIRM,
                restaurant_ID: resp.data.restaurant_ID
            });
        } else {
            dispatch({
                type: types.AUTH_FAILURE
            });
        }

    } catch(err){
        console.log('Check Auth Error:', err);
    }
}



export function userSignUp(partner){
    return async function (dispatch) {
        try {
            const resp = await axios({
                method: 'post',
                url: '/api/tablefinder.php?action=restaurant_users&method=insert',
                data: partner,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
           const signUp = resp.data.success;
            if (signUp) {
                localStorage.setItem('restId', partner.restaurant_ID);
                localStorage.setItem('restName', partner.restaurant_name);
                localStorage.setItem('token', resp.data.token);
                dispatch({
                    type: types.SIGN_UP,
                    restaurant_ID: partner.restaurant_ID
                })
                return partner.restaurant_ID;
            } else {
                dispatch({
                    type: types.SIGN_UP_ERROR,
                    error: 'Email already in use'
                });
            };
        } catch(err){
            console.log("Server Error");
        }
    }
}

export function userLogIn(partner){
    return async function(dispatch){
        try{
            const resp =await axios.post('/api/tablefinder.php?action=restaurant_users&method=login', partner);
            const login = resp.data.success;
            if (login) {
                localStorage.setItem('restId', resp.data.restaurant_ID.restaurant_ID );
                localStorage.setItem('restName', resp.data.restaurant_ID.restaurant_name);
                dispatch({
                    type: types.LOG_IN,
                    restaurant_ID: resp.data.restaurant_ID.restaurant_ID,
                    restaurant_name: resp.data.restaurant_ID.restaurant_name
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
    localStorage.removeItem('restId');
    localStorage.removeItem('restName');

    return {
        type: types.LOG_OUT
    }
}

export function getWaitingListData(param){
    return async function(dispatch){
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=getWaiting', param);
        dispatch({
            type: types.GET_WAITING_LIST_DATA,
            clients: resp.data.clients
        });
    }
}

export function getSeatedListData(param){
    return async function(dispatch){
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=getSeated', param)
        dispatch({
            type: types.GET_SEATED_LIST_DATA,
            clients: resp.data.clients
        });
        
        
    }
    
}
export function getNotifiedListData(param){
    return async function(dispatch){
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=getNotified', param);
        dispatch({
            type: types.GET_NOTIFIED_LIST_DATA,
            clients: resp.data.clients
        });
    }
}


export function changeNotifyStatus(restaurantName, ID, phone){
    return async function(dispatch){
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=updateWaiting', 
        {
            ID: ID
        });
        try{ await axios.post(`${messageNotifyUrl}`,{
            restaurant: restaurantName,
            phone_number: phone 
        })
        dispatch({
            type: types.UPDATE_NOTIFIED_LIST_DATA,
        });
    } 
    catch(err){
            
    }

    }

}

export function changeSeatedStatus( ID){
    return async function(dispatch){
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=updateNotified', 
        {
            ID: ID
        });
        dispatch({
            type: types.UPDATE_SEATED_LIST_DATA,
        });
    }

}

export function deleteListItem(ID) {
    return async function(dispatch) {
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=delete', 
        {
            ID: ID 
        });
        


        dispatch({
            type: types.DELETE_CUSTOMER
            
        })
    }
}

export function customerCheckInIncrement () {
    return {
        type: types.INCREMENT
    }
} 

export function customerCheckInDecrement () {
    return {
        type: types.DECREMENT
    }
}

export function managePopUp() {
    return { 
        type: types.CHECK_IN
    }
}

export function customerCheckIn(sendData) {
    return async function (dispatch) {
        try {
            const resp = await axios({
                url: '/api/tablefinder.php',
                method: 'POST',
                data: sendData,
                params: {
                    action: 'clients',
                    method: 'insert'
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            dispatch ({
                payload: resp
            })
        } catch(err) {
            console.log('Axios server error');
        }
    }
}

export function sendCustomerText(sendData){
    const {phone_number, restaurant_name} = sendData
    return async function (dispatch) {
        try {
            const resp = await axios({
                url: `${messageComfirmUrl}`,
                method: 'post',
                data: {
                  restaurant: restaurant_name,
                  phone_number: phone_number
                }
            });
            dispatch ({
                type: types.CHECK_IN,
                payload: resp 
            })
        } catch(err) {
            console.log('customer text error', err)
        }
    }
}

export function checkCurrentPosition() {
    return {
        type: types.CHECK_CURRENT_POSITION
    }
}

export function setCurrentPosition(position) {
    return {
        type: types.SET_CURRENT_POSITION,
        payload: position
    }
}

export function getCurrentPosition() {
    return {
        type: types.GET_CURRENT_POSITION,
        // payload: // TODO DO I NEED THIS?
    }
}
