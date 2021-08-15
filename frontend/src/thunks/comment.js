

import { getComments } from "../actions/comment.js";




// import csrfFetch here
import { csrfFetch } from '../store/csrf.js';


const thunk_getComments = (storyId) => async (dispatch) => {
  const response = await csrfFetch();

  if(response.ok) {
    const comments = await response.json();
    dispatch(getComments(comments));
    return;
  }
  // dispatch to error handler here
  throw response;
};




export {
  thunk_getComments,

}
