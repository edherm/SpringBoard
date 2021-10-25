import { RECEIVE_TODO, RECEIVE_TODO_ERRORS } from '../../actions/todo_actions';

const _nullErrors = [];

export default (oldState = _nullErrors, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_TODO_ERRORS:
      return [action.errors];
    case RECEIVE_TODO:
      return _nullErrors;
    default:
      return oldState;
  }
};
