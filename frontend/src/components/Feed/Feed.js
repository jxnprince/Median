
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from "./feed.module.css";

import { thunk_getFeed } from "../../thunks/feed.js";

import { useUser } from '../../context/UserContext';



const Feed = () => {
  const [ showtext, setShowText ] = useState(false);
  const dispatch =  useDispatch();
  const { isUser } = useUser();
  const featured = useSelector(store => store.feedReducer.featured);
  const stories = useSelector(store => store.feedReducer.featuredStories);



  useEffect(() => {
    dispatch(thunk_getFeed(isUser.id));
  },[dispatch]);



  const createLimitedPreview = text => {
    const toArray = text.split(" ");
    return toArray.splice(0, 10).join(" ") + '...';
  }


  const handleShowMore = event => {
    event.preventDefault();
    setShowText(true)
  }



  if(stories !== null && featured !== null){

    const limitedPreview = createLimitedPreview(featured.postBody);

    return (
      <>
      {/* first main story  */}
        <div className={'featured'}>
          <div className={styles.featured_container} >
            <h1>{featured.title}</h1>
            <img src={featured.imgUrl} />

            <Link to={'/'} onClick={event => handleShowMore(event)} >
              <p> {limitedPreview} </p>
            </Link>


            {showtext ?
              <div>
                <p>{featured.postBody}</p>
              </div>
            :
              <></>
            }
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
