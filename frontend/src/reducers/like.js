



import { CREATE_LIKE } from "../types/like.js";





const likeReducer = (state= { like: null }, action) => {
  switch (action.type) {
    case CREATE_LIKE:
      return { ...state, ...action.like };
    default:
      return state;
  }
};




export {
  likeReducer,

}
