

import { GET_FEED, FEATURED_ITEM } from "../types/feed.js";




const feedReducer = (state = { featuredStories: null, featured: null }, action) => {
  switch(action.type) {
    case GET_FEED:
      return { ...state, ...action.featuredStories };
    case FEATURED_ITEM:
      return { ...state, featured: action.featured };
    default:
      return state;
  }
};




export {
  feedReducer,

}
