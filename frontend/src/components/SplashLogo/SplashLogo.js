

import { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";


import { thunk_getNews } from "../../thunks/news.js";

import styles from "./splashlogo.module.css";







const SplashLogo = () => {
  const articles = useSelector(store => store.newsReducer.news);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(thunk_getNews());
  },[dispatch]);




  return (
    <>
      <div id={styles.logoDiv} className={styles.splashLogo} >
        <img src={'https://i.imgur.com/cJgn5hy.png'} id={styles.mainLogo} className={styles.splashLogo} />
      </div>

      <div>
        {articles !== null ?
          <>
            {articles.map(eachArticle => (
              <>
                <div>
                  <a href={eachArticle.url} target="_blank" >
                    <img src={eachArticle.urlToImage} />
                      <h3> {eachArticle.title} </h3>
                      <h5> {eachArticle.author} </h5>
                    <span> source: {eachArticle.source.name} </span>
                  </a>
                </div>
              </>
            ))}
          </>
          :
          <>
            <h2>Loading news feed...</h2>
          </>
        }
      </div>
    </>
  )
};



export default SplashLogo;
