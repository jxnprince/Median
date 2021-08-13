


import { GET_SPECIFIC_STORY } from "../types/story.js";



const getSpecificStory = (story) => ({
  type: GET_SPECIFIC_STORY,
  story
});



export {
  getSpecificStory,

}
