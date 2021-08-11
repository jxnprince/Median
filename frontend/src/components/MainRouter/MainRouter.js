
import { Route, Switch } from 'react-router-dom';

import { useUser } from "../../context/UserContext.js";



const MainRouter = () => {
  const { isUser } = useUser();

  // if the user IS logged in
  if(isUser) {
    return (
      <>
        <Switch>

          <Route path='/' exact>
            {/* component here */}
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
        </Route>

        <Route>
          <h2>Page Not Found</h2>
        </Route>

      </Switch>
    </>
  )

};



export default MainRouter;
