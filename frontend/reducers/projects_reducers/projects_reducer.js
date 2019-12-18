import React from "react";
import { RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT } from "../../actions/project_actions";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";

export default (oldState = {}, action ) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return Object.assign({}, oldState, action.projects)
    case RECEIVE_PROJECT:
      return { [action.project.id]: action.project }
    case REMOVE_PROJECT:
      let nextState = Object.assign({}, oldState)
      delete nextState[action.projectId]
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
}

// Object.assign({}, oldState, )