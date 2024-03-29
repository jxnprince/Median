
import { Route, Switch } from 'react-router-dom';

import { useUser } from "../../context/UserContext.js";


import Navbar from "../Navbar";
import SplashLogo from "../SplashLogo";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import Feed from "../Feed";
import EachStory from "../EachStory";
import Profile from "../Profile";
import NewStory from "../NewStory";
import UpdateStoryForm from "../UpdateStoryForm";



const MainRouter = () => {
  const { isUser } = useUser();

  // if the user IS logged in
  if(isUser) {
    return (
      <>
        <Switch>
          <Route path='/' exact>
            <Navbar />
            <SplashLogo />
          </Route>

          <Route path='/feed' exact>
            <Navbar />
            <Feed />
          </Route>

          <Route path='/story/:storyId' exact>
            <Navbar />
            <EachStory />
          </Route>

          <Route path='/profile' exact>
            <Navbar />
            <Profile />
          </Route>


          <Route path='/profile/:userId' exact >
            <Navbar />
            <Profile otherUser={true} />
          </Route>


          <Route path='/newstory' exact>
            <Navbar />
            <NewStory />
          </Route>


          <Route path='/updatestory/:storyId' exact>
            <Navbar />
            <UpdateStoryForm />
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

      </Switch>
    </>
  )

};



export default MainRouter;
