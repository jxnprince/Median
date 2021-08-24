import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "../../context/UserContext";

import { Link } from "react-router-dom";


import { thunk_getFollowers, thunk_getBookmarks } from "../../thunks/profile.js";



import styles from "./profile.module.css";



const Profile = () => {
  const { isUser } = useUser();
  const dispatch = useDispatch();
  const followers = useSelector(store => store.followersReducer.stories);
  const bookmarks = useSelector(store => store.bookmarksReducer.bookmarks);


  useEffect(() => {
    dispatch(thunk_getFollowers(isUser.id));
    dispatch(thunk_getBookmarks(isUser.id));
  },[dispatch]);





  return (
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


      <div>
        {bookmarks !== null ?
          <>
            <h1>Your Bookmarks {Object.values(bookmarks).length} </h1>
            {Object.values(bookmarks).map(eachBookmark => (
              <>
                <div className={styles.bookmarks_container}>
                  <Link to={`/story/${eachBookmark.id}`} >
                    <img src={eachBookmark.imgUrl} className={styles.bookmark_img}/>
                    <span> {eachBookmark.title} </span>
                  </Link>
                </div>
              </>
            ))}
          </>
          :
          <></>
        }
      </div>


      <div>
        {followers !== null ?
          <>
            <h1>Your Followers {Object.values(followers).length} </h1>

            {Object.values(followers).map(eachFollower => (
              <>
                <div>
                  <Link to={`/story/${eachFollower.eachStory.id}`} >
                    <img src={eachFollower.eachStory.imgUrl} className={styles.followers_img} />
                    <span id={styles.followers_title}> {eachFollower.eachStory.title} </span>
                  </Link>
                </div>

                <div>
                  <Link to={'/'} >
                    <img src={eachFollower.User.avatar} className={styles.miniavatar}/>
                      <span> {eachFollower.User.firstName} {eachFollower.User.lastName} </span>
                  </Link>
                </div>
              </>
            ))}
          </>
          :
          <></>
        }
      </div>

    </>
  )

};



export default Profile;
