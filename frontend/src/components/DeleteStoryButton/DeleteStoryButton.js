

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { thunk_deleteStory } from "../../thunks/story.js";




const DeleteStoryButton = ({ storyId }) => {
  const dispatch = useDispatch();


  const handleDelete = event => {
    event.preventDefault();
    dispatch(thunk_deleteStory(storyId));
  }




  return (
    <>
      <button onClick={event => handleDelete(event)} > Delete </button>
    </>
  )
};



export default DeleteStoryButton;
