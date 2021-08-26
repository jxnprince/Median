

import { GET_NEWS } from "../types/news.js";



const getNews = (news) => ({
  type: GET_NEWS,
  news
});




export {
  getNews,
}
