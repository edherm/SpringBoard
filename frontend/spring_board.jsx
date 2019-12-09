import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'; //need to make this
import Root from './component/root'; // need to make this
import { login } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root")

  ReactDOM.render(<Root store={store} />, root)
})