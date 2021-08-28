


import { GET_SPECIFIC_STORY, CREATE_STORY, GET_ALLSTORIES, DELETE_STORY } from "../types/story.js";



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
})


export {
  getSpecificStory,
  createStory,
  getAllStories,
  deleteStory,

}
