

import { useState, useEffect } from 'react';





const SignupForm = () => {
  const [ email, setEmail ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confPassword, setCongPassword ] = useState('');


  const handleSubmit = event => {
    event.preventDefault();

  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="Email"
          />

        <input
          type="text"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          placeholder="First Name"
          />

        <input
          type="text"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
          placeholder="Last Name"
          />

        <input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder="Password"
          />

        <input
          type="password"
          value={confPassword}
          onChange={event => setCongPassword(event.target.value)}
          placeholder="Confirm Password"
          />

        <button type="submit"> Sign Up </button>

      </form>
    </>
  )
};



export default SignupForm;
