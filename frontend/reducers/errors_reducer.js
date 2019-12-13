import { combineReducers } from "redux";
import sessionErrorsReducer from './session_reducers/session_errors_reducer';
import projectErrorsReducer from './projects_reducers/project_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  projects: projectErrorsReducer
})