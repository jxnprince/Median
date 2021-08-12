


import { NavLink, useHistory } from "react-router-dom";
import { useUser } from "../../context/UserContext";

import { useDispatch } from "react-redux";

import { thunk_loginDemoUser, thunk_logoutUser } from "../../thunks/session.js";


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
        <nav>
          <li> <NavLink to={'/'} onClick={event => handleLogout(event)} > Logout </NavLink> </li>
        </nav>
      </>
    )
  }


  // if the user is NOT logged in
  return (
    <>
      <nav>
        <li> <NavLink to={'/'} > Home </NavLink> </li>
        <li> <NavLink to={'/login'} > Login </NavLink> </li>
        <li> <NavLink to={'/signup'} > Sign Up </NavLink> </li>
        <li> <NavLink to={'/'} onClick={event => handleDemoLogin(event)} > Demo </NavLink> </li>
      </nav>
    </>
  )

};



export default Navbar;
