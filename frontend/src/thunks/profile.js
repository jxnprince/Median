

import { getFollowers } from "../actions/profile.js";


// import csrfFetch here
import { csrfFetch } from '../store/csrf.js';




const thunk_getFollowers = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}`);
  if (response.ok) {
    const stories = await response.json();
    dispatch(getFollowers(stories));
    return;
  }
  // dispatch to error handler here
};



export {
  thunk_getFollowers,

}
