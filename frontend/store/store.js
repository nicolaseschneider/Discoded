import { createStore } from 'react-redux';

const thunk =( {getstate, dispatch} ) => next => action => {
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
 