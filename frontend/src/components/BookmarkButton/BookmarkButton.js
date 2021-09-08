

import { useState } from 'react';
import { useDispatch } from 'react-redux';



const BookmarkButton = () => {
  const dispatch = useDispatch();



  const handleBookmark = event => {
    event.preventDefault();

  }




  return (
    <>
      <button onClick={event => handleBookmark(event)}> Bookmark </button>
    </>
  )
};



export default BookmarkButton;
