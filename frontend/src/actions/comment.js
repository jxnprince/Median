


import { GET_COMMENTS, NEW_COMMENT } from "../types/comment.js";



const getComments = (comments) => ({
  type: GET_COMMENTS,
  comments
});



const newComment = (comment) => ({
  type: NEW_COMMENT,
  comment
});




export {
  getComments,
  newComment,


}
