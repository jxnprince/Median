import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "../../context/UserContext";

import { Link } from "react-router-dom";


import { thunk_getFollowers } from "../../thunks/profile.js";


import styles from "./profile.module.css";



const Profile = () => {
  const { isUser } = useUser();
  const dispatch = useDispatch();
  const followers = useSelector(store => store.followersReducer.stories);


  useEffect(() => {
    dispatch(thunk_getFollowers(isUser.id));
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
        {followers !== null ?
          <>
            <h1>Your Followers {Object.values(followers).length} </h1>

            {Object.values(followers).map(eachFollower => (
              <>
                <div>
                  <Link to={`/story/${eachFollower.eachStory.id}`} >
                    <img src={eachFollower.eachStory.imgUrl } />

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
