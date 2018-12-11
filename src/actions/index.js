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

            console.log('Sign up response:', resp)
           
            if (resp) {
                dispatch({
                    type: types.SIGN_UP
                })
            } else {
                dispatch({
                    type: types.SIGN_UP_ERROR,
                    error: 'Email alredy in use'
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

export function getWaitingListData(){
    return async function(dispatch){
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=getAll');
        
        // console.log('server resp after api call', resp);
        
        dispatch({
            type: types.GET_WAITING_LIST_DATA,
            clients: resp.data.clients
        });
    }
}

export function getSeatedListData(){
    return async function(dispatch){
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=getSeated');
        
        console.log('Seated call response', resp);
        
        dispatch({
            type: types.GET_SEATED_LIST_DATA,
            clients: resp.data.clients
        });
        
        
    }
    
}
export function getNotifiedListData(){
    return async function(dispatch){
        const resp = await axios.post('/api/tablefinder.php?action=clients&method=getNotified');
        
        console.log('Notified call response:', resp);
        
        dispatch({
            type: types.GET_NOTIFIED_LIST_DATA,
            clients: resp.data.clients
        });
    }
}

// export function deleteListItem() {
//     return async function(dispatch) {
//         const resp = await axios.delete('')

//         dispatch({

//         })
//     }
// }

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
            const resp = await axios.post({
                url: 'http://place.kim-chris.com/message/confirm',
                restaurant: restaurant_name,
                phone_number: phone_number
            });
            dispatch ({
                // type: types.CHECK_IN,
                payload: resp 
            })
        } catch(err) {
            console.log('customer text error')
        }
    }
}