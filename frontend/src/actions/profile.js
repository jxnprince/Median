

import { GET_FOLLOWERS, GET_BOOKMARKS } from "../types/profile.js";




const getFollowers = (stories) => ({
  type: GET_FOLLOWERS,
  stories
});



const getBookmarks = (bookmarks) => ({
  type: GET_BOOKMARKS,
  bookmarks
});



export {
  getFollowers,
  getBookmarks,

};
