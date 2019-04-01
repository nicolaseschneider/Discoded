import * as APIUser from '../utils/users_util'; //getUser
export const RECEIVE_USER = 'RECEIVE_USER';



const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});


export const getUser = id => dispatch => (
  APIUser.getUser(id).then(user => dispatch(receiveUser(user)))
);
