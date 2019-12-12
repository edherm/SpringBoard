import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducers/projects_reducer';

export default combineReducers({
  users: usersReducer,
  projects: projectsReducer
})