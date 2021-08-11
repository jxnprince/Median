// holds all the thunk functions for the session

// import action creators here
import { loginUser, checkForUser, logoutUser, signupUser, loginDemoUser } from '../actions/session.js';

// import csrfFetch here
import { csrfFetch } from '../store/csrf.js';






// thunks here
const thunk_checkIfThereIsAUser = () => async (dispatch) => {
  const response = await csrfFetch('/api/users/');

  if (response.ok) {
    const the_user = await response.json();
    dispatch(checkForUser(the_user));
    return;
  }
  throw response;
};












const thunk_login = ({ credential, password }) => async (dispatch) => {

  const response = await csrfFetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ credential, password })
  });

  if (response.ok) {
    const the_user = await response.json();
    dispatch(loginUser(the_user));
    return;
  }
  throw response;
};




const thunk_logoutUser = () => async (dispatch) => {
  const response = await csrfFetch('/api/users/logout', { method: 'DELETE' });

  if (response.ok) {
    const the_user = await response.json();
    dispatch(logoutUser(the_user));
    return;
  }
  throw response;
};




const thunk_signupUser = ({ email, password, username }) => async (dispatch) => {

  const response = await csrfFetch('/api/users/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password, username })
  });

  if (response.ok) {
    const the_user = await response.json();
    dispatch(signupUser(the_user));
    return;
  }
  throw response;
};



const thunk_loginDemoUser = () => async (dispatch) => {
  const credential = 'test@test.net';
  const password = 'password';

  const response = await csrfFetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ credential, password })
  });

  if (response.ok) {
    const the_user = await response.json();
    dispatch(loginDemoUser(the_user));
    return;
  }
  throw response;
};



// exports here
export {
  thunk_checkIfThereIsAUser,
  thunk_login,
  thunk_logoutUser,
  thunk_signupUser,
  thunk_loginDemoUser,


};
