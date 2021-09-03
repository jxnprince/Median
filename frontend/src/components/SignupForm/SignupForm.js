

import { useState, useEffect } from 'react';



import styles from "./signupform.module.css";




const SignupForm = () => {
  const [ email, setEmail ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confPassword, setCongPassword ] = useState('');




  const handleSubmit = event => {
    event.preventDefault();
    const payload = { email, firstName, lastName, password, confPassword };
    
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
