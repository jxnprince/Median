



import { getSpecificStory, createStory, getAllStories, deleteStory, updateStory } from "../actions/story.js";



// import csrfFetch here
import { csrfFetch } from '../store/csrf.js';





const thunk_getSpecificStory = (storyId) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories/specific/${storyId}`);

  if (response.ok) {
    const story = await response.json();
    dispatch(getSpecificStory(story));
    return;
  }
  // dispatch to error handler here

};





const thunk_createStory = (userId, { imgUrl, postBody, title }) => async (dispatch) => {
  const response = await csrfFetch(`api/stories/${userId}`, {
    method: 'POST',
    body: JSON.stringify({ imgUrl, postBody, title })
  });

  if(response.ok) {
    const story = await response.json();
    dispatch(createStory(story));
    return;
  }
  // dispatch to error handler here

}


// localhost:5000/api/stories/:userId
const thunk_getAllStories = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories/${userId}`);
  if (response.ok) {
    const stories = await response.json();
    dispatch(getAllStories(stories));
    return;
  }
  // dispatch to error handler here

};




//DELETE localhost:5000/api/stories/:storyId
const thunk_deleteStory = (storyId) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories/${storyId}`, {
    method: 'DELETE',
    credentials: "include"
  });

  if (response.ok) {
    dispatch(deleteStory(storyId));
    return;
  }

  // dispatch to error handler here
}




//PUT localhost:5000/api/stories/:storyId
const thunk_updateStory = (storyId, { imgUrl, postBody, title }) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories/${storyId}`, {
    method: 'PUT',
    body: JSON.stringify({ imgUrl, postBody, title })
  });

  if(response.ok) {
    const newStory = await response.json();
    dispatch(updateStory(newStory));
    return;
  }

  // dispatch to error handler here
};







export {
  thunk_getSpecificStory,
  thunk_createStory,
  thunk_getAllStories,
  thunk_deleteStory,
  thunk_updateStory,


}
