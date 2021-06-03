// imports here
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers here:
import { userReducer } from '../reducers/session.js';
import { notebooksReducer, notebookPageReducer, newNotebookReducer, deleteNotebookReducer } from '../reducers/notebooks.js';
import { notesReducer, recentNoteReducer, recentlyCreatedNoteReducer, recentlyDeletedNoteReducer } from '../reducers/notes.js';
import { tagsReducer } from '../reducers/tags.js';



const rootReducer = combineReducers({
    userReducer,
    notebooksReducer,
    notebookPageReducer,
    notesReducer,
    recentNoteReducer,
    newNotebookReducer,
    tagsReducer,
    recentlyCreatedNoteReducer,
    deleteNotebookReducer,
    recentlyDeletedNoteReducer,


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
