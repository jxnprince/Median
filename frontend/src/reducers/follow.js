

import { CREATE_FOLLOWER } from "../types/follow.js";



const followerReducer = (state = { follower: null }, action) => {
  switch (action.type) {
    case CREATE_FOLLOWER:
      return { ...state, ...action.follower };
    default:
      return state;
  }
};



export {
  followerReducer,

}
