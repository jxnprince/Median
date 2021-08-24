


import { GET_FOLLOWERS, GET_BOOKMARKS } from "../types/profile.js";





const followersReducer = (state={ stories: null }, action) => {
  switch (action.type) {
    case GET_FOLLOWERS:
      return { ...action.stories };
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







export {
  followersReducer,
  bookmarksReducer,


}
