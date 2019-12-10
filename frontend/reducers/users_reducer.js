import React from "react";
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  // debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { [action.user.id]: action.user })
    default:
      return oldState;
  }
}