
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from "./feed.module.css";

import { thunk_getFeed } from "../../thunks/feed.js";

import { useUser } from '../../context/UserContext';



const Feed = () => {
  const dispatch =  useDispatch();
  const { isUser } = useUser();
  const stories = useSelector(store => store.feedReducer.featuredStories);



  useEffect(() => {
    dispatch(thunk_getFeed(isUser.id));
  },[dispatch]);



  if(stories !== null){
    return (
      <>
      {/* first main story  */}
        <div className={'featured'}>
          <div className={styles.featured_container}>
            {Object.values(stories).map(story => (
              <>
                <h1>{story.title} </h1>
              </>
            ))}
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
