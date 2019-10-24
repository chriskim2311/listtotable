import types from "../actions/types";

const DEFAULT_STATE = {
  auth: false,
  logInError: "",
  signUpError: "",
  restaurant_ID: ""
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.AUTH_CONFIRM:
    case types.LOG_IN:
    case types.SIGN_UP:
      return { auth: true, restaurant_ID: action.restaurant_ID };
    case types.LOG_OUT:
      return { auth: false, restaurant_ID: "" };
    case types.LOG_IN_ERROR:
      return { auth: false, logInError: action.error, signUpError: "" };
    case types.SIGN_UP_ERROR:
      return { ...DEFAULT_STATE, signUpError: action.error };
    case types.AUTH_FAILURE:
      return { ...DEFAULT_STATE };
    default:
      return state;
  }
};
