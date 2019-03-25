import * as APIAuthUtil from '../utils/session_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"; 
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";


const receiveCurrentUser = user =>({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});


export const createNewUser = formUser => dispatch => APIAuthUtil.postUser(formUser).then(user => dispatch(receiveCurrentUser(user)));
export const login = formUser => dispatch => APIAuthUtil.login(formUser).then(user => dispatch(receiveCurrentUser(user)));
export const logout = () => dispatch => APIAuthUtil.deleteSession().then( () => dispatch(logoutCurrentUser()));