import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

// const configureStore = (preloadedState = {}) => {

//   let middleWare = [thunk, logger];

//   if (process.env.NODE_ENV === 'production'){
//     middleWare = [thunk];
//   }

//   return createStore(rootReducer, preloadedState, applyMiddleware(...middleWare))
// }

export default configureStore;
