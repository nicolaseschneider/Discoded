import { combineReducers } from 'redux';
import users from './users/users_reducer';
import servers from './server_reducer';
import channels from './channels_reducer';

export default combineReducers({
  users,
  servers,
  channels,
}); 

