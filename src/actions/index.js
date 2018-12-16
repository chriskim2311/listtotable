import types from './types';
import axios from 'axios';



export function userSignUp(partner){
    return async function (dispatch) {
        try {
            // const resp = await axios.post('http://table.michaeljchu.com/api/tablefinder.php?action=restaurants_users&method=insert', {
            //         data: partner,
            //         headers: {
            //             'Content-Type': 'application/x-www-form-urlencoded'
            //         }
            //     });

            const resp = await axios({
                method: 'post',
                url: '/api/tablefinder.php?action=restaurant_users&method=insert',
                data: partner,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            console.log('Sign up response:', resp);
           
            if (resp) {
                localStorage.setItem('restId', partner.restaurant_ID);
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
    console.log("user log in called:");
    return async function(dispatch){
        try{
            const resp =await axios.post('/api/tablefinder.php?action=restaurant_users&method=login', partner);
            console.log('Sign in Response', resp);
            

            localStorage.setItem('token', resp.data.token);
            
           

            const login = resp.data.success;
           

            if (login) {
                localStorage.setItem('restId',resp.data.restaurant_ID.restaurant_ID )
                dispatch({
                    type: types.LOG_IN,
                    restaurant_ID: resp.data.restaurant_ID.restaurant_ID
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
    localStorage.removeItem('restId');

    return {
        type: types.LOG_OUT
    }
}

export function getWaitingListData(param){
    return async function(dispatch){
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=getWaiting', param);
        
        console.log('server resp after api call', resp);
        
        dispatch({
            type: types.GET_WAITING_LIST_DATA,
            clients: resp.data.clients
        });
    }
}

export function getSeatedListData(param){
    return async function(dispatch){
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=getSeated', param);
        
        console.log('Seated call response', resp);
        
        dispatch({
            type: types.GET_SEATED_LIST_DATA,
            clients: resp.data.clients
        });
        
        
    }
    
}
export function getNotifiedListData(param){
    return async function(dispatch){
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=getNotified', param);
        
        console.log('Notified call response:', resp);
        
        dispatch({
            type: types.GET_NOTIFIED_LIST_DATA,
            clients: resp.data.clients
        });
    }
}


export function changeNotifyStatus(restaurantName, ID, phone){
    return async function(dispatch){
        console.log("PHONEEEE", phone)
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=updateWaiting', 
        {
            ID: ID
            // status: 'notified'
        });
        await axios.post('https://place.kim-chris.com/message/notify',{
            restaurant: restaurantName,
            phone_number: phone 
        })
        
        console.log(' UPDATE Notified call response:', resp);
        
        dispatch({
            type: types.UPDATE_NOTIFIED_LIST_DATA,
            // clients: resp.data.clients
        });
    }

}

export function changeSeatedStatus( ID){
    return async function(dispatch){
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=updateNotified', 
        {
            ID: ID
        });
        console.log(' UPDATE SEATED call response:', resp);
        dispatch({
            type: types.UPDATE_SEATED_LIST_DATA,
            // clients: resp.data.clients
        });
    }

}

// export function deleteListItem() {
//     return async function(dispatch) {
//         const resp = await axios.delete('')

//         dispatch({

export function deleteListItem(ID) {
    console.log("DELETE PHONE #: ", ID);
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

// axios.post(
//     ).then(resp =>{
//         console.log("NEW DATAAAA", resp)

//         const data = resp.data.clients
//         console.log("DATAAAA:", data)
//         var customerList = data.map((current, index) => {

//             const name = current.client_name;
//             const partyOf = current.table_size;
//             const phone = current.phone_number;
//         console.log(name, partyOf, phone)
       
//         console.log(customerList)
//         })
//     })

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
                // type: types.CHECK_IN,
                
                payload: resp
            })
        } catch(err) {
            console.log('Axios server error');
        }
    }
}

export function sendCustomerText(sendData){
    console.log('send text', sendData)
    const {phone_number, restaurant_name} = sendData
    console.log(phone_number, restaurant_name)
    return async function (dispatch) {
        try {
            const resp = await axios({
                url: 'https://place.kim-chris.com/message/confirm',
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
