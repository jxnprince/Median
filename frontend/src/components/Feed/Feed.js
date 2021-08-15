
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
  const [showFeedModal, setShowFeedModal] = useState(false);
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
    setShowModal(true);
  }





  const handleFeedItemsComment = event => {
    event.preventDefault();
    setShowFeedModal(true);
  };


  const closeFeedModal = () => {
    setShowFeedModal(false);
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
                <img src={featured.User.avatar} className={styles.avatar}/>
                <span> {`${featured.User.firstName} ${featured.User.lastName}`} </span>
              </div>

              <div>
                <img src="https://i.imgur.com/uW1Ryn2.png?1" className={styles.thumbsup} />
                  <span className={styles.likeScore}> {`${featured.UserLikes.length}`} </span>
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
                    {featured.Comments.map(eachComment => (
                      <>
                        <img src={eachComment.User.avatar} className={styles.featured_comment_avatar} />
                          <span className={styles.featured_comment_userName} >
                            {`${eachComment.User.firstName}. ${eachComment.User.lastName} :`}
                            <br />
                          </span>
                            <p className={styles.featured_comment_body}> {`${eachComment.body}`} </p>
                            <span className={styles.featured_comment_date}> {`${eachComment.createdAt}`} </span>
                      </>
                    ))}
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
                  <div className={styles.shortened_story}>
                    <div className={styles.shortened_story_heading}>

                      <div className={styles.shortened_story_stack}>
                        <Link to={`/story/${eachStory.id}`} >
                          <h1 className={styles.shortened_story_title}>{eachStory.title}</h1>
                        </Link>

                        <div className={styles.shortened_story_author}>
                          <img src={eachStory.User.avatar} className={styles.shortened_story_avatar}  />
                              <span className="shortened-story-name"> {`${eachStory.User.firstName} ${eachStory.User.lastName}`} </span>
                                <img src="https://i.imgur.com/uW1Ryn2.png?1" className={styles.thumbsup} /> {eachStory.UserLikes.length}

                                <div>
                                  <Link to={'/'} onClick={event => handleFeedItemsComment(event)} > Comment </Link>
                                </div>
                          </div>
                        </div>

                        <div className={styles.shortened_story_img}>
                          <img src={eachStory.imgUrl} className={styles.shortened_story_img} />
                        </div>
                    </div>
                  </div>


                <ReactModal isOpen={showFeedModal} onRequestClose={closeFeedModal} >
                    <div>
                    {eachStory.Comments.map(eachComment => (
                      <>
                        <img src={eachComment.User.avatar} className={styles.featured_comment_avatar} />
                        <span className={styles.featured_comment_userName} >
                          {`${eachComment.User.firstName}. ${eachComment.User.lastName} :`}
                          <br />
                          </span>
                        <p> {eachComment.body} </p>
                      </>
                    ))}
                    </div>


                  <CloseModalButton closeModal={closeFeedModal} />
                </ReactModal>
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
