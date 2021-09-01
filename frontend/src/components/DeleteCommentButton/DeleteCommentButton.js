
import { useDispatch } from 'react-redux';

import { useUser } from '../../context/UserContext';
import { thunk_deleteComment } from "../../thunks/comment.js";




const DeleteCommentButton = ({ commentId, commenterId }) => {
  const dispatch = useDispatch();
  const { isUser } = useUser();


  const handleDelete = event => {
    event.preventDefault();
    dispatch(thunk_deleteComment(commentId));

  }



  return (
    <>
      {isUser.id === commenterId ?
        <>
          <button onClick={event => handleDelete(event)} > Delete </button>
        </>
        :
        <></>
      }
    </>
  )

};



export default DeleteCommentButton;
