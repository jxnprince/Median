


import { GET_COMMENTS, NEW_COMMENT, DELETE_COMMENT } from "../types/comment.js";




const commentReducer = (state = { comments: null }, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...action.comments };

    case NEW_COMMENT:
      return { comments: [ ...state.comments, action.comment ] };

    case DELETE_COMMENT:
      const id = action.commentId;
      // normalize to find correct comment object to delete
      const normalized = {};

      state.comments.forEach(eachComment => {
        normalized[eachComment.id] = eachComment;
      });

      delete normalized[id];

      return { comments: [ ...Object.values(normalized) ] };


    default:
      return state;
  }
};



export {
  commentReducer,

}
