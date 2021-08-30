


import { CREATE_FOLLOWER } from "../types/follow.js";




const createFollower = (follower) => ({
  type: CREATE_FOLLOWER,
  follower
});



export {
  createFollower,

}
