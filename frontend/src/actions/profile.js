

import { GET_FOLLOWERS, GET_BOOKMARKS, GET_OTHERUSER, CREATE_FOLLOWER, GET_ALLFOLLOWERS } from "../types/profile.js";




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




const createFollower = (follower) => ({
  type: CREATE_FOLLOWER,
  follower
});



const getAllFollowers = (followers) => ({
  type: GET_ALLFOLLOWERS,
  followers
});



export {
  getFollowers,
  getBookmarks,
  getOtherUser,
  createFollower,
  getAllFollowers,


};
