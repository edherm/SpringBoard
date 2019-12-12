import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from "./session/sign_up_form_container";
import LoginFormContainer from "./session/login_form_container";
import NavBarContainer from "./nav/nav_bar_container"
import Splash from "./splash/splash";
import ProjectIndexContainer from "./projects/project_index/project_index_container"
import ProjectCreateContainer from "./projects/project_form/project_create_container";
import ProjectSplash from "./projects/project_splash/project_splash";

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Route exact path="/" component={Splash} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <Switch>
      <Route exact path="/:userId/projects/create" component={ProjectCreateContainer} />
      <Route path="/:userId/projects/:projectId" component={ProjectSplash} />
      <Route path="/:userId/projects" component={ProjectIndexContainer} />
    </Switch>
  </div>
)

export default App;