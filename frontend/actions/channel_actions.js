
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
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

export const getChannel = channelId => dispatch => APIChannelUtil.fetchChannel(channelId)
  .then(channel => dispatch(receiveChannel(channel)),
    errors => dispatch(receiveErrors(errors)));

export const getChannels = (serverId) => dispatch => APIChannelUtil.fetchChannels(serverId)
  .then(channels => dispatch(receiveChannels(channels)),
    errors => dispatch(receiveErrors(errors)));

export const createChannel = formchannel => dispatch => APIChannelUtil.createChannel(formchannel)
  .then(channel => dispatch(receiveChannel(channel)),
    errors => dispatch(receiveErrors(errors)));
