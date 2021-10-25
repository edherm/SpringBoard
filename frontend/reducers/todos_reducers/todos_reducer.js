import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO,
} from '../../actions/todo_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_TODOS:
      return Object.assign({}, oldState, action.todos);
    case RECEIVE_TODO:
      return Object.assign({}, oldState, { [action.todo.id]: action.todo });
    case REMOVE_TODO:
      let nextState = Object.assign({}, oldState);
      delete nextState[action.todoId];
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};
