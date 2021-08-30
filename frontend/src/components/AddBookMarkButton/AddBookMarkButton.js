



const AddBookMarkButton = () => {







  const handleBookmark = event => {
    event.preventDefault();
  }



  return (
    <>
      <button onClick={event => handleBookmark(event)} > Bookmark </button>
    </>
  );

};




export default AddBookMarkButton;
