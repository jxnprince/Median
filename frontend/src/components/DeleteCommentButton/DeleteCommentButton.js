



const DeleteCommentButton = () => {




  const handleDelete = event => {
    event.preventDefault();
  }



  return (
    <>
      <button onClick={event => handleDelete(event)} > Delete </button>
    </>
  )

};



export default DeleteCommentButton;
