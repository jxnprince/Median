
import { useDispatch } from 'react-redux';
import { thunk_deleteComment } from "../../thunks/comment.js";



const DeleteCommentButton = ({ commentId }) => {
  const dispatch = useDispatch();



  const handleDelete = event => {
    event.preventDefault();
    dispatch(thunk_deleteComment(commentId));

  }



  return (
    <>
      <button onClick={event => handleDelete(event)} > Delete </button>
    </>
  )

};



export default DeleteCommentButton;
