
import { useState, useEffect } from 'react';





const LoginForm = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');


  const handleSubmit = event => {
    event.preventDefault();
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
