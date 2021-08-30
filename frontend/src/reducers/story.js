

import { GET_SPECIFIC_STORY, CREATE_STORY, GET_ALLSTORIES, DELETE_STORY, UPDATE_STORY } from "../types/story.js";




const storyReducer = (state = { story: null, stories: null }, action) => {
  switch (action.type) {
    case GET_SPECIFIC_STORY:
      return { ...state, ...action.story };

    case GET_ALLSTORIES:
      return { ...state, ...action.stories };

    case DELETE_STORY:
      const id = action.storyId;
      delete state.stories[id];
      return { stories: { ...state.stories } };

    case UPDATE_STORY:
      return { stories: { ...state.stories, [action.story.story.id]: action.story.story } }  ;

    default:
      return state;
  }
};




export {
  storyReducer,

}
