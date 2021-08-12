

import { GET_FEED } from "../types/feed.js";




const feedReducer = (state = { featuredStories: null }, action) => {
  switch(action.type) {
    case GET_FEED:
      return { ...state, ...action.featuredStories };
    default:
      return state;
  }
};




export {
  feedReducer,

}
