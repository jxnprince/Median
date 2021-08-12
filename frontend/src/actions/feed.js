

import { GET_FEED, FEATURED_ITEM } from "../types/feed.js";





const getFeed = (featuredStories) => ({
  type: GET_FEED,
  featuredStories
});



const featuredItem = (featured) => ({
  type: FEATURED_ITEM,
  featured
});



export {
  getFeed,
  featuredItem,

}
