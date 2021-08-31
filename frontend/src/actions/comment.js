


import { GET_COMMENTS, NEW_COMMENT } from "../types/comment.js";



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




export {
  getComments,
  newComment,


}
