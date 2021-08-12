
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from "./feed.module.css";

import { thunk_getFeed } from "../../thunks/feed.js";

import { useUser } from '../../context/UserContext';



const Feed = () => {
  const dispatch =  useDispatch();
  const { isUser } = useUser();
  const featured = useSelector(store => store.feedReducer.featured);
  const stories = useSelector(store => store.feedReducer.featuredStories);



  useEffect(() => {
    dispatch(thunk_getFeed(isUser.id));
  },[dispatch]);



  if(stories !== null && featured !== null){
    return (
      <>
      {/* first main story  */}
        <div className={'featured'}>
          <div className={styles.featured_container}>
            <h1>{featured.title}</h1>
            <img src={featured.imgUrl} />
            <p>{featured.postBody}</p>
          </div>
        </div>


        {/* all of the other stories */}
      </>
    )

  }


  return (
      <>
        <h1>Loading Feed...</h1>
      </>
  )


};




export default Feed;
