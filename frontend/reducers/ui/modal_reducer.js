import {DEFAULT_SERVER_MODAL,CLOSE_MODAL, CREATE_SERVER_MODAL, JOIN_SERVER_MODAL} from '../../actions/ui_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch(action.type){
    case DEFAULT_SERVER_MODAL || CREATE_SERVER_MODAL || JOIN_SERVER_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};