import { 
  RECEIVE_TODO_LISTS, 
  RECEIVE_TODO_LIST, 
  REMOVE_TODO_LIST
} from "../../actions/todo_list_actions";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  // debugger
  switch (action.type) {
    case RECEIVE_TODO_LISTS:
      return Object.assign({}, oldState, action.todoLists);
    case RECEIVE_TODO_LIST:
      return Object.assign({}, oldState, { [action.todoList.id]: action.todoList});
    case REMOVE_TODO_LIST:
      let nextState = Object.assign({}, oldState);
      delete nextState[action.projectId];
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
}