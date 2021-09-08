


import { CREATE_BOOKMARK  } from "../types/bookmark.js";




const createBookmark = (bookmark) => ({
  type: CREATE_BOOKMARK,
  bookmark
});




export {
  createBookmark,

}
