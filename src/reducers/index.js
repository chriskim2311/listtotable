import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import waitingReducer from './waiting_list_reducer';
import partnerReducer from './partner_reduser';
import check_in_reducer from './check_in_reducer';



const rootReducer = combineReducers({
    form: formReducer,
    waitingList: waitingReducer,
    partner: partnerReducer,
    customer: check_in_reducer
});

export default rootReducer;