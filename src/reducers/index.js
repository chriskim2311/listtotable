import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import waitingReducer from './waiting_list_reducer';
import partnerReducer from './partner_reduser';



const rootReducer = combineReducers({
    form: formReducer,
    waitingList: waitingReducer,
    partner: partnerReducer
});

export default rootReducer;