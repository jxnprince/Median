// imports here
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers here:
import { userReducer } from '../reducers/session.js';
import { feedReducer } from "../reducers/feed.js";
import { storyReducer } from "../reducers/story.js";
import { commentReducer } from "../reducers/comment.js";
import { followersReducer, bookmarksReducer } from "../reducers/profile.js";


const rootReducer = combineReducers({
  userReducer,
  feedReducer,
  storyReducer,
  commentReducer,
  followersReducer,
  bookmarksReducer,

});


// temp took out logger because it was anoyning
// applyMiddleware(thunk, logger)

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk));
}





const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};




export default configureStore;
