


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
      // need to change backend API to give normalized data -- this approach is
      // less time efficient but change would require more code refactor in
      // other frontend components
      state.comments.forEach(eachComment => {
        normalized[eachComment.id] = eachComment;
      });

      delete normalized[id];
      // .reverse called here because order of comments was changing
      return { comments: [ ...Object.values(normalized).reverse() ] };


    default:
      return state;
  }
};



export {
  commentReducer,

}
