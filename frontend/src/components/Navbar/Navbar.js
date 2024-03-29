


import { NavLink, useHistory } from "react-router-dom";
import { useUser } from "../../context/UserContext";

import { useDispatch } from "react-redux";

import { thunk_loginDemoUser, thunk_logoutUser } from "../../thunks/session.js";

import styles from "./navbar.module.css";




const Navbar = () => {
  const { isUser } = useUser();
  const dispatch = useDispatch();
  const history = useHistory();


  const handleDemoLogin = event => {
    event.preventDefault();
    dispatch(thunk_loginDemoUser());
    history.push('/feed');
  };


  const handleLogout = event => {
    event.preventDefault();
    dispatch(thunk_logoutUser());
    history.push('/');
  }






  // if the user IS logged in
  if(isUser) {
    return (
      <>
        <nav className={styles.nav_class} >
          <li>
            <NavLink to={'/'} > <img className={styles.resize} src={'https://i.imgur.com/IgoFy68.png'} /> </NavLink>
          </li>

          <li>
            <NavLink to={'/feed'} > Feed </NavLink>
          </li>

          <li>
            <NavLink to={'/profile'} > Profile </NavLink>
          </li>

          <li>
            <NavLink to={'/newstory'} > <img className={styles.resize} src={'https://i.imgur.com/kh845iH.png?1'} /> </NavLink>
          </li>

          <li>
            <NavLink to={'/'} onClick={event => handleLogout(event)} > <img className={styles.resize} src={'https://i.imgur.com/KP11L1y.png?1'} /> </NavLink>
          </li>
        </nav>
      </>
    )
  }


  // if the user is NOT logged in
  return (
    <>
      <nav className={styles.nav_class} >
        <li>
          <NavLink to={'/'} > <img className={styles.resize} src={'https://i.imgur.com/IgoFy68.png'} /> </NavLink>
        </li>

        <li>
          <NavLink to={'/signup'} > Sign Up </NavLink>
        </li>

        <li>
          <NavLink to={'/'} onClick={event => handleDemoLogin(event)} > Demo </NavLink>
        </li>

        <li>
          <NavLink to={'/login'} > <img src={'https://i.imgur.com/Yr0lEE7.png?1'} className={styles.displayLoginFormButton}/> </NavLink>
        </li>
      </nav>
    </>
  )

};



export default Navbar;
