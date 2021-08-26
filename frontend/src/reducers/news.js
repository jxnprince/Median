



import { GET_NEWS } from "../types/news.js";



const newsReducer = (state = { news: null }, action) => {
  switch (action.type){
    case GET_NEWS:
      return { ...state, ...action.news };
    default:
      return state;
  }
}



export {
  newsReducer,

}
