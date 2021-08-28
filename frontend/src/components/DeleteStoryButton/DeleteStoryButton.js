

import { useState } from 'react';
import { useDispatch } from 'react-redux';





const DeleteStoryButton = ({ storyId }) => {
  const dispatch = useDispatch();


  const handleDelete = event => {
    event.preventDefault();
  }



  return (
    <>
      <button onClick={event => handleDelete(event)} > Delete </button>
    </>
  )
};



export default DeleteStoryButton;
