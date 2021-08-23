


import { GET_FOLLOWERS } from "../types/profile.js";





const followersReducer = (state={ stories: null }, action) => {
  switch (action.type) {
    case GET_FOLLOWERS:
      return { ...action.stories };
    default:
      return state;

  }
};




export {
  followersReducer,

}
