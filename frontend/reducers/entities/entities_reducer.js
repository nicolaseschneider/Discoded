import { combineReducers } from 'redux';
import users from './users/users_reducer';
import servers from './server_reducer';

export default combineReducers({
  users,
  servers,
}); 

