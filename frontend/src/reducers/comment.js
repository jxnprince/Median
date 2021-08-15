


import { GET_COMMENTS } from "../types/comment.js";




const commentReducer = (state = { comments: null }, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...action.comments };
    default:
      return state;
  }
};



export {
  commentReducer,

}
