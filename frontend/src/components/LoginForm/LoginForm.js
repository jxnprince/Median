
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { thunk_login } from "../../thunks/session.js";



const LoginForm = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();


  const handleSubmit = event => {
    event.preventDefault();
    const payload = { credential: email, password };
    dispatch(thunk_login(payload));
    history.push('/feed');
  }



  return (
    <>
    <form onSubmit={handleSubmit} >
      <input
        type="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
          onChange={event => setPassword(event.target.value)}
        placeholder="Password"
      />

        <button type="submit" > Login </button>
    </form>
    </>
  )
};




export default LoginForm;
