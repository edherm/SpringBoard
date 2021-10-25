import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_reducers/session_errors_reducer';
import projectErrorsReducer from './projects_reducers/project_errors_reducer';
import todoListsErrorsReducer from './todo_lists_reducers/todo_lists_errors_reducer';
import todosErrorsReducer from './todos_reducers/todos_errors_reducer';
import messagesErrorsReducer from './messages_reducers/messages_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  projects: projectErrorsReducer,
  todoLists: todoListsErrorsReducer,
  todos: todosErrorsReducer,
  messages: messagesErrorsReducer,
});
