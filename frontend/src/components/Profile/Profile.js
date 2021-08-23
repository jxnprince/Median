import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "../../context/UserContext";

import { Link } from "react-router-dom";


import { thunk_getFollowers } from "../../thunks/profile.js";





const Profile = () => {
  const { isUser } = useUser();
  const dispatch = useDispatch();
  const followers = useSelector(store => store.followersReducer.stories);


  useEffect(() => {
    dispatch(thunk_getFollowers(isUser.id));
  },[dispatch]);





  return (
    <>
      <div>
        <img src={isUser.avatar} />
      </div>

      <div>
        <h3>{isUser.firstName}</h3>
        <h3>{isUser.lastName}</h3>
        <h3>{isUser.gender}</h3>
        <h3>{isUser.birthdate}</h3>
        <h3>{isUser.email}</h3>
      </div>


      <div>
        {followers !== null ?
          <>
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
