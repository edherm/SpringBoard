import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) => {
  let middleWare = [thunk, logger];

  if (process.env.NODE_ENV === 'production'){
    middleWare = [thunk];
  }

  return createStore(rootReducer, preloadedState, applyMiddleware(...middleWare))
}

export default configureStore;