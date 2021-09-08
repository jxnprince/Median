





import { CREATE_BOOKMARK } from "../types/bookmark.js";





const bookmarkReducer = (state={ bookmark: null}, action) => {
  switch (action.type){
    case CREATE_BOOKMARK:
      return { ...state, ...action.bookmark };
    default:
      return state;
  }
};





export {
  bookmarkReducer,

}
