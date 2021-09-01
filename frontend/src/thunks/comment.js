

import { getComments, newComment, deleteComment } from "../actions/comment.js";




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




// POST localhost:5000/api/comments/:userId/:storyId
const thunk_newComment = ({ userId, storyId, body }) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${userId}/${storyId}`, {
    method: 'POST',
    body: JSON.stringify({ body })
  });

  if(response.ok) {
    const comment = await response.json();
    dispatch(newComment(comment));
    return;
  }
  // dispatch to error handler here

};



//DELETE localhost:5000/api/comments/:commentId
const thunk_deleteComment = (commentId) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${commentId}`, {
    method: 'DELETE',
    credentials: "include"
  });


  if (response.ok) {
    dispatch(deleteComment(commentId));
    return;
  }

  // dispatch to error handler here

}






export {
  thunk_getComments,
  thunk_newComment,
  thunk_deleteComment,

}
