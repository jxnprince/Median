
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from "./feed.module.css";

import { thunk_getFeed } from "../../thunks/feed.js";

import { useUser } from '../../context/UserContext';

import CloseModalButton from "../CloseModalButton";


import ReactModal from 'react-modal';



const Feed = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch =  useDispatch();
  const { isUser } = useUser();
  const featured = useSelector(store => store.feedReducer.featured);
  const stories = useSelector(store => store.feedReducer.featuredStories);



  useEffect(() => {
    dispatch(thunk_getFeed(isUser.id));
  },[dispatch]);


  const closeModal = () => {
    setShowModal(false);
  }


  const createLimitedPreview = text => {
    const toArray = text.split(" ");
    return toArray.splice(0, 10).join(" ") + '...';
  }


  const handleShowMore = event => {
    event.preventDefault();
    setShowModal(true)
  }



  if(stories !== null && featured !== null){

    const limitedPreview = createLimitedPreview(featured.postBody);

    return (
      <>
      {/* first main story  */}
        <div className={'featured'}>
          <div className={styles.featured_container} >
            <Link to={`/story/${featured.id}`}>
              <h1>{featured.title}</h1>
              <img src={featured.imgUrl} />
            </Link>

            <Link to={'/'} onClick={event => handleShowMore(event)} >
              <p> {limitedPreview} </p>
            </Link>

          <ReactModal isOpen={showModal} onRequestClose={closeModal} >
            <div>
              <p>{featured.postBody}</p>
            </div>
              <CloseModalButton closeModal={closeModal} />
          </ReactModal>
          </div>
        </div>


        {/* all of the other stories */}
        <div className={'feed-items'} >
          <div className={styles.feed_container}>
            {Object.values(stories).map(eachStory => (
              <>
              <Link to={`/story/${eachStory.id}`} >
                <h1>{eachStory.title}</h1>
                <img src={eachStory.imgUrl} />
              </Link>
              </>
            ))}
          </div>
        </div>
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
