import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../../actions/session_actions';

const _nullErrors = [];

export default (oldState = _nullErrors, action) => {
  Object.freeze(oldState);
  // debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case RECEIVE_ERRORS:
      // debugger
      return action.errors;
    default:
      return oldState;
  }
}