import { combineReducers } from 'redux';
import session from './session/session_reducer.js';
import entities from './entities/entities_reducer';


export default combineReducers({
  entities,
  session
});

