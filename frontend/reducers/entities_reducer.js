import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import projectReducer from './projects_reducers/project_reducer';

export default combineReducers({
  users: usersReducer,
  projects: projectReducer
})