import { RECEIVE_SESSION, DESTROY_SESSION } from '../../actions/session_actions';

const _nullState = {
  currentUser: null
};

export default (state = _nullState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSION:
      return { currentUser: action.user.id };
    case DESTROY_SESSION:
      return _nullState;
    default:
      return state;
  }

};
