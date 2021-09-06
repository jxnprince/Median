import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";


import ReactModal from 'react-modal';


import { thunk_getFollowers, thunk_getBookmarks, thunk_getOtherUser } from "../../thunks/profile.js";
import { thunk_getAllStories } from "../../thunks/story.js";


import { useUser } from "../../context/UserContext";
import { useModalStyle } from "../../context/ReactModalStylesContext.js";



import CloseModalButton from "../CloseModalButton";
import DeleteStoryButton from "../DeleteStoryButton";
import UpdateStoryButton from "../UpdateStoryButton";
import FollowButton from "../FollowButton";


import styles from "./profile.module.css";









const Profile = ({ otherUser=false }) => {
  const [ showBookmarksModal, setShowBookmarksModal ] = useState(false);
  const [ showFollowersModal, setShowFollowersModal ] = useState(false);
  const [ showStoriesModal, setShowStoriesModal ] = useState(false);
  const { isUser } = useUser();
  const { currentStyle } = useModalStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const followers = useSelector(store => store.followersReducer.stories);
  const numOfFollowers = useSelector(store => store.followersReducer.length);
  const bookmarks = useSelector(store => store.bookmarksReducer.bookmarks);
  const stories = useSelector(store => store.storyReducer.stories);
  const otherUsersInfo = useSelector(store => store.otherUsersProfileReducer.user);
  const { userId } = useParams();




  useEffect(() => {
    if (otherUser && userId !== isUser.id) {
      dispatch(thunk_getFollowers(userId));
      dispatch(thunk_getBookmarks(userId));
      dispatch(thunk_getAllStories(userId));
      dispatch(thunk_getOtherUser(userId));
    } else {
      dispatch(thunk_getFollowers(isUser.id));
      dispatch(thunk_getBookmarks(isUser.id));
      dispatch(thunk_getAllStories(isUser.id));
    }
  }, [dispatch, userId]);




  const closeBookmarksModal = () => {
    setShowBookmarksModal(false);
  }



  const handleShowBookmarksModal = event => {
    event.preventDefault();
    setShowBookmarksModal(true);
  }


  const handleShowFollowersModal = event => {
    event.preventDefault();
    setShowFollowersModal(true);
  }


  const closeFollowersModal = () => {
    setShowFollowersModal(false);
  }



  const closeStoriesModal = () => {
    setShowStoriesModal(false);
  }



  const handleShowStoriesModal = event => {
    event.preventDefault();
    setShowStoriesModal(true);
  }



  const gotoStory = (event, storyId) => {
    event.preventDefault();
    history.push(`/story/${storyId}`)
  }


  return (
    <>

      {otherUser && otherUsersInfo !== null?
      <>
          <div className={styles.profile_img}>
            <img src={otherUsersInfo.avatar} className={styles.mainProfileImg} />
          </div>

          {/* need a different implementation of followbutton component for profile */}
          {/* <FollowButton userId={otherUsersInfo.id} /> */}

          <div className={styles.userinfo}>
            <h3>{otherUsersInfo.firstName}</h3>
            <h3>{otherUsersInfo.lastName}</h3>
            <h3>{otherUsersInfo.gender}</h3>
            <h3>{otherUsersInfo.email}</h3>
          </div>
      </>
      :
      <>
          <div className={styles.profile_img}>
            <img src={isUser.avatar} className={styles.mainProfileImg} />
          </div>

          <div className={styles.userinfo}>
            <h3>{isUser.firstName}</h3>
            <h3>{isUser.lastName}</h3>
            <h3>{isUser.gender}</h3>
            <h3>{isUser.email}</h3>
          </div>
      </>

    }



        {bookmarks !== null ?
          <>

          <Link to='/' onClick={event => handleShowBookmarksModal(event)} >
            <h1>Bookmarks {Object.values(bookmarks).length} </h1>
          </Link>

            <ReactModal
              isOpen={showBookmarksModal}
              onRequestClose={closeBookmarksModal}
              style={currentStyle}
            >

            {Object.values(bookmarks).length > 0  ?
              <>
                {Object.values(bookmarks).map(eachBookmark => (
                  <>
                    <div className={styles.bookmarks_container}>
                      <div className={styles.eachBookmark_wrap} onClick={event => gotoStory(event, eachBookmark.id)}>
                      <Link to={`/story/${eachBookmark.id}`} >
                        <img src={eachBookmark.imgUrl} className={styles.bookmark_img} />
                          <br />
                        <span> {eachBookmark.title} </span>
                      </Link>
                      </div>
                    </div>
                  </>
                ))}
              </>
              :
              <>
                <h1>No Bookmarks</h1>

              </>
              }

              <CloseModalButton closeModal={closeBookmarksModal} />
            </ReactModal>
          </>
          :
          <></>
        }




        {followers !== null ?
          <>
          <Link to='/' onClick={event => handleShowFollowersModal(event)} >
            <h1>Followers {numOfFollowers} </h1>
          </Link>

          <ReactModal
            isOpen={showFollowersModal}
            onRequestClose={closeFollowersModal}
            style={currentStyle}
          >


          {Object.values(followers).length > 0  ?
            <>
              {Object.values(followers).map(eachFollower => (
                <>
                  <div>
                    <Link to={`/story/${eachFollower.id}`} >
                      <img src={eachFollower.imgUrl} className={styles.followers_img} />
                      <span id={styles.followers_title}> {eachFollower.title} </span>
                    </Link>
                  </div>

                  <div>
                    <Link to={`/profile/${eachFollower?.User?.id}`} >
                      <img src={eachFollower?.User?.avatar} className={styles.miniavatar} />
                      <span> {eachFollower?.User?.firstName} {eachFollower?.User?.lastName} </span>
                    </Link>
                  </div>
                </>
              ))}
            </>
            :
            <>
              <h2>No story data for your followers</h2>
            </>
          }

            <CloseModalButton closeModal={closeFollowersModal} />
          </ReactModal>
          </>
          :
          <></>
        }




        {stories !== null ?
          <>
            <Link to='/' onClick={event => handleShowStoriesModal(event)} >
              <h1>Stories {Object.values(stories).length} </h1>
            </Link>

          <ReactModal
            isOpen={showStoriesModal}
            onRequestClose={closeStoriesModal}
            style={currentStyle}
          >


            {Object.values(stories).length > 0  ?
              <>
                {Object.values(stories).map(eachStory => (
                  <>
                    <div>
                      <Link to={`/story/${eachStory.id}`} >
                        <img src={eachStory.imgUrl} />
                        <h3>{eachStory.title}</h3>
                      </Link>
                    </div>

                    {eachStory.userId === isUser.id ?
                      <>
                        <div>
                          <DeleteStoryButton storyId={eachStory.id} />
                        </div>

                        <div>
                          <UpdateStoryButton storyId={eachStory.id} />
                        </div>
                      </>
                      :
                      <></>
                    }
                  </>
                ))}
              </>
              :
              <>
                <h1>No Stories</h1>
              </>
            }

            <CloseModalButton closeModal={closeStoriesModal} />
          </ReactModal>
          </>
          :
          <>
          </>
        }


    </>
  )

};



export default Profile;
