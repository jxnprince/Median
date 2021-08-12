
import { Route, Switch } from 'react-router-dom';

import { useUser } from "../../context/UserContext.js";


import Navbar from "../Navbar";
import SplashLogo from "../SplashLogo";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";



const MainRouter = () => {
  const { isUser } = useUser();

  // if the user IS logged in
  if(isUser) {
    return (
      <>
        <Switch>

          <Route path='/feed' exact>
            <Navbar />
          </Route>


          <Route>
            <h2>Page Not Found</h2>
          </Route>

        </Switch>
      </>
    )
  }

  // if the user is NOT Logged in
  return (
    <>
      <Switch>

        <Route path='/' exact>
          <Navbar />
            <SplashLogo />
        </Route>

        <Route path='/login' exact>
          <Navbar />
          <LoginForm />
        </Route>


        <Route path='/signup' exact>
          <Navbar />
          <SignupForm />
        </Route>


        <Route>
          <h2>Page Not Found</h2>
        </Route>

      </Switch>
    </>
  )

};



export default MainRouter;
