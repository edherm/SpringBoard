import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from "./session/sign_up_form_container";
import LoginFormContainer from "./session/login_form_container";
import NavBarContainer from "./nav/main/nav_bar_container"
import Splash from "./splash/splash";
import ProjectIndexContainer from "./projects/project_index_container";
import ProjectCreateContainer from "./forms/projects/project_create_container";
import ProjectToolboxContainer from "./toolboxes/project_toolbox/project_toolbox_container";

const App = () => (
  <div>
    {/* <header> */}
    {/* </header> */}
    <Switch >
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <Route path ="/" component={NavBarContainer} />
    </Switch>
    <Route exact path="/" component={Splash} />
    <Switch>
      <Route exact path="/:userId/projects/create" component={ProjectCreateContainer} />
      <Route path="/:userId/projects/:projectId" component={ProjectToolboxContainer} />
      <Route path="/:userId/projects" component={ProjectIndexContainer} />
    </Switch>
  </div>
)

export default App;