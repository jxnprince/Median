import { useState } from "react";
import { useDispatch } from "react-redux";


import { useUser } from "../../context/UserContext.js";
import { thunk_newComment } from "../../thunks/comment.js";









const CommentForm = ({ storyId }) => {
  const [ comment, setComment ] = useState('');
  const dispatch = useDispatch();
  const { isUser } = useUser();




  const onSubmit = event => {
    event.preventDefault();
    const payload = { userId: isUser.id, storyId, body: comment };
    dispatch(thunk_newComment(payload));

  };




  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="textarea"
          value={comment}
          onChange={event => setComment(event.target.value)}
        />

        <button type="submit" > Comment </button>
      </form>
    </>
  )
};




export default CommentForm;
