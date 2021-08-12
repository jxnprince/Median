

import { GET_FEED } from "../types/feed.js";





const getFeed = (featuredStories) => ({
  type: GET_FEED,
  featuredStories
});




export {
  getFeed,

}
