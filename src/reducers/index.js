import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import check_in_reducer from './check_in_reducer';
import partnerReducer from './partner_reduser';
import positionReducer from './position_reducer';
import waitingReducer from './waiting_list_reducer';


const rootReducer = combineReducers({
    customer: check_in_reducer,
    form: formReducer,
    partner: partnerReducer,
    position: positionReducer,
    waitingList: waitingReducer
});

export default rootReducer;