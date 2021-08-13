



import { getSpecificStory } from "../actions/story.js";



// import csrfFetch here
import { csrfFetch } from '../store/csrf.js';





const thunk_getSpecificStory = (storyId) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories/${storyId}`);

  if (response.ok) {
    const story = await response.json();
    dispatch(getSpecificStory(story));
    return;
  }
  // dispatch to error handler here

};





export {
  thunk_getSpecificStory,

}
