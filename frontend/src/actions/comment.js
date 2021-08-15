


import { GET_COMMENTS } from "../types/comment.js";



const getComments = (comments) => ({
  type: GET_COMMENTS,
  comments
});
