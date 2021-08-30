
import { useState } from 'react';

import { useHistory } from "react-router-dom";







const UpdateStoryButton = ({ storyId }) => {
  const history = useHistory();


  const handleUpdate = event => {
    event.preventDefault();
    history.push(`/updatestory/${storyId}`);
  }



  return (
    <>
      <button onClick={event => handleUpdate(event)} > Update </button>
    </>
  );

};


export default UpdateStoryButton;
