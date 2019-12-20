import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducers/projects_reducer';
import todoListsReducer from './todo_lists/todo_lists_reducer';
import todoReducer from './todos_reducers/todos_reducer';

export default combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  todo_lists: todoListsReducer,
  todos: todoReducer
})

// if (action.type === LOGOUT_CURRENT_USER) {
//   return {
//     users: {},
//     projects: {}
//   }
// }