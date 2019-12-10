import React from "react";
import { Route, Switch } from "react-router-dom";
import {AuthRoute} from '../util/route_util';
import SignUpFormContainer from "./session/sign_up_form_container";
import LoginFormContainer from "./session/login_form_container";

const App = () => (
  <div>
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
)

export default App;