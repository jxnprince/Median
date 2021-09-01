import { useState, useEffect } from "react";


import { useParams, Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { thunk_getSpecificStory  } from "../../thunks/story.js";
import { thunk_getComments } from "../../thunks/comment.js";

import CommentForm from "../CommentForm";
import DeleteCommentButton from "../DeleteCommentButton";


import styles from "./eachstory.module.css";




const EachStory = () => {
  const { storyId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const story = useSelector(store => store.storyReducer.story);
  const comments = useSelector(store => store.commentReducer.comments);


  useEffect(() => {
    dispatch(thunk_getSpecificStory(storyId));
    dispatch(thunk_getComments(storyId));
  },[dispatch]);


  const goBack = event => {
    event.preventDefault();
    history.push('/feed');
  }





  if ((story !== null && story !== undefined) && (comments !== null && comments !== undefined)) {
    return (
      <>
        <div>
          <Link to={'/'} onClick={event => goBack(event)}> Back </Link>
            <h1>{story.title}</h1>
              <img src={story.imgUrl} />
                <img src="https://i.imgur.com/uW1Ryn2.png?1" className={styles.thumbsup} />
                  <span>
                      {Object.values(story.UserLikes).length}
                  </span>
              <p>{story.postBody}</p>

        </div>

        <div>
            <h3> Comments </h3>
          {comments.map(eachComment => (
            <>
              <img src={eachComment.User.avatar} />
              <span > {`${eachComment.User.firstName} ${eachComment.User.lastName}`} </span>
              <p> {eachComment.body} </p>

              <DeleteCommentButton commentId={eachComment.id} commenterId={eachComment.userId} />
            </>
          ))}
        </div>

        <CommentForm storyId={story.id} />
      </>
    )
  }


  return (
    <>
      <h1>Loading story ... </h1>
    </>
  )

};




export default EachStory;
