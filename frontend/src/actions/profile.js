

import { GET_FOLLOWERS, GET_BOOKMARKS, GET_OTHERUSER, CREATE_FOLLOWER, GET_ALLFOLLOWERS, DELETE_FOLLOWER } from "../types/profile.js";




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



const deleteFollower = (followerId) => ({
  type: DELETE_FOLLOWER,
  followerId
});



export {
  getFollowers,
  getBookmarks,
  getOtherUser,
  createFollower,
  getAllFollowers,
  deleteFollower,


};
