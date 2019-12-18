import { RECEIVE_PROJECT, RECEIVE_PROJECT_ERRORS } from "../../actions/project_actions";


const _nullErrors = [];

export default (oldState = _nullErrors, action) => {
  Object.freeze(oldState);
  // debugger
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return [action.errors];
    case RECEIVE_PROJECT:
      return _nullErrors;  
    default:
      return oldState;
  }
}