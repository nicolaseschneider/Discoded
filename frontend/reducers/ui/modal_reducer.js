import {DEFAULT_SERVER_MODAL,CLOSE_MODAL, CREATE_SERVER_MODAL, JOIN_SERVER_MODAL} from '../../actions/ui_actions';
import { RECEIVE_SERVER } from '../../actions/server_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch(action.type){
    case DEFAULT_SERVER_MODAL:
      return action.modal;
    case CREATE_SERVER_MODAL :
      return action.modal;
    case JOIN_SERVER_MODAL:
      return action.modal;
    case CLOSE_MODAL:

      return null;
    case RECEIVE_SERVER:
      return null;
    default:
      return state;
  }
};