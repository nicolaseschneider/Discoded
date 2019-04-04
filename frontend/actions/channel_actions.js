
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';
import * as APIChannelUtil from '../utils/channel_util';
import {receiveErrors} from './server_actions';

const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel,
});
const receiveChannels = (channels) => ({
  type: RECEIVE_ALL_CHANNELS,
  channels,
});
export const selectChannel = (id) => ({
  type: SELECT_CHANNEL,
  id,
});

export const getChannel = channelId => dispatch => APIChannelUtil.fetchChannel(channelId)
  .then(channel => dispatch(receiveChannel(channel)),
    errors => dispatch(receiveErrors(errors)));

export const getChannels = (serverId) => dispatch => APIChannelUtil.fetchChannels(serverId)
  .then(channels => dispatch(receiveChannels(channels)),
    errors => dispatch(receiveErrors(errors)));

export const createChannel = formchannel => dispatch => APIChannelUtil.createChannel(formchannel)
  .then(channel => { debugger
    return dispatch(receiveChannel(channel))},
    errors => dispatch(receiveErrors(errors)));
