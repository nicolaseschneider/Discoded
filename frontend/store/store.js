import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

const thunk =( { getState, dispatch} ) => next => action => {
  if(action instanceof Function){
    return action(dispatch, getState);
  }
  return next(action);
};

export default (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);
 