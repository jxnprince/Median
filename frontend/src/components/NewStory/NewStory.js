import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';




const NewStory = () => {
  const [ title, setTitle ] = useState('');
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
  }


  return (
    <>
    <form onSubmit={onSubmit}>
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
