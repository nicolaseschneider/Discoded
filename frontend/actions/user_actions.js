import * as APIUser from '../utils/users_util'; //getUser
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';


const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});
const receiveUsers = payload => ({
  type: RECEIVE_USERS,
  payload,
})

export const getUser = id => dispatch => (
  APIUser.getUser(id).then(user => dispatch(receiveUser(user)))
);
export const getUsers = channelId => dispatch => (
  APIUser.getUsers(channelId).then(users => dispatch(receiveUsers(users)))
);