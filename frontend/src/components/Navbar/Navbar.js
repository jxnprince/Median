


import { NavLink, useHistory } from "react-router-dom";
import { useUser } from "../../context/UserContext";

import { useDispatch } from "react-redux";

import { thunk_loginDemoUser } from "../../thunks/session.js";


const Navbar = () => {
  const { isUser } = useUser();
  const dispatch = useDispatch();
  const history = useHistory();


  const handleDemoLogin = event => {
    event.preventDefault();
    dispatch(thunk_loginDemoUser());
    history.push('/feed');
  }

  // if the user IS logged in
  if(isUser) {
    return (
      <>
        <nav>
          <li> <NavLink to={'/'} > Logout </NavLink> </li>
        </nav>
      </>
    )
  }


  // if the user is NOT logged in
  return (
    <>
      <nav>
        <li> <NavLink to={'/login'} > Login </NavLink> </li>
        <li> <NavLink to={'/'} onClick={event => handleDemoLogin(event)} > Demo </NavLink> </li>
      </nav>
    </>
  )

};



export default Navbar;
