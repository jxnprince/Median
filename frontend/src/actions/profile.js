

import { GET_FOLLOWERS, GET_BOOKMARKS, GET_OTHERUSER } from "../types/profile.js";




const getFollowers = (stories) => ({
  type: GET_FOLLOWERS,
  stories
});



const getBookmarks = (bookmarks) => ({
  type: GET_BOOKMARKS,
  bookmarks
});


const getOtherUser = (user) => ({
  type: GET_OTHERUSER,
  user
});



export {
  getFollowers,
  getBookmarks,
  getOtherUser,

};
