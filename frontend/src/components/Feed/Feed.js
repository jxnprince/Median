
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from "./feed.module.css";

import { thunk_getFeed } from "../../thunks/feed.js";


import CloseModalButton from "../CloseModalButton";
import CommentForm from "../CommentForm";
import FollowButton from "../FollowButton";


import ReactModal from 'react-modal';




const Feed = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFeedModal, setShowFeedModal] = useState(false);
  const dispatch =  useDispatch();
  const featured = useSelector(store => store.feedReducer.featured);
  const stories = useSelector(store => store.feedReducer.featuredStories);



  useEffect(() => {
    dispatch(thunk_getFeed());
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
    setShowModal(true);
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

            <div className={styles.story_information}>
              <div className={styles.user_information}>
                <Link to={`/profile/${featured.user.id}`} >
                  <img src={featured.user.avatar} className={styles.avatar}/>
                  <span> {`${featured.user.firstName} ${featured.user.lastName}`} </span>
                </Link>
              </div>

              <div>
                <FollowButton userId={featured.user.id} />
                <span className={styles.likeScore}> {`${featured.likes}`} </span>
              </div>
            </div>

            <Link to={'/'} onClick={event => handleShowMore(event)} >
              <p> {limitedPreview} </p>
            </Link>



              <ReactModal isOpen={showModal} onRequestClose={closeModal} >
                <div className={styles.featured_story_text}>
                  <p>{featured.postBody}</p>
                </div>


                <div className={styles.featured_comments}>
                    {/* {featured.Comments.map(eachComment => (
                      <>
                        <Link to={`/profile/${eachComment.User.id}`} >
                          <img src={eachComment.User.avatar} className={styles.featured_comment_avatar} />
                            <span className={styles.featured_comment_userName} >
                              {`${eachComment.User.firstName}. ${eachComment.User.lastName} :`}
                            </span>
                        </Link>
                          <br />

                            <p className={styles.featured_comment_body}> {`${eachComment.body}`} </p>
                            <span className={styles.featured_comment_date}> {`${eachComment.createdAt}`} </span>
                      </>
                    ))} */}
                </div>

                  <CommentForm />

                  <CloseModalButton closeModal={closeModal} />
              </ReactModal>

          </div>
        </div>




        {/* all of the other stories */}
        <div className={'feed-items'} >
          <div className={styles.feed_container}>
              <>
                    <div className={styles.shortened_story_heading}>

                      <div className={styles.shortened_story_stack}>
                        {stories.map(eachStory => (
                          <>
                            <Link to={`/story/${eachStory.id}`} >
                              <h1 className={styles.shortened_story_title}>{eachStory.title}</h1>
                            </Link>

                            <div className={styles.shortened_story_author}>
                              <Link to={`/profile/${eachStory.user.id}`}>
                                <img src={eachStory.user.avatar} className={styles.shortened_story_avatar}  />
                                  <span className="shortened-story-name"> {`${eachStory.user.firstName} ${eachStory.user.lastName}`} </span>
                              </Link>

                              <FollowButton userId={eachStory.user.id} /> {eachStory.likes}
                              </div>

                              <div className={styles.shortened_story_img}>
                                <img src={eachStory.imgUrl} className={styles.shortened_story_img} />
                              </div>
                            </>
                            ))}
                        </div>

                    </div>

              </>

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
