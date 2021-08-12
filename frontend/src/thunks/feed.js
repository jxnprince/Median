

import { getFeed } from "../actions/feed.js";


// import csrfFetch here
import { csrfFetch } from '../store/csrf.js';




const thunk_getFeed = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/feed/${userId}`);

  if (response.ok) {
    const feed = await response.json();
    dispatch(getFeed(feed));
    return;
  }
  // dispatch to error handler here

}



export {
  thunk_getFeed,

}
