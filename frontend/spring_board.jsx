import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'; //need to make this
import Root from './component/root'; // need to make this
// import * as SessionApiUtil from './util/session_api_util';
import {login, signup, logout} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  
  const root = document.getElementById("root")

  ReactDOM.render(<Root store={store} />, root)
})