import { RECEIVE_SERVER, REMOVE_SERVER, RECEIVE_ALL_SERVERS } from '../../actions/server_actions';
import { merge } from 'lodash';


export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_ALL_SERVERS:
      return action.servers;

    case RECEIVE_SERVER:
      newServer = {[action.server.id]: action.user};
      return merge({},state,newServer);

    case REMOVE_SERVER:
      newState = Object.assign({},state);
      delete(newState[action.serverId]);
      return newState;

    default:
      return state;
  }
}