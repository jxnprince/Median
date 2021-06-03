import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { thunk_signupUser } from '../../thunks/session.js';
import { useHistory } from 'react-router-dom';





function SignupForm (){
    //state here
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ errors, setErrors ] = useState([]);
    const [ reminder, setReminder ] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();


    const onSubmit = e => {
    e.preventDefault();
    // if errors.length is 0 dispatch the the signup thunk
    if (errors.length === 0) {
        dispatch(thunk_signupUser({ username, email, password }));

    } else {

    }

    };






    return (
        <>
        <div className="reminder-signup">
                <p>{reminder}</p>
        </div>

        <form onSubmit={onSubmit}>
        <h1>Signup</h1>

            <label className={styles.each_label} htmlFor="username" /> Username
            <br/>
            <input
                type="text"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
                placeholder="Your Username Here"
                id="username"
                name="username"
            />



            <label className={styles.each_label} htmlFor="email"  /> Email
            <br />
            <input
                type='text'
                onChange={(e) => setEmail(e.target.value) }
                value={email}
                placeholder="Your Email Here"
                name='email'
                id='email'
            />



                <label className={styles.each_label} htmlFor="" /> Password
                <br/>
                <input
                    type='text'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Your Password Here"
                    name='password'
                    id='password'
                />



                <label className={styles.each_label} htmlFor="" /> Confirmation
                <br/>
                <input
                    type='text'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    placeholder="Confirmation Here"
                    name='confirmation'
                    id='confirmation'
                />



            <button>Signup</button>

        </form>

        </>
    );
}

export default SignupForm;
