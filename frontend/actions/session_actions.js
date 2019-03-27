import * as APIAuthUtil from '../utils/session_util';
export const RECEIVE_SESSION = "RECEIVE_SESSION"; 
export const DESTROY_SESSION = "DESTROY_SESSION";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';


const receiveSession = user =>({
    type: RECEIVE_SESSION,
    user,
});

const destroySession = () => ({
    type: DESTROY_SESSION,
});
const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors,
});

export const signUp = formUser => dispatch => APIAuthUtil.signUp(formUser)
    .then(user => dispatch(receiveSession(user)), 
    errors => dispatch(receiveErrors(errors)));

export const login = formUser => dispatch => APIAuthUtil.login(formUser)
    .then(user => dispatch(receiveSession(user)), 
    errors => dispatch(receiveErrors(errors)));
    
export const logout = () => dispatch => APIAuthUtil.logout()
    .then( () => dispatch(destroySession()), 
    errors => dispatch(receiveErrors(errors)));