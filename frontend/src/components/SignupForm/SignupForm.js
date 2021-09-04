
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { thunk_signupUser } from "../../thunks/session.js";


import styles from "./signupform.module.css";




const SignupForm = () => {
  const [ email, setEmail ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confPassword, setCongPassword ] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();



  const handleSubmit = event => {
    event.preventDefault();
    const payload = { email, firstName, lastName, password, confPassword };
    dispatch(thunk_signupUser(payload));
    history.push('/feed');
  };






  return (
    <>
    <div className={styles.signupForm} >
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="Email"
          />
          <br />

        <input
          type="text"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          placeholder="First Name"
          />
          <br />

        <input
          type="text"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
          placeholder="Last Name"
          />
          <br />

        <input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder="Password"
          />
          <br />

        <input
          type="password"
          value={confPassword}
          onChange={event => setCongPassword(event.target.value)}
          placeholder="Confirm Password"
          />
          <br />

          <div className={styles.buttons}>
            <button type="submit"> Sign Up </button>
          </div>

      </form>
    </div>
    </>
  )
};



export default SignupForm;
