import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// Components
  // Main
    import NavBarContainer from "./nav/main/nav_bar_container"
    import FooterLinks from "./footer_links/footer_links";
    import Splash from "./splash/splash";
  // Session
    import SignupFormContainer from "./forms/session/sign_up_form_container";
    import LoginFormContainer from "./forms/session/login_form_container";
  // Projects
    import ProjectIndexContainer from "./projects/project_index_container";
    import ProjectCreateContainer from "./forms/projects/project_create_container";
    import ProjectToolboxContainer from "./toolboxes/project_toolbox/project_toolbox_container";
    import ProjectEditContainer from "./forms/projects/project_edit_container";
  // TodoLists
    import TodoListIndexContainer from "./todo_lists/todo_list_index_container";
    import TodoListShowContainer from "./todo_lists/todo_list_show_container";
  // Messages
    import MessagesIndexContainer from "./messages/messages_index_container";
    import MessageCreateContainer from "./forms/messages/message_create_container"
    import MessageEditContainer from "./forms/messages/message_edit_container";
    import MessageShowContainer from "./messages/message_show_container";


const App = () => (
  <>
    <Switch >
      <ProtectedRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/login" component={LoginFormContainer} />
      <Route path ="/" component={NavBarContainer} />
    </Switch>
    <ProtectedRoute exact path="/" component={Splash} />
    <Switch>
      <AuthRoute exact path="/:userId/projects/create" component={ProjectCreateContainer} />
      <AuthRoute path="/:userId/projects/:projectId/todoLists/:todoListId" component={TodoListShowContainer} />
      <AuthRoute path="/:userId/projects/:projectId/todoLists" component={TodoListIndexContainer} />
      <AuthRoute path="/:userId/projects/:projectId/messages/:messageId/edit" component={MessageEditContainer} />
      <AuthRoute path="/:userId/projects/:projectId/messages/:messageId" component={MessageShowContainer} />
      <AuthRoute path="/:userId/projects/:projectId/messages/new" component={MessageCreateContainer} />
      <AuthRoute path="/:userId/projects/:projectId/messages" component={MessagesIndexContainer} />
      <AuthRoute path="/:userId/projects/:projectId/edit" component={ProjectEditContainer} />
      <AuthRoute path="/:userId/projects/:projectId" component={ProjectToolboxContainer} />
      <AuthRoute path="/:userId/projects" component={ProjectIndexContainer} />
    </Switch>
    <Route path="/" component={FooterLinks} />
  </>
)

export default App;