import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import waitingReducer from './waiting_list_reducer';



const rootReducer = combineReducers({
    form: formReducer,
    waitingList: waitingReducer
});

export default rootReducer;