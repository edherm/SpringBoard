import {
  RECEIVE_TODO_LIST,
  RECEIVE_TODO_LIST_ERRORS,
} from '../../actions/todo_list_actions';

const _nullErrors = [];

export default (oldState = _nullErrors, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_TODO_LIST_ERRORS:
      return [action.errors];
    case RECEIVE_TODO_LIST:
      return _nullErrors;
    default:
      return oldState;
  }
};
