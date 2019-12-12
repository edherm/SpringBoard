import React from "react";
import { RECEIVE_PROJECTS } from "../../actions/project_actions";

export default (oldState = [], action ) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return Object.assign([], oldState, action.projects)  
    default:
      return oldState;
  }
}