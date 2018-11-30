import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
// import { reducer as formReducer } from 'redux-form';
// import waitingReducer from './reducers/waiting_list_reducer';



// const rootReducer = combineReducers({
//     form: formReducer,
//     waitingList: waitingReducer
// });


const store = createStore(rootReducer, {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
