

import { GET_FOLLOWERS } from "../types/profile.js";




const getFollowers = (stories) => ({
  type: GET_FOLLOWERS,
  stories
});




export {
  getFollowers
};
