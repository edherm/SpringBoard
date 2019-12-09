import { combineReducers } from "redux";
import sessionErrorsReducer from './session_reducers/session_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer
})