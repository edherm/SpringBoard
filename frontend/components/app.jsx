import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from "./session/sign_up_form_container";
import LoginFormContainer from "./session/login_form_container";
import NavBarContainer from "./nav/nav_bar_container"
import Splash from "./splash/splash";
import ProjectIndexContainer from "./projects/project_index_container"

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Route exact path="/" component={Splash} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <Route path="/:userId/projects" component={ProjectIndexContainer} />
  </div>
)

export default App;