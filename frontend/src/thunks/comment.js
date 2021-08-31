

import { getComments, newComment } from "../actions/comment.js";




// import csrfFetch here
import { csrfFetch } from '../store/csrf.js';

//GET localhost:5000/api/comments/:storyId
const thunk_getComments = (storyId) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${storyId}`);

  if(response.ok) {
    const comments = await response.json();
    dispatch(getComments(comments));
    return;
  }
  // dispatch to error handler here

};



const thunk_newComment = (storyId) => async (dispatch) => {
  const response = await csrfFetch(``);

  if(response.ok) {
    const comment = await response.json();
    dispatch(newComment(comment));
    return;
  }
  // dispatch to error handler here

};




export {
  thunk_getComments,
  thunk_newComment,

}
