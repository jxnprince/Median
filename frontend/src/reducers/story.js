

import { GET_SPECIFIC_STORY } from "../types/story.js";




const storyReducer = (state = { story: null }, action) => {
  switch (action.type) {
    case GET_SPECIFIC_STORY:
      return { ...state, ...action.story };
    default:
      return state;
  }
};




export {
  storyReducer,

}
