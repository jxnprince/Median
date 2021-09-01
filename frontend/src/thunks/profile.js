

import { getFollowers, getBookmarks, getOtherUser, createFollower, getAllFollowers } from "../actions/profile.js";


// import csrfFetch here
import { csrfFetch } from '../store/csrf.js';




const thunk_getFollowers = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}`);
  if (response.ok) {
    const stories = await response.json();
    dispatch(getFollowers(stories));
    return;
  }
  // dispatch to error handler here
};




const thunk_getBookmarks = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/bookmarks`);
  if(response.ok) {
    const bookmarks = await response.json();
    dispatch(getBookmarks(bookmarks));
    return;
  }
  // dispatch error handler here

};



//GET localhost:5000/api/users/specific/:userId
const thunk_getOtherUser = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/specific/${userId}`);
  if (response.ok) {
    const user = await response.json();
    dispatch(getOtherUser(user));
    return;
  }
  // dispatch error handler here
  // dispatch error handler here

}


//POST  localhost:5000/api/follows/:userId/:followerId
const thunk_createFollower = ({ userId, followerId }) => async (dispatch) => {

  const response = await csrfFetch(`/api/follows/${userId}/${followerId}`, {
    method: 'POST',

  });

  if (response.ok) {
    const follower = await response.json();
    dispatch(createFollower(follower));
    return;
  }

  // dispatch to error handler here
}



// GET localhost:5000/api/follows/:userId
const thunk_getAllFollowers = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/follows/${userId}`);
  if (response.ok) {
    const followers = await response.json();
    dispatch(getAllFollowers(followers));
    return;
  }
  // dispatch error handler here

}






export {
  thunk_getFollowers,
  thunk_getBookmarks,
  thunk_getOtherUser,
  thunk_createFollower,
  thunk_getAllFollowers,

}
