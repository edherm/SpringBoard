import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
// import { fetchMessages, fetchMessage, createMessage, updateMessage, deleteMessage } from "./actions/message_actions";


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

  // For test purposes:
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchMessages = fetchMessages;
  // window.fetchMessage = fetchMessage;
  // window.createMessage = createMessage;
  // window.updateMessage = updateMessage;
  // window.deleteMessage = deleteMessage;
  
  
  const root = document.getElementById("root")

  ReactDOM.render(<Root store={store} />, root)
})