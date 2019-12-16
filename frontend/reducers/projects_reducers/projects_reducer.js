import React from "react";
import { RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT } from "../../actions/project_actions";

export default (oldState = {}, action ) => {
  Object.freeze(oldState);
  // debugger
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return Object.assign({}, oldState, action.projects)
    case RECEIVE_PROJECT:
      debugger
      return Object.assign({}, oldState, { [action.project.id]: action.project })
    case REMOVE_PROJECT:
      let nextState = Object.assign({}, oldState)
      delete nextState[action.projectId]
      return nextState;
    default:
      return oldState;
  }
}