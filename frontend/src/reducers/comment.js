


import { GET_COMMENTS, NEW_COMMENT } from "../types/comment.js";




const commentReducer = (state = { comments: null }, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...action.comments };

    case NEW_COMMENT:
      return { comments: [ ...state.comments, action.comment ] };

    default:
      return state;
  }
};



export {
  commentReducer,

}
