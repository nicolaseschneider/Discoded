import { RECEIVE_CHANNEL, RECEIVE_ALL_CHANNELS } from '../../actions/channel_actions';
import { merge } from 'lodash';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_ALL_CHANNELS:

      return action.channels;

    case RECEIVE_CHANNEL:

      const newChannel = { [action.channel.id]: action.channel };
      return merge({}, state, newChannel);

    default:
      return state;
  }
};