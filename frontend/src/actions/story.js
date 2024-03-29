


import { GET_SPECIFIC_STORY, CREATE_STORY, GET_ALLSTORIES, DELETE_STORY, UPDATE_STORY } from "../types/story.js";



const getSpecificStory = (story) => ({
  type: GET_SPECIFIC_STORY,
  story
});



const createStory = (story) => ({
  type: CREATE_STORY,
  story
});



const getAllStories = (stories) => ({
  type: GET_ALLSTORIES,
  stories
});



const deleteStory = (storyId) => ({
  type: DELETE_STORY,
  storyId
});



const updateStory = (newStory) => ({
  type: UPDATE_STORY,
  newStory
});




export {
  getSpecificStory,
  createStory,
  getAllStories,
  deleteStory,
  updateStory,

}
