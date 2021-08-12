
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from "./feed.module.css";

import { thunk_getFeed } from "../../thunks/feed.js";

import { useUser } from '../../context/UserContext';



const Feed = () => {
  const dispatch =  useDispatch();
  const { isUser } = useUser();


  useEffect(() => {
    dispatch(thunk_getFeed(isUser.id));
  },[dispatch]);



  return (
    <>
    {/* first main story  */}
      <div className={'featured'}>
        <div className={styles.featured_container}>

        </div>
      </div>


      {/* all of the other stories */}
    </>
  )


};




export default Feed;
