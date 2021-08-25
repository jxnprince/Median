


import { GET_SPECIFIC_STORY, CREATE_STORY } from "../types/story.js";



const getSpecificStory = (story) => ({
  type: GET_SPECIFIC_STORY,
  story
});



const createStory = (story) => ({
  type: CREATE_STORY,
  story
});



export {
  getSpecificStory,
  createStory,

}
