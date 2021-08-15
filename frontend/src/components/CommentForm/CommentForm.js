



import { useState } from "react";




const CommentForm = () => {
  const [ comment, setComment ] = useState('');




  const onSubmit = event => {
    event.preventDefault();
    // dispatch thunk here

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
