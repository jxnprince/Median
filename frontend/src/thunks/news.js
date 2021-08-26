// https://newsapi.org/v2/everything?q=tesla&pageSize=5&apiKey=3544f9dee45945b383830e6b1adfdd3c



import { getNews } from "../actions/news.js";





const thunk_getNews = () => async (dispatch) => {
  const response = await fetch('https://newsapi.org/v2/everything?q=tesla&pageSize=5&apiKey=3544f9dee45945b383830e6b1adfdd3c');
  if(response.ok) {
    const data = await response.json();
    const news = { news: data.articles };
    dispatch(getNews(news));
    return;
  }
  // dispatch error handler here

}



export {
  thunk_getNews,

}
