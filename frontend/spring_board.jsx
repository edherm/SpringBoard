import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { fetchTodos, fetchTodo, createTodo, updateTodo, deleteTodo } from "./actions/todo_actions";
// import { fetchProjects } from "./actions/project_actions";


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUser: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchTodos = fetchTodos;
  // window.fetchTodo = fetchTodo;
  // window.createTodo = createTodo;
  // window.updateTodo = updateTodo;
  // window.deleteTodo = deleteTodo;
  
  const root = document.getElementById("root")

  ReactDOM.render(<Root store={store} />, root)
})