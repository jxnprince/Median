

import { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { thunk_getNews } from "../../thunks/news.js";

import styles from "./splashlogo.module.css";





const SplashLogo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunk_getNews());
  },[dispatch]);


  return (
    <>
      <div id={styles.logoDiv} className={styles.splashLogo} >
        <img src={'https://i.imgur.com/cJgn5hy.png'} id={styles.mainLogo} className={styles.splashLogo} />
      </div>
    </>
  )
};



export default SplashLogo;
