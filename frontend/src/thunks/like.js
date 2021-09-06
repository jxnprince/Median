

import { createLike } from "../actions/like.js";



// import csrfFetch here
import { csrfFetch } from '../store/csrf.js';





//POST localhost:5000/api/likes/:storyId/:userId
const thunk_createLike = (storyId, userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/likes/${storyId}/${userId}`, {
    method: "POST",

  });

  if(response.ok) {
    const like = await response.json();
    dispatch(createLike(like));
    return
  }
  // dispatch to error handler here

}




export {
  thunk_createLike,

}
