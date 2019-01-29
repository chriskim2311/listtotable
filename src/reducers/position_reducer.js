import types from '../actions/types';

const DEFAULT_STATE = {
    position: '',
    set: false
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.CHECK_CURRENT_POSITION:
        case types.GET_CURRENT_POSITION:
            return { ...state };
        case types.SET_CURRENT_POSITION:
            return { position: action.payload, set: true };
        default:
            return state;
    }
}
