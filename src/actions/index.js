import types from './types';
import axios from 'axios';

export function userPutNameOnWaitingList(){
    return {
        type: types.PUT_NAME_ON_WAITING_LIST
    }
}

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
                url: 'http://table.michaeljchu.com/api/tablefinder.php?action=restaurant_users&method=insert',
                data: partner,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            console.log('Sign up response:', resp)
            debugger;
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
            const resp =await axios.post('http://table.michaeljchu.com/api/tablefinder.php?action=restaurant_users&method=login', partner);
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
    const resp = axios.post('http://table.michaeljchu.com/api/tablefinder.php?action=clients&method=getAll');
    console.log('server resp after api call', resp);
    return{
        type: types.GET_WAITING_LIST_DATA,
        payload: resp
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