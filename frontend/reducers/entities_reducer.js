import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducers/projects_reducer';
import todoListsReducer from './todo_lists_reducers/todo_lists_reducer';
import todosReducer from './todos_reducers/todos_reducer';
import messagesReducer from './messages_reducers/messages_reducer';

export default combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  todo_lists: todoListsReducer,
  todos: todosReducer,
  messages: messagesReducer
})