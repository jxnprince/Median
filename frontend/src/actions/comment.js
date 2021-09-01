


import { GET_COMMENTS, NEW_COMMENT, DELETE_COMMENT } from "../types/comment.js";



const getComments = (comments) => ({
  type: GET_COMMENTS,
  comments
});



const newComment = (comment) => {
  return {
    type: NEW_COMMENT,
    comment: { ...comment.comment, User: comment.User }
  }
};



const deleteComment = (commentId) => ({
  type: DELETE_COMMENT,
  commentId
});




export {
  getComments,
  newComment,
  deleteComment,


}
