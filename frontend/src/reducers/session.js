// holds all of the reducers for the session


// import types here
import { LOGIN_USER, CHECK_USER, LOGOUT_USER, LOGIN_DEMO, SIGNUP_USER } from '../types/session.js';






// reducers here
const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case CHECK_USER:
      return { ...state, ...action.user };

    case LOGIN_USER:
      return { ...state, ...action.user };

    case LOGOUT_USER:
      return { ...state, ...action.user };

    case LOGIN_DEMO:
      return { ...state, ...action.user };

    case SIGNUP_USER:
      return { ...state, ...action.user };

    default:
      return state;
  }
};




// exports here
export {
  userReducer,
};
