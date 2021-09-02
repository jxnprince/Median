


import { GET_FOLLOWERS, GET_BOOKMARKS, GET_OTHERUSER, CREATE_FOLLOWER, GET_ALLFOLLOWERS, DELETE_FOLLOWER } from "../types/profile.js";





const followersReducer = (state = { stories: null, follower: null, followers: null }, action) => {
  switch (action.type) {
    case GET_FOLLOWERS:
      return { ...state, ...action.stories };

    case CREATE_FOLLOWER:
      return {
        ...state,
        ...action.follower,
        followers: {
          ...state.followers,
          [action.follower.follower.userId]: { userId: action.follower.follower.userId }
        }
      };

    case GET_ALLFOLLOWERS:
      return { ...state, ...action.followers };

    case DELETE_FOLLOWER:
      const id = action.followerId
      delete state.followers[id];
      return { ...state, followers: { ...state.followers } }

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
