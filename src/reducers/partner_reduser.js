import types from '../actions/types';

const DEFAULT_STATE = {
    auth: true,
    logInError: '',
    signUpError: '',
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.LOG_IN:  
        case types.SIGN_UP:
            return{ auth: true };;
        case types.LOG_OUT:
            return{ auth: false };
        case types.LOG_IN_ERROR:
            return{ auth: false, logInError: action.error, signUpError: ''};
        case types.SIGN_UP_ERROR:
            return{ ...DEFAULT_STATE, signUpError: action.error};
        default:
        return state;
    }
}