

import { createFollower } from "../actions/follow.js";


// import csrfFetch here
import { csrfFetch } from '../store/csrf.js';




//POST  localhost:5000/api/follows/:userId/:followerId
const thunk_createFollower = ({ userId, followerId }) => async (dispatch) => {

  const response = await csrfFetch(`/api/follows/${userId}/${followerId}`, {
    method: 'POST',

  });

  if(response.ok) {
    const follower = await response.json();
    dispatch(createFollower(follower));
    return;
  }

  // dispatch to error handler here
}




export {
  thunk_createFollower,

}
