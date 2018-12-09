import types from '../actions/types';

const DEFAULT_STATE = {
    table_size: 1,
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.INCREMENT: 
            return { table_size: state.table_size + 1 }
        case types.DECREMENT: 
            if (state.table_size < 2 ) {
                return
            }
            return { table_size: state.table_size - 1 }
        default: 
            return state  
    }
}