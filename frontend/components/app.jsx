import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from "./forms/session/sign_up_form_container";
import LoginFormContainer from "./forms/session/login_form_container";
import NavBarContainer from "./nav/main/nav_bar_container"
import Splash from "./splash/splash";
import ProjectIndexContainer from "./projects/project_index_container";
import ProjectCreateContainer from "./forms/projects/project_create_container";
import ProjectToolboxContainer from "./toolboxes/project_toolbox/project_toolbox_container";
import ProjectEditToolbox from "./toolboxes/project_toolbox/project_edit_toolbox";
import ProjectEditContainer from "./forms/projects/project_edit_container";

const App = () => (
  <div>
    {/* <header> */}
    {/* </header> */}
    <Switch >
      <ProtectedRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/login" component={LoginFormContainer} />
      <Route path ="/" component={NavBarContainer} />
    </Switch>
    <ProtectedRoute exact path="/" component={Splash} />
    <Switch>
      <AuthRoute exact path="/:userId/projects/create" component={ProjectCreateContainer} />
      <AuthRoute path="/:userId/projects/:projectId/edit" component={ProjectEditContainer} />
      <AuthRoute path="/:userId/projects/:projectId" component={ProjectToolboxContainer} />
      <AuthRoute path="/:userId/projects" component={ProjectIndexContainer} />
    </Switch>
  </div>
)

export default App;