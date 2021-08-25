import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';





const NewStory = () => {
  // imgUrl, postBody, title
  const [ imgUrl, setImgUrl ] = useState('');
  const [ postBody, setPostBody ] = useState('');
  const [ title, setTitle ] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();




  const onSubmit = event => {
    event.preventDefault();
    //dispatch thunk here
    
    history.push('/profile');

  }





  return (
    <>
    <form onSubmit={onSubmit}>
      <label>
        Image
        <input
          type='text'
          value={imgUrl}
          onChange={event => setImgUrl(event.target.value)}
        />
      </label>

      <label>
        Story Text
        <textarea
          value={postBody}
          onChange={event => setPostBody(event.target.value)}
        />
      </label>

      <label>
        Title
        <input
          type='text'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </label>



      <button type='submit'> Create </button>
    </form>
    </>
  )

};



export default NewStory;
