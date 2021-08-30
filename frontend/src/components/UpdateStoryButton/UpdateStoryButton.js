



import { useState } from 'react';
import { useDispatch } from 'react-redux';





const UpdateStoryButton = ({ storyId }) => {
  const dispatch = useDispatch();


  const handleUpdate = event => {
    event.preventDefault();
    //dispatch here
  }


  return (
    <>
      <button onClick={event => handleUpdate(event)} > Update </button>
    </>
  );

};


export default UpdateStoryButton;
