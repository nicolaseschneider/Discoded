import { combineReducers } from 'redux';
import modal from './modal_reducer';
import server from './server_ui_reducer';

export default combineReducers({
  modal,
  server,
});

