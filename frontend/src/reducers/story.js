

import { GET_SPECIFIC_STORY, CREATE_STORY, GET_ALLSTORIES } from "../types/story.js";




const storyReducer = (state = { story: null, stories: null }, action) => {
  switch (action.type) {
    case GET_SPECIFIC_STORY:
      return { ...state, ...action.story };
    case GET_ALLSTORIES:
      return { ...state, ...action.stories };
    default:
      return state;
  }
};




export {
  storyReducer,

}
