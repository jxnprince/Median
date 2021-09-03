
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import styles from "./feed.module.css";


import { thunk_getFeed } from "../../thunks/feed.js";
import { thunk_getComments } from "../../thunks/comment.js";
import { thunk_getAllFollowers } from "../../thunks/profile";


import { useUser } from "../../context/UserContext.js";
import { useModalStyle } from "../../context/ReactModalStylesContext.js";


import CloseModalButton from "../CloseModalButton";
import CommentForm from "../CommentForm";
import DeleteCommentButton from "../DeleteCommentButton";
import FollowButton from "../FollowButton";


import ReactModal from 'react-modal';




const Feed = () => {
  const [showModal, setShowModal] = useState(false);
  const [followed, setFollowed] = useState(null);
  const { isUser } = useUser();
  const { currentStyle } = useModalStyle();
  const dispatch =  useDispatch();
  const featured = useSelector(store => store.feedReducer.featured);
  const featuredComments = useSelector(store => store.commentReducer.comments)
  const stories = useSelector(store => store.feedReducer.featuredStories);



  useEffect(() => {
    dispatch(thunk_getFeed());
    dispatch(thunk_getAllFollowers(isUser.id));
  }, [dispatch, followed]);



  useEffect(() => {
    if (featured !== null) {
      dispatch(thunk_getComments(featured.id));
    }
  }, [featured]);




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
                <img src="https://i.imgur.com/uW1Ryn2.png?1" className={styles.thumbsup} />
                <span className={styles.likeScore}> {`${featured.likes}`} </span>
              </div>
            </div>

            <Link to={'/'} onClick={event => handleShowMore(event)} >
              <p> {limitedPreview} </p>
            </Link>



              <ReactModal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={ currentStyle }
              >

                <div className={styles.featured_story_text}>
                  <p>{featured.postBody}</p>
                </div>


                <div className={styles.featured_comments}>
                  {featuredComments !== null ?
                    <>
                      {featuredComments.map(eachComment => (
                        <>
                          <Link to={`/profile/${eachComment.userId}`} >
                            <img src={eachComment.User.avatar} className={styles.featured_comment_avatar} />
                            <span className={styles.featured_comment_userName} >
                              {`${eachComment.User.firstName}. ${eachComment.User.lastName} :`}
                            </span>
                          </Link>
                            <br />

                            <p className={styles.featured_comment_body}> {`${eachComment.body}`} </p>
                            <span className={styles.featured_comment_date}> {`${eachComment.createdAt}`} </span>

                          <DeleteCommentButton commentId={eachComment.id} commenterId={eachComment.userId} />
                        </>
                      ))}
                    </>
                    :
                    <>
                      <h2>Loading comments...</h2>
                    </>
                  }
                </div>

                  <CommentForm storyId={featured.id} />

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

                              <FollowButton userId={eachStory.user.id}  />
                                  <img src="https://i.imgur.com/uW1Ryn2.png?1" className={styles.thumbsup} />
                                    {eachStory.likes}
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
