

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { thunk_updateStory } from "../../thunks/story.js";



const UpdateStoryForm = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [postBody, setPostBody] = useState('');
  const [title, setTitle] = useState('');
  const { storyId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();




  const onSubmit = event => {
    event.preventDefault();
    const payload = { imgUrl, postBody, title };
    dispatch(thunk_updateStory(storyId, payload));
    history.push('/profile');
  };





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



        <button type='submit'> Update </button>
      </form>
    </>
  )
};


export default UpdateStoryForm;
