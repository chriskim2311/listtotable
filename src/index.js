import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/app";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import think from "./middleware/think";
import types from "./actions/types";
import { checkAuth } from "./actions";

const store = createStore(rootReducer, {}, applyMiddleware(think));

if (document.cookie.match(/PHPSESSID/)) {
  store.dispatch({
    type: types.LOG_IN
  });

  checkAuth()(store.dispatch);
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
