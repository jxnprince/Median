

import { GET_SPECIFIC_STORY, CREATE_STORY, GET_ALLSTORIES, DELETE_STORY } from "../types/story.js";




const storyReducer = (state = { story: null, stories: null }, action) => {
  switch (action.type) {
    case GET_SPECIFIC_STORY:
      return { ...state, ...action.story };

    case GET_ALLSTORIES:
      return { ...state, ...action.stories };

    case DELETE_STORY:
      const id = action.storyId;
      delete state[id];
      return { ...state };

    default:
      return state;
  }
};




export {
  storyReducer,

}
