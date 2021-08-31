


import { GET_FOLLOWERS, GET_BOOKMARKS, GET_OTHERUSER, CREATE_FOLLOWER } from "../types/profile.js";





const followersReducer = (state = { stories: null, follower: null }, action) => {
  switch (action.type) {
    case GET_FOLLOWERS:
      return { ...action.stories };

    case CREATE_FOLLOWER:
      return { ...state, ...action.follower };

    default:
      return state;
  }
};




const bookmarksReducer = (state={ bookmarks: null }, action) => {
  switch (action.type) {
    case GET_BOOKMARKS:
      return { ...action.bookmarks };
    default:
      return state;
  }
}


const otherUsersProfileReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case GET_OTHERUSER:
      return { ...action.user };
    default:
      return state;
  }
}





export {
  followersReducer,
  bookmarksReducer,
  otherUsersProfileReducer,


}
