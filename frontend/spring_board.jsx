import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import { fetchTodoLists, fetchTodoList, createTodoList, updateTodoList, deleteTodoList } from "./actions/todo_list_actions";
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
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.fetchTodoLists = fetchTodoLists;
  // window.fetchTodoList = fetchTodoList;
  // window.createTodoList = createTodoList;
  // window.updateTodoList = updateTodoList;
  // window.deleteTodoList = deleteTodoList;

  // window.fetchProjects = fetchProjects;
  
  const root = document.getElementById("root")

  ReactDOM.render(<Root store={store} />, root)
})