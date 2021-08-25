

import { getFeed, featuredItem } from "../actions/feed.js";


// import csrfFetch here
import { csrfFetch } from '../store/csrf.js';




const thunk_getFeed = () => async (dispatch) => {
  const response = await csrfFetch(`/api/feed`);

  if (response.ok) {
    const feed = await response.json();
    dispatch(getFeed(feed));
    dispatch(featuredItem(feed.featured));
    return;
  }
  // dispatch to error handler here

}



export {
  thunk_getFeed,

}
