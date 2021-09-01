
import styles from "./followbutton.module.css";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

import { useUser } from "../../context/UserContext.js";

import { thunk_createFollower } from "../../thunks/profile";





const FollowButton = ({ userId, setFollowed }) => {
  const { isUser } = useUser();
  const followers = useSelector(store => store.followersReducer.followers);
  const dispatch = useDispatch();
  // const history = useHistory();



  const handleFollow = event => {
    // userId:      is the user the logged in user is going to follow
    // followerId:  is the current logged in users id
    event.preventDefault();
    const payload = { userId, followerId: isUser.id };
    dispatch(thunk_createFollower(payload));
    setFollowed(true);
    // history.push('/feed');
  }



  const handleUnfollow = (event, followObject) => {
    event.preventDefault();
    // console.log(followObject.userId, " <-- followObject");
    // dispatch to unfollow thunk
    dispatch();
    setFollowed(false);
  }


  return (
    <>
      {followers?.[userId] === undefined ?
        <>
          <button onClick={event => handleFollow(event)} > Follow </button>
        </>
        :
        <>
          <button onClick={event => handleUnfollow(event, followers?.[userId])} > Unfollow </button>
        </>
      }
    </>
  );

};



export default FollowButton;
