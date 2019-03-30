import * as APIServerUtil from '../utils/server_util';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';



const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server,
});
const receiveServers = servers => ({
  type: RECEIVE_ALL_SERVERS,
  servers,
});

const destroyServer = (serverId) => ({
  type: REMOVE_SERVER,
  serverId,
});

const receiveErrors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors,
});


export const joinServer = invite_code => dispatch => APIServerUtil.joinServer(invite_code)
  .then(server => dispatch(receiveServer(server)),
  errors => dispatch(receiveErrors(errors)));
  
export const getServer = serverId => dispatch => APIServerUtil.getServer(serverId)
  .then(server => dispatch(receiveServer(server)),
    errors => dispatch(receiveErrors(errors)));

export const getServers = () => dispatch => APIServerUtil.getServers()
  .then(servers => dispatch(receiveServers(servers)),
    errors => dispatch(receiveErrors(errors)));

export const createServer = formServer => dispatch => APIServerUtil.createServer(formServer)
  .then(server => dispatch(receiveServer(server)),
    errors => dispatch(receiveErrors(errors)));

export const updateServer = formServer => dispatch => APIServerUtil.updateServer(formServer)
  .then(server => dispatch(receiveServer(server)),
    errors => dispatch(receiveErrors(errors)));

export const deleteServer = serverId => dispatch => APIServerUtil.deleteServer(serverId)
  .then(() => dispatch(destroyServer(serverId)),
    errors => dispatch(receiveErrors(errors)));