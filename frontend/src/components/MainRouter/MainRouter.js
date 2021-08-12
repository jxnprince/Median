
import { Route, Switch } from 'react-router-dom';

import { useUser } from "../../context/UserContext.js";


import Navbar from "../Navbar";
import SplashLogo from "../SplashLogo";



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
          {/* component here */}
          <Navbar />
            <SplashLogo />
        </Route>

        <Route path='/login' exact>
          {/* component here */}
          <Navbar />
        </Route>


        <Route path='/signup' exact>
          {/* component here */}
          <Navbar />
        </Route>


        <Route>
          <h2>Page Not Found</h2>
        </Route>

      </Switch>
    </>
  )

};



export default MainRouter;
