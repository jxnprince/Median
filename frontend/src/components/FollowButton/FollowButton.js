
import styles from "./followbutton.module.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { useUser } from "../../context/UserContext.js";

import { thunk_createFollower } from "../../thunks/follow.js";




const FollowButton = ({ userId }) => {
  const { isUser } = useUser();
  const dispatch = useDispatch();
  const history = useHistory();


  const handleFollow = event => {
    // userId:      is the user the logged in user is going to follow
    // followerId:  is the current logged in users id
    event.preventDefault();
    const payload = { userId, followerId: isUser.id };
    dispatch(thunk_createFollower(payload));
    history.push('/feed');
  }



  return (
    <>
      {/* <img
        src="https://i.imgur.com/uW1Ryn2.png?1"
        className={styles.thumbsup}
        /> */}
        <button onClick={event => handleFollow(event)} > Follow </button>
    </>
  );

};



export default FollowButton;
