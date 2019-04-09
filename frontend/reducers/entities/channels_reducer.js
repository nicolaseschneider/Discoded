import { RECEIVE_CHANNEL, RECEIVE_ALL_CHANNELS, CLEAR_CHANNELS } from '../../actions/channel_actions';
import { merge } from 'lodash';
import {RECEIVE_USERS } from '../../actions/user_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      let newState = merge({},state)
      newState[action.payload.channel_id].users = Object.keys(action.payload.users) 
      return newState
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      const newChannel = { [action.channel.id]: action.channel };
      return merge({}, state, newChannel);
    case CLEAR_CHANNELS:
      return {};
    default:
      return state;
  }
};