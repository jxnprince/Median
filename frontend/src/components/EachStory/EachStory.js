import { useState, useEffect } from "react";


import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { thunk_getSpecificStory  } from "../../thunks/story.js";




const EachStory = () => {
  const { storyId } = useParams();
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(thunk_getSpecificStory(storyId));
  },[dispatch]);



  return (
    <>
    </>
  )
};




export default EachStory;
